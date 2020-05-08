import requests
from requests.exceptions import ProxyError
url = 'https://w.sports.williamhill.com/betting/en-gb/boxing/OB_EV16898785.partial'
head = {
'Cookie': 'trk_jsoncookie=1;abc;'
}
sess = requests.session()
r =sess.post('http://127.0.0.1/check/',data={'text':'c425'})
print(r.text)

import redis
host = 'localhost'