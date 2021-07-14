from flask import render_template, request, Blueprint, redirect, url_for

main = Blueprint('main', __name__)


@main.route("/")
def index():
    return redirect(url_for('main.home'))


@main.route("/home")
def home():
    return render_template('home.html')


@main.route("/play")
def play():
    return render_template('play_dev.html')