DB_URI = "mysql+pymysql://{username}:{password}@{host}:{port}/{db}?charset=utf8".format(
    host="127.0.0.1",
    port=3306,
    db="flask",
    username="root",
    password="root", # 老吴：root，我：123qwe，公司：123qwe
)

SQLALCHEMY_DATABASE_URI = DB_URI
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True

JWT_KEY = 'jgafbjkdghbfjasdbfj120371209321312asdasdasdasdasd'

# 免登陆白名单
VERIFICATION_WHITE_LIST = [
    '/',
    '/user/login', # 记得吧test的接口搬到user里
    '/user/register'
]
