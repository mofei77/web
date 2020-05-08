from pymongo import MongoClient
from flask import jsonify
import gzip
ghost = 'mongodb://localhost:27017'
ip = '107.167.177.248:27000'
server = f'mongodb://mofei:kingmofei@{ip}'
db = MongoClient (ghost,serverSelectionTimeoutMS=2000, socketTimeoutMS=2000)


if __name__ == '__main__':
    import datetime
    import time
    import json
    from pprint import pprint
    delay = datetime.datetime.now() - datetime.timedelta(hours=1)
    server = 'mongodb://mofei:kingmofei@107.167.177.248:27000'
    db = MongoClient(ghost, serverSelectionTimeoutMS=1000, socketTimeoutMS=1000)
    col= 'SoccerSingle'
    collect = db['hga025'][col]
    delay = datetime.datetime.now() - datetime.timedelta(hours=1)

    response = collect.find({'rtype': 'pd', 'isfuture': False, 'startTime': {'$gt': delay}}, {"_id": 0})
    pprint(len(list(response)))











