from flask_restful import Resource
from flask import request
import json
import numpy as np
import datetime
# from flask_jwt import jwt_required


class BankLevels(Resource):
    def get(self):
        with open("BlackJack/static/bank_levels.json", "r") as levels:
            data = json.load(levels)
            return data


class GetCards(Resource):
    def get(self):
        cards = range(1, 53)
        np.random.shuffle(list(cards))
        boot = np.array([])
        for i in range(6):
            boot = np.concatenate((boot, cards), axis=None)
        np.random.seed(datetime.datetime.now().microsecond)
        np.random.shuffle(boot)
        print(boot)
        data_dict = boot.tolist()
        with open("BlackJack/static/boot.json", "w") as outfile:
            json.dump(data_dict, outfile)
        with open("BlackJack/static/boot.json", "r") as file:
            data = json.load(file)

        return data


