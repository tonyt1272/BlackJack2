from flask_restful import Resource
from flask import request
import json
import numpy as np
# from flask_jwt import jwt_required


class BankLevels(Resource):
    def get(self):
        with open("BlackJack/static/bank_levels.json", "r") as levels:
            data = json.load(levels)
            return data


# class GetCards(Resource):
#     def get(self, size):
#         cards = range(1, 53)
#         boot = np.array([])
#         for i in range(size):
#             boot = np.concatenate((boot, cards), axis=None)
#             np.random.shuffle(boot)
#         return {'boot': boot}


