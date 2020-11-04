from flask import Flask, request, jsonify, render_template
from datetime import datetime
import sqlite3


########################        making general sqlite connection    #######################
conn = sqlite3.connect("allposts.sqlite")
cursor = conn.cursor()
#####################################     end connection      ##############################


#------------------------------------------------------------------------------
                 #creating all posts table
#------------------------------------------------------------------------------
cursor.execute("CREATE TABLE IF NOT EXISTS posts(id integer PRIMARY KEY, title text NOT NULL, author text NOT NULL, date text NOT NULL, p1 text NOT NULL, p2 text, p3 text)")
cursor.execute("CREATE TABLE IF NOT EXISTS news(id integer PRIMARY KEY, title text NOT NULL, author text NOT NULL, date text NOT NULL, p1 text NOT NULL, p2 text, p3 text)")
cursor.execute("CREATE TABLE IF NOT EXISTS entertainment(id integer PRIMARY KEY, title text NOT NULL, author text NOT NULL, date text NOT NULL, p1 text NOT NULL, p2 text, p3 text)")
cursor.execute("CREATE TABLE IF NOT EXISTS sports(id integer PRIMARY KEY, title text NOT NULL, author text NOT NULL, date text NOT NULL, p1 text NOT NULL, p2 text, p3 text)")







#-------------------------------------------------------------------------------





#-------------------------------------------------------------------------------
                     #Convert digital data to binary format
#-------------------------------------------------------------------------------
def convert(filename):
    with open(filename, 'rb') as file:
        image = file.read()
    return image
#---------------------------------------------------------------------------------




#-------------------------------------------------------------------------------
      # Convert binary data to proper format and write it on Hard Disk
#-------------------------------------------------------------------------------
def reconvert(data, filename):
    with open(filename, 'wb') as file:
        file.write(data)
    print("Stored blob data into: ", filename, "\n")

#-------------------------------------------------------------------------------




app = Flask(__name__)
@app.route("/")
def home():
    return render_template("home.html")

@app.route("/postcontent", methods=['POST','GET'])
def postcontent():
  if request.method=='GET':
   return render_template("postcontent.html")
  elif request.method=="POST":
    title=request.form['title']
    nameofauthor=request.form['nameofauthor']
    img=request.files['img1']
    ios=img.read()
    content=request.form['content']
    date=datetime.now().strftime("%Y, %b %w")
    conn = sqlite3.connect("allposts.sqlite")
    cursor = conn.cursor()
    news=request.form['news']
    entertainment=request.form['entertainment']
    sports=request.form['sports']
    cursor.execute("INSERT INTO posts(title, author, date, p1) VALUES(?,?,?,?)",(title, nameofauthor, date,content))
    conn.commit()
    ida=cursor.execute("SELECT id FROM posts WHERE id=?", (cursor.lastrowid,))
    photo=reconvert(ios, "static/blogimages/3.jpg")
    return img.filename


@app.route("/<int:id>")
def apost(id):
  conn=sqlite3.connect('allposts.sqlite')
  cursor=conn.cursor()
  cursor.execute("SELECT * FROM posts WHERE id=? ", (id,))
  post=cursor.fetchall()
  ida=f"{id}"
  return render_template("post.html", post=post, id=ida)

@app.route("/post", methods=["POST", "GET"])
def new():
    if request.method=="GET":
       conn=sqlite3.connect('allposts.sqlite')
       cursor=conn.cursor()
       cursor.execute("SELECT * FROM posts WHERE id=?", (cursor.lastrowid,))
       ida=cursor.fetchall()
       return f"{ida}"


if __name__== "__main__":
    app.run(debug=True)