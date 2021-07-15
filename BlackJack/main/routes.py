from flask import render_template, request, Blueprint, redirect, url_for

main = Blueprint('main', __name__)


@main.route("/")
def index():
    return redirect(url_for('main.home'))


@main.route("/home")
def home():
    background = 'home-background'
    return render_template('home.html', background=background)


@main.route("/play")
def play():
    background = 'play-background'
    return render_template('play_dev.html',background=background)
