﻿from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def load_sqlalchemy(app):
    # db绑定app
    db.init_app(app)
