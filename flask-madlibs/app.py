from flask import Flask, render_template, request
from stories import story

app = Flask(__name__)

@app.route('/')
def pick_story():
    return render_template('story_templates.html', template=story.template)

@app.route('/words')
def create_story():
    return render_template('get_words.html', words=story.prompts)

@app.route('/story')
def render_story():
    text = story.generate(request.args)
    return render_template('story.html', text = text)