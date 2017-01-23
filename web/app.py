from flask import Flask

from web.api.views import create_tag_blueprint
from web.config import DefaultConfig, DebugConfig


def create_app(production=False, debug=True):
    app = Flask(__name__)
    app.config.from_object(DefaultConfig)

    if debug:
        app.config.from_object(DebugConfig)

    configure_blueprints(app)

    return app


def configure_blueprints(app):
    app.register_blueprint(create_tag_blueprint())
