from flask import Flask

from web.api.views import create_tag_blueprint
from web.config import DefaultConfig


def create_app(production=False, debug=True):
    app = Flask(__name__)
    app.config.from_object(DefaultConfig)

    return app


def configure_blueprints(app):
    app.register_blueprint(create_tag_blueprint())