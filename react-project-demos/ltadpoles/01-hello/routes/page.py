from flask import Blueprint, request, render_template
from flask.json import jsonify

page_bp = Blueprint("page", __name__)


@page_bp.route('/index')
def index():
    return render_template('index.html')


@page_bp.route('/index2')
def index2():
    return render_template('index2.html')
