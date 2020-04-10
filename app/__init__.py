
from flask import Blueprint,request,render_template,redirect,jsonify,url_for,session


from flask import Flask,make_response

from werkzeug.routing import BaseConverter
from datetime import timedelta

class Config(object):
    DEBUG = True
    SECRET_KEY = "mofei"



app = Flask(__name__)

app.config.from_object( Config )
app.config['SEND_FILE_MAX_DEFAULT'] = timedelta(seconds=1)


@app.route('/')
def index():

    return render_template('index.html')

@app.route("/login")
def login():
    return redirect( url_for("index") )

@app.route('/user/<user_id>')
def user_info(user_id):
    return 'hello %s' % user_id




if __name__ == '__main__':
    app.run()




