from blog import app, db
from datetime import datetime


# table in db
class Blog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    body = db.Column(db.Text())
    author = db.Column(db.String)
    date = db.Column(db.DateTime, default=datetime.utcnow())
    image = db.Column(db.String)

# function
    def __init__(self, title, body, author, image):
        self.title = title
        self.body = body
        self.author = author
        self.image = image
