from db_mongo import db
import datetime
import json
from flask import make_response,request
import gzip


class CJsonEncoder(json.JSONEncoder):

    def default(self, obj):
        if isinstance(obj, datetime.datetime):
            return obj.strftime('%Y-%m-%d %H:%M:%S')
        else:
            return json.JSONEncoder.default(self, obj)
def hga025_response(*args,**kw):
    col = request.args.get('FStype')
    rtype = request.args.get('rtype')
    isfuture = eval(request.args.get('isfuture'))
    if rtype == 'p3':
        collect = db['hga025']['P3']
        delay = datetime.datetime.now() - datetime.timedelta(hours=1)
        mongo_result = collect.find({'FStype': col,'startTime': {'$gt': delay},'updateTime':{'$gt': delay} }, {"_id": 0})
        text = json.dumps(list(mongo_result), cls=CJsonEncoder)
        text = gzip.compress(text.encode('utf-8'))
        response = make_response(text)
        response.headers['Content-Encoding'] = 'gzip'
        response.headers['Content-Type'] = 'application/json'
        return response
    elif rtype == 're':
        collect = db['hga025']['RE']
        delay = datetime.datetime.now() - datetime.timedelta(hours=1)
        mongo_result = collect.find({'FStype': col, 'startTime': {'$gt': delay},'updateTime':{'$gt': delay}}, {"_id": 0})
        text = json.dumps(list(mongo_result), cls=CJsonEncoder)
        text = gzip.compress(text.encode('utf-8'))
        response = make_response(text)
        response.headers['Content-Encoding'] = 'gzip'
        response.headers['Content-Type'] = 'application/json'
        return response

    else:
        collect = db['hga025'][col]
        delay = datetime.datetime.now() - datetime.timedelta(hours=1)
        mongo_result = collect.find({'rtype': rtype,'isfuture': isfuture, 'startTime': {'$gt': delay},'updateTime':{'$gt': delay}}, {"_id": 0})
        text = json.dumps(list(mongo_result), cls=CJsonEncoder)
        text = gzip.compress(text.encode('utf-8'))
        response = make_response(text)
        response.headers['Content-Encoding'] = 'gzip'
        response.headers['Content-Type'] = 'application/json'
        return response

def pinnacle_response(*args,**kw):
    col = request.args.get('gtype')
    sportid = int(request.args.get('sportid'))
    type = request.args.get('type')
    if col == 'Special':
        collect = db['pinnacle'][col]
        delay = datetime.datetime.now() - datetime.timedelta(hours=1)
        mongo_result = collect.find({'sportid': sportid,'startTime': {'$gt': delay},'updateTime': {'$gt': delay}}, {"_id": 0})
        text = json.dumps(list(mongo_result), cls=CJsonEncoder)
        text = gzip.compress(text.encode('utf-8'))
        response = make_response(text)
        response.headers['Content-Encoding'] = 'gzip'
        response.headers['Content-Type'] = 'application/json'
        return response


    elif col== 'Rollball':
        collect = db['pinnacle'][col]
        delay = datetime.datetime.now() - datetime.timedelta(hours=5)
        mongo_result = collect.find({'sportid': sportid,'startTime': {'$gt': delay},'updateTime': {'$gt': delay}}, {"_id": 0})
        text = json.dumps(list(mongo_result), cls=CJsonEncoder)
        text = gzip.compress(text.encode('utf-8'))
        response = make_response(text)
        response.headers['Content-Encoding'] = 'gzip'
        response.headers['Content-Type'] = 'application/json'
        return response
    else:

        collect = db['pinnacle'][col]
        delay = datetime.datetime.now() - datetime.timedelta(hours=1)
        mongo_result = collect.find({'startTime': {'$gt': delay},'updateTime': {'$gt': delay}}, {"_id": 0})
        text = json.dumps(list(mongo_result), cls=CJsonEncoder)
        text = gzip.compress(text.encode('utf-8'))
        response = make_response(text)
        response.headers['Content-Encoding'] = 'gzip'
        response.headers['Content-Type'] = 'application/json'
        return response


