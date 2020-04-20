from pymongo import MongoClient
from flask import jsonify
import gzip
ghost = 'mongodb://localhost:27017'

server = 'mongodb://mofei:kingmofei@127.0.0.1:27000'
db = MongoClient (server,serverSelectionTimeoutMS=2000, socketTimeoutMS=2000)



if __name__ == '__main__':
    import datetime
    import time
    import json

    server = 'mongodb://mofei:kingmofei@107.167.177.248:27000'
    db = MongoClient(server, serverSelectionTimeoutMS=1000, socketTimeoutMS=1000)











