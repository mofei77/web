from pymongo import MongoClient
from flask import jsonify
import gzip
ghost = 'mongodb://localhost:27017'

server = 'mongodb://mofei:kingmofei@107.167.177.248:27017'
db = MongoClient (ghost)


def get():
    for i in range(14000000,14200000):
        yield i

def insert(data,col):

    r = col.find_one()
    print(list(r))

if __name__ == '__main__':
    import datetime
    import time
    import json











