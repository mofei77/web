from flask import Blueprint,request,render_template,redirect,jsonify,url_for,session


from flask import Flask,make_response
import gzip
import json
from datetime import timedelta
import datetime
from db_mongo import db


class CJsonEncoder(json.JSONEncoder):

    def default(self, obj):
        if isinstance(obj, datetime.datetime):
            return obj.strftime('%Y-%m-%d %H:%M:%S')
        else:
            return json.JSONEncoder.default(self, obj)
class Config(object):
    DEBUG = True
    SECRET_KEY = "mofofei"
    SEND_FILE_MAX_AGE_DEFAULT = timedelta(seconds=1)

def hga025_response(col,rtype,isfuture):
    print(col,rtype,isfuture)
    if rtype == 'p3':
        collect = db['hga025']['P3']
        delay = datetime.datetime.now() - datetime.timedelta(hours=1)
        mongo_result = collect.find({'FStype': col,'startTime': {'$gt': delay}}, {"_id": 0})
        text = json.dumps(list(mongo_result), cls=CJsonEncoder)
        text = gzip.compress(text.encode('utf-8'))
        response = make_response(text)
        response.headers['Content-Encoding'] = 'gzip'
        response.headers['Content-Type'] = 'application/json'
        return response
    elif rtype == 're':
        collect = db['hga025']['RE']
        delay = datetime.datetime.now() - datetime.timedelta(hours=1)
        mongo_result = collect.find({'FStype': col, 'startTime': {'$gt': delay}}, {"_id": 0})
        text = json.dumps(list(mongo_result), cls=CJsonEncoder)
        text = gzip.compress(text.encode('utf-8'))
        response = make_response(text)
        response.headers['Content-Encoding'] = 'gzip'
        response.headers['Content-Type'] = 'application/json'
        return response

    else:
        collect = db['hga025'][col]
        delay = datetime.datetime.now() - datetime.timedelta(hours=1)
        mongo_result = collect.find({'rtype': rtype,'isfuture': isfuture, 'startTime': {'$gt': delay}}, {"_id": 0})
        text = json.dumps(list(mongo_result), cls=CJsonEncoder)
        text = gzip.compress(text.encode('utf-8'))
        response = make_response(text)
        response.headers['Content-Encoding'] = 'gzip'
        response.headers['Content-Type'] = 'application/json'
        return response
app = Flask(__name__)
app.config.from_object( Config )

@app.route('/')
def index():
    rep = render_template('index.html')
    reponse = make_response(rep)
    return reponse


@app.route('/hkjc/')
def index_hkjc():
    rep = render_template('hkjc/index.html')
    reponse = make_response(rep)
    return reponse

@app.route('/pinnacle/')
def index_pinnacle():
    rep = render_template('pinnacle/index.html')
    reponse = make_response(rep)
    return reponse
@app.route('/hga025/')
def index_hga025():
    rep = render_template('hga025/index.html')
    reponse = make_response(rep)
    return reponse

@app.route('/api/hkjc/<string:collection>')
def api_hkjc(collection):

    collect = db['hkjc'][collection]
    delay = datetime.datetime.now() - datetime.timedelta(hours=1)
    mongo_result = collect.find({'startTime': {'$gt': delay}}, {"_id": 0})
    text = json.dumps(list(mongo_result),cls=CJsonEncoder)
    text =  gzip.compress(text.encode('utf-8'))
    response = make_response(text)
    response.headers['Content-Encoding'] = 'gzip'
    response.headers['Content-Type']='application/json'
    return response

@app.route('/api/hga025/')
def api_hga025():

    col  = request.args.get('FStype')
    rtype = request.args.get('rtype')
    isfuture = eval(request.args.get('isfuture'))
    response = hga025_response(col,rtype,isfuture)

    return response


@app.route('/api/pinnacle/<string:collection>')
def api_pinnacle(collection):

    collect = db['pinnacle'][collection]
    delay = datetime.datetime.now() - datetime.timedelta(hours=1)
    mongo_result = collect.find({'updateTime':{'$gt':delay}},{"_id": 0})
    text = json.dumps(list(mongo_result),cls=CJsonEncoder)
    text =  gzip.compress(text.encode('utf-8'))
    response = make_response(text)
    response.headers['Content-Encoding'] = 'gzip'
    response.headers['Content-Type']='application/json'
    return response

if __name__ == '__main__':
    app.run(host='127.0.0.1',port=80)
