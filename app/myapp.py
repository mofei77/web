from flask import Blueprint,request,render_template,redirect,jsonify,url_for,session


from flask import Flask,make_response,Response
import gzip
import json
from datetime import timedelta
import datetime
from db_mongo import db
from response import hga025_response,pinnacle_response
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

    col  = request.args.get('FStype')
    rtype = request.args.get('rtype')
    isfuture = eval(request.args.get('isfuture'))
    response = hga025_response(col,rtype,isfuture)

    return response


@app.route('/api/pinnacle/')
def api_pinnacle():

    response = pinnacle_response()
    return response

if __name__ == '__main__':
    app.run(host='127.0.0.1',port=80)
