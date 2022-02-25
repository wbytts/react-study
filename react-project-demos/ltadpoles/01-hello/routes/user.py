from flask import Blueprint, request, g
from flask.json import jsonify
from exts import db
from models import User
from utils.jwt_util import generate_jwt

user_bp = Blueprint("user", __name__)


# 查询所有用户
@user_bp.route("/query_all", methods=['GET', 'POST'])
def query_all():
    # SQLAlchemy ORM    Object Releation Mapping
    # flask-sqlalchemy
    # select * from user
    # result.fetchall()
    users = User.query.all()
    result = list(map(User.to_json, users))
    return jsonify(result)


# 查询单个用户信息
@user_bp.route('/<user_id>', methods=['GET'])
def query_user(user_id):
    user = User.query.filter_by(id=user_id).all()[0]
    return jsonify({
        'result': True,
        'msg': '查询成功',
        'data': user.to_json()
    })


# 添加一个用户
@user_bp.route('/', methods=['POST'])
def add_user():
    # username = request.json['username']
    # password = request.json['password']
    # email = request.json['email']
    # u = User(username=username, password=password, email=email)
    u = User(**request.json)
    db.session.add(u)
    db.session.commit()
    return jsonify({
        "result": True,
        "msg": "用户添加成功",
        "user": u.to_json()
    })

# 删除指定user_id的用户信息
@user_bp.route('/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    print('user_id=', user_id)
    # db.session.execute('delete from user where id='+user_id)
    # db.session.commit()

    User.query.filter_by(id=user_id).delete()
    db.session.commit()

<<<<<<< HEAD
    return 'ok'
=======
    return jsonify({
        "result": True,
        "msg": '删除成功'
    })
>>>>>>> 83d3ea4ce95ce89ac0b2f517e055a02fbf178c7e


# 用户登陆
@user_bp.route('/login', methods=['POST'])
def login():
    username = request.json["username"]
    password = request.json["password"]
    print('接收到登陆请求：', f'用户名={username}, 密码={password}')

    users = User.query.filter_by(username=username).all()

    if len(users) == 0:
        return jsonify({
            "result": False,
            "msg": "用户不存在"
        })

    u = users[0]

    if password == u.password:
        # 生成一个令牌，作为用户凭证
        token = generate_jwt({"username": username})
        return jsonify({
            "result": True,
            "msg": "登陆成功！",
            "token": token,
        })
    else:
<<<<<<< HEAD
        return '登陆失败'

=======
        return jsonify({
            "result": False,
            "msg": "密码错误！"
        })
>>>>>>> 83d3ea4ce95ce89ac0b2f517e055a02fbf178c7e

# 用户注册
@user_bp.route('/register', methods=['POST'])
def register():
<<<<<<< HEAD
    return "注册成功"

# add = lambda x: x+1


# def add(x):
#     return x+1
=======
    username = request.json['username']
    password = request.json['password']
    password2 = request.json['password2']

    if password != password2:
        return jsonify({
            'result': False,
            'msg': '两次输入的密码不同！'
        })

    users = User.query.filter_by(username=username).all()
    if len(users) != 0:
        return jsonify({
            "result": False,
            'msg': '用户名已存在'
        })

    u = User(username=username, password=password)
    db.session.add(u)
    db.session.commit()

    return jsonify({
        'result': True,
        'msg': "注册成功",
        'data': u.to_json()
    })

# 获取当前登录的用户信息
@user_bp.route('/userInfo', methods=['POST'])
def test_token_info():
    return jsonify({
        "userInfo": g.userInfo
    })




>>>>>>> 83d3ea4ce95ce89ac0b2f517e055a02fbf178c7e
