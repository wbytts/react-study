from flask import Flask, jsonify, request, g
from flask.templating import render_template
import configs
from exts import load_sqlalchemy, db
from routes import user_bp
from utils.jwt_util import decrypt_jwt

# from flask_cors import *

# 初始化app实例
app = Flask(
    __name__,  # 判断是否是主模块
    static_url_path='/static',  # 默认静态资源请求路径
    static_folder='static',  # 静态文件夹路径，默认为 static
    template_folder='templates'  # 模板文件夹路径，默认为 templates
)
app.config['JSON_AS_ASCII'] = False  # 解决返回的json中文乱码
app.config.from_object(configs)  # 加载配置文件
load_sqlalchemy(app)  # 加载数据库 SQLAlchemy 框架


# CORS(app, supports_credentials=True) # 配置允许所有跨域，不安全

'''
app.url_map
    所有注册成功的路由，app.route 注册的路由都会被搜集到 url_map 中
    前提是可访问的会被搜集
'''

# 首页，显示路由规则
@app.route("/")
def index():
    rules = list(app.url_map.iter_rules())
    return render_template('url-map-rules.html', rules=rules)


# 注册蓝图
app.register_blueprint(user_bp, url_prefix='/user')


# flask命令：初始化数据库
@app.cli.command('db-init')
def cmd_db_create_all():
    db.create_all()  # 根据模型创建数据库表


# 通过 app.add_url_rule 添加路由规则
# app.add_url_rule('/test/add_url_rule', view_func=index)


@app.cli.command('lalala')
def hello():
    print('你号啊')


# 请求拦截器
# 在每个请求到达后端接口时，首先会进入这个方法，然后才会到达其对应的路由函数
@app.before_request
def befor_each_request():
    print('#' * 100)
    print("来了一个请求 ---> ", request.path)
    if request.path not in configs.VERIFICATION_WHITE_LIST:
        print('本次请求不在白名单中，需要验证token')
        if 'token' in request.headers:
            token = request.headers['token']
            print('这个请求带了token ==>', token)
            info = decrypt_jwt(token)
            print('token携带的信息：', info)
            g.userInfo = info
        else:
            return jsonify({
                "result": False,
                "msg": "你还没有登陆！"
            })
    else:
        print('本次请求在白名单中，直接通过！')


if __name__ == '__main__':
    # db.create_all()
    app.run()
