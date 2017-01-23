from flask import Blueprint


def create_tag_blueprint():
    tag_api = Blueprint('tag', __name__, url_prefix='/api')

    @tag_api.route('/tag', method=['POST'])
    def tag():
        pass

    @tag_api.route('/tag/<string:type>/<string:id>')
    def tag_type(type, id):
        pass

    return tag_api
