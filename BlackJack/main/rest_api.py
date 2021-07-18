from flask_restful import Resource
from flask import request
import json
# from flask_jwt import jwt_required


class BankLevels(Resource):
    def get(self):
        with open("BlackJack/static/bank_levels.json", "r") as levels:
            data = json.load(levels)
            return data

