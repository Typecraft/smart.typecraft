from flask import Blueprint
from flask import render_template

frontend_api = Blueprint('frontend', __name__, template_folder='templates')

@frontend_api.route('/')
def index():
    return render_template('frontend/index.html')
