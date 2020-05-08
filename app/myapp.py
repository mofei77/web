from flask import Blueprint,request,render_template,redirect,jsonify,url_for,session


from flask import Flask,make_response,Response
import gzip
import json
from datetime import timedelta
import datetime
from db_mongo import db
from response import hga025_response,pinnacle_response
from captcha import getcaptcha,str
app = Flask(__name__)

class Config(object):
    DEBUG = True
    SECRET_KEY = "mofofei"
    SEND_FILE_MAX_AGE_DEFAULT = timedelta(seconds=1)
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

@app.route('/api/hkjc/')
def api_hkjc():


    return jsonify([])

@app.route('/api/hga025/')
def api_hga025():

    response =  hga025_response()
    return response

@app.route('/api/pinnacle/')
def api_pinnacle():

    response = pinnacle_response()
    return response

@app.route('/api/hga025/markets/')
def hga025_matchinfo():

    col = request.args.get('FStype')
    matchid = int(request.args.get('matchid'))
    response =db['hga025'][col].find({'matchid': int(matchid)},{'_id':0})
    return jsonify(list(response))

@app.route('/api/pinnacle/markets/')
def pinnacle_matchinfo():

    col = request.args.get('gtype')
    matchid = int(request.args.get('matchid'))
    response =db['pinnacle'][col].find({'$or':[{'matchid': int(matchid)},{'parentid':int(matchid)}]},{'_id':0})
    return jsonify(list(response))


@app.route('/captcha/')
def generate_captcha():
    s = str()
    r = getcaptcha(s)
    session['text'] = s
    response = make_response(r)
    response.headers['content-type']= 'image/JPEG'
    return response
@app.route('/check/',methods=['POST'])
def check_captcha():
    if request.method == 'POST':

        text = request.form['text']
        if text == session['text']:
            response = make_response('ok')
            response.headers['Content-Type'] = 'text/javascript'
            return response
        else:
            response = make_response('error')
            response.headers['Content-Type'] = 'text/javascript'
            return response
    else:
        return '403'

if __name__ == '__main__':
    app.run(host='192.168.2.27',port=80)
