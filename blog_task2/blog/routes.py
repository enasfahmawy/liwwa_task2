import blog
from blog import app, db
from flask import render_template, redirect, url_for, request, jsonify
from blog.models import Blog
from blog.serialization import blog_schema, blogs_schema


# from flask_cors.decorator import cross_origin

@app.route('/', methods=['GET'])
@app.route('/get', methods=['GET'])
def get_blog():  # put application's code here
    all_blog = Blog.query.all()
    result = blogs_schema.dump(all_blog)
    return jsonify(result)


@app.route('/get/<id>/', methods=['GET'])
def post_details(id):  # put application's code here
    blog = Blog.query.get(id)
    return blog_schema.jsonify(blog)


@app.route('/add', methods=["POST"])
def add_blog():
    title = request.json['title']
    body = request.json['body']
    author = request.json['author']
    image = request.json['image']

    post = Blog(title, body, author, image)
    if len(title) > 0 and len(body) > 0 and len(author) > 0:
        db.session.add(post)
        db.session.commit()
        return blog_schema.jsonify(post)


@app.route('/delete/<id>', methods=["DELETE"])
def delete_post(id):
    blog = Blog.query.get(id)
    db.session.delete(blog)
    db.session.commit()
    return blog_schema.jsonify(blog)


@app.route('/update/<id>', methods=['PUT'])
def update_post(id):
    blog = Blog.query.get(id)

    title = request.json['title']
    body = request.json['body']
    author = request.json['author']
    image = request.json['image']

    blog.title = title
    blog.body = body
    blog.author = author
    blog.image = image

    db.session.commit()
    return blog_schema.jsonify(blog)



















