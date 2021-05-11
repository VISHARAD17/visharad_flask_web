from flask import Flask, render_template
app = Flask(__name__)

posts = [
    {
        'author':'Visharad',
        'title':'post-1',
        'content':'first post',
        'date_posted':'april 20'
    },
    {
        'author':'John',
        'title':'post-2',
        'content':'second post',
        'date_posted':'may 20'
    }
]

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html', posts = posts)

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/projects")
def projects():
    return render_template('projects.html')

if __name__ == "__main__":
    app.run(debug=True)