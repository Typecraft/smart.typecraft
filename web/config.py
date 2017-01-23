import os

from web.utils import FOLDER_PATH


class DefaultConfig(object):
    SECRET_KEY = '!mv ()#nnalg b 12e era9g'
    ADMINS = ['tormod.haugland@gmail.com']
    PROJECT = 'smart.typecraft.org'

    LOG_FOLDER = os.path.join(FOLDER_PATH, '/logs')

    UPLOAD_FOLDER = '/tmp'
    ALLOWED_EXTENSIONS = {'txt', 'xml', 'json', 'antx', 'graf', 'tgf', 'yml', 'yaml'}