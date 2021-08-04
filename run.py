from BlackJack import create_app
from flask_restful import Api
from BlackJack.main.rest_api import BankLevels, GetCards
app = create_app()

api = Api(app)
api.add_resource(BankLevels, '/api_bank_levels')
api.add_resource(GetCards, '/api_get_cards')
if __name__ == '__main__':
    app.run(debug=True)
