from flask import Flask, request, render_template, redirect, flash, jsonify, make_response, session
from flask_debugtoolbar import DebugToolbarExtension
from random import randint, choice, sample



app = Flask(__name__)
# debug toolbar extension: configure secret key for viewing debugging and ensure app.config matches the decorator @app.config
app.config['SECRET_KEY'] = 'secret'
debug = DebugToolbarExtension(app)
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

# directing route using decorator @, which is expecting a function to come right after; flask listens for endpoints and routes and returns status codes by default
@app.route('/')
def  home_page():
    html = """
<html><body><h1>Home Page</h1
<p>Welcome to my webpage</p>
<a href='/hello'>Go to hello page</a></body></html>
"""
    return html

@app.route('/hello')
def say_hello():
    return render_template("hello.html")

@app.route('/goodbye')
def say_bye():
    return "GOODBYE "

@app.route('/search')
def search():
    # request.args returns immutable dict based on items passed into query string after q, giving us data struct we can pass in for 
    # dynamic web page; can access by importing request. this allows us to avoid parsing, storing in dict, etc.; happens automatically
    term = request.args["term"] #selects "whatever" in browser ?term="whatever"
    sort = request.args["sort"]
    return f"<h1>Search Results for: {term}</h1> <p>Sorting by: {sort}</p>"

# #must define listening for post requests by passing post into methods
# @app.route('/post', methods=["POST"])
# def post_demo():
#     return "You made a post request"

# must serve a get route with a form
@app.route('/add-comment')
def add_comment_form():
    # to submit form, specify method="POST" in the form HTML
    # adding the name attribute sets the KEY in the key-value pair returned by POSTing: name='comment' returns comment: [person's comment]
    return """
    <form method="POST">
        <input type='text' placeholder='comment' name='comment'>
        <button>Submit</button>
    </form>
"""

#the below extracts from the form something with the name of 'comment' defined above in input; 

@app.route('/add-comment', methods=["POST"])
def save_comment():
    comment = request.form["comment"]
    return f"""
        <h1> SAVED YOUR COMMENT: {comment} </h1>
"""
# this below will treat <subreddit> like a variable and by default pass it into show_subreddit; must add parameter subreddit into arg function def
@app.route('/r/<subreddit>')
def show_subreddit(subreddit):
    return f"THIS IS A SUBREDDIT ABOUT BROWSING {subreddit}"

POSTS = {
    1: 'I like chicken tenders',
    2: 'I hate mayo',
    3: 'double rainbow',
    4: 'yolo omg'
}

# including int treats the id as an int, otherwise default it is read as a string and will throw error
@app.route('/posts/<int:id>')
def find_post(id): 
    post = POSTS[id]
    return f"<p>{post}</p>"

# can have multiple variables
@app.route('/r/<subreddit>/comments/<post_id>')
def show_comments(subreddit, post_id):
    return f"Comments for {subreddit} subreddit with post id {post_id}"

# if __name__ == '__main__':
#     app.run(debug=True)




#### JINJA SYNTAX ####
# pass in a variable to HTML with format html_variable = python_variable
@app.route('/lucky')
def lucky_number():
    num = randint(1,10)
    return render_template('lucky.html', lucky_num=num)


@app.route('/spell/<word>')
def spell_word(word):
    return render_template('spell_word.html', word=word)

@app.route('/form_2')
def show_form_2():
    return render_template("form_2.html")

@app.route('/greet_2')
def get_greeting_2():
    username = request.args['username']
    # 'get' prevents throwing error if no value exists in wants_compliments
    wants_compliments = request.args.get("wants_compliments")
    nice_words = sample(COMPLIMENTS, 2)
    return render_template("greet_2.html", username=username, wants_compliments=wants_compliments, nice_words=nice_words)



@app.route('/form')
def show_form():
    return render_template('form.html')

COMPLIMENTS =  ['cool','awesome']

@app.route('/greet')
def get_greeting():
    username = request.args['username']
    nice_thing = choice(COMPLIMENTS)
    return render_template('greet.html', username=username, nice_thing=nice_thing)

### REDIRECTION ###
@app.route('/old-home-page')
def redirect_to_home():
    """Redirect to current homepage"""
    flash("That page has moved. This is our new home page.")
    return redirect('/')

MOVIES = {'Amadeus', 'Chicken Run', 'Dances with Wolves'}

@app.route('/movies')
def show_all_movies():
    return render_template('movies.html', movies=MOVIES)

@app.route('/movies/new', methods=["POST"])
def add_movie():
    title = request.form['title']
    #add to pretend database
    if title in MOVIES:
        flash("Movie already exists.", 'error')
    else:
        MOVIES.add(title)
    #flash a message after returning; sets flash 
        flash("Created Your Movie!", 'success')
    #return redirect to the "get" route
    return redirect('/movies')


###JSONIFY -- makes valid JSON###
@app.route('/movies/json')
def get_movies_json():
    return jsonify(list(MOVIES))



#####COOKIES######
#import request object
#request.cookies object contains cookies sent with the request

@app._before_request        #happens before all other app.routes
def print_cookies():
    print(request.cookies)      #reads the cookies and returns as a key value pair

@app.route('/wherever')
def set_cookie():
    content = "html string"             #normally, we return the render_template; instead, we save the object to a variable
    resp = make_response(content)            #we use make_response to make a http response object which has an attribute set_cookie
    resp.set_cookie('whatever_cookie','cookie_answer')           #we use set_cookie to make cookie
    return resp         #now from browser always sending this cookie every time we use a request


@app.route('/handle-form-cookie')
def form_cookie():
    fav_color = request.args['fav_color']       #this comes from the html form input named fav_color
    html = render_template('response-cookie.html', fav_color=fav_color)     #render the html 
    resp = make_response(html)                  #make response object from that html
    resp.set_cookie("fav_color",fav_color)      #add cookie to the response
    return resp


###FLASK SESSIONS###
#flask sessions are built on top of cookies and make things easier; type preservation, signed (i.e. unmodifiable) data, hidden from the user;
#on client side, looks like massive unreadable text; on server side, is treated like a dictionary 
# import session from flask, set a secret key

@app.route('/sessions')
def sessions():
    session['username'] = 'me'                      #flask turns this into an unrecognizable secure form and sends to the browser
    session['leaderboard'] = ['me','you','she']
    return render_template("index.html")

@app.route('/handle-form-session')
def handle_form():
    sessions['nickname'] = request.args["nickname"]     #use request.args for get requests and set session nickname
    session["lucky_number"] = request.args["lucky_number"]
    return render_template("some_html.html")    #don't need to pass in as variable to display, can just use variable 
                                                    #session['nickname'] and session['lucky_number'] in the html


@app.route('/ogin')
def login():
    SECRET_PASS = 'password'
    entered_pass = request.args['secret_code']      #from the html with name secret_code
    if entered_pass == SECRET_PASS:
        session['entered-pin'] == True
        return redirect('/secret_invite')
    else:
        return redirect('/login-form')

@app.route('/secret_invite')
def authenticate():
    if session.get('entered-pin', False):
        return render_template('invite.html')
    return redirect('/return_to_login')
