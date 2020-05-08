from PIL import Image,ImageFilter
from PIL import ImageDraw
from PIL import ImageFont
import random
import base64
import  io


def getRandomColor():
    '''获取一个随机颜色(r,g,b)格式的'''
    c1 = random.randint(0, 255)
    c2 = random.randint(0, 255)
    c3 = random.randint(0, 255)
    return (random.randint(32, 127), random.randint(32, 127), random.randint(32, 127))


# 获取一个Image对象，参数分别是RGB模式。宽150，高30，随机颜色


# 在图片上写东西,参数是：定位，字符串，颜色，字体
def str():
    l =['a','b','c','1','2','3','4','5']
    return ''.join(random.sample(l,4))

# 保存到硬盘，名为test.png格式为png的图片



def getcaptcha(s):

    #生成一个宽150高50,底色为白色的图片
    image = Image.new('RGB', (150, 50), getRandomColor())
    # 获取一个画笔对象，将图片对象传过去
    draw = ImageDraw.Draw(image)
    # 填充文本ttf的字体样式的目录和大小
    font = ImageFont.truetype("‪C:\\Windows\\Fonts\\arial.ttf", size=32)
    #填充文本，位置，文本，颜色，字体样式
    draw.text((20, 0), s, full=getRandomColor(), font=font)
    threshold = 200

    table = []
    for i in range(256):
        if i < threshold:
            table.append(0)
        else:
            table.append(1)

    ima = image.convert('L')
    photo = ima.point(table, '1')
    #ima.show()
    #image.show()
    imgbytes = io.BytesIO()
    image.save(imgbytes, format='PNG')
    bs = imgbytes.getvalue()
    return bs

getcaptcha(str())

