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
    # background = 'white-background'
    background = 'home-background'
    return render_template('play_dev.html', background=background)


@main.route("/about")
def about():
    background = 'home-background'
    return render_template('about.html', background=background)
