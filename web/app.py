from flask import Flask

from web.config import DefaultConfig


def create_app(production=False, debug=True):
    app = Flask(__name__)
    app.config.from_object(DefaultConfig)

    return app