from flask import Blueprint


def create_tag_blueprint():
    tag_api = Blueprint('tag', __name__, url_prefix='/api')

    @tag_api.route('/tag', methods=['POST'])
    def tag():
        return "Lorem"

    @tag_api.route('/tag/<string:type>/<string:id>')
    def tag_type(type, id):
        return "Lorem"

    return tag_api
