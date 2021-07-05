from flask import Flask, render_template
app = Flask(__name__)

skills = ["HTML", "CSS", "JavaScript", "Data Science", "OpenMP", "C++", "Python", "Fortran", "Deep Learning", "MPI"]
styles = ["progress"+ str(i+1) for i in range(len(skills))]

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html', skills = skills, length = len(skills), styles = styles)

if __name__ == "__main__":
    app.run(debug=True)