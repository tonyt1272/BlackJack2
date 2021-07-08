from flask import render_template, request, Blueprint

main = Blueprint('main', __name__)


@main.route("/")
@main.route("/home")
def home():
    return render_template('home.html')


@main.route("/play")
def play():
    return render_template('play_dev.html')