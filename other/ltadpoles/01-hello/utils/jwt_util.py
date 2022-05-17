import jwt
import time
from configs import JWT_KEY

# headers
headers = {
    'alg': "HS256",  # 声明所使用的算法
}


def generate_jwt(payload):
    result = jwt.encode(payload, JWT_KEY, algorithm='HS256', headers=headers)
    return result


def decrypt_jwt(token):
    result = jwt.decode(token, JWT_KEY, algorithms='HS256')
    return result


if __name__ == '__main__':
    # payload
    payload = {
        'iat': time.time(),  # 时间戳
        'name': 'lowman'  # 自定义的参数
    }
    token = generate_jwt(payload)
    print('生成令牌：', token)
    data = decrypt_jwt(token)
    print('解析令牌：', data)
