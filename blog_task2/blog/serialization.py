from blog import ma


class BlogSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'body', 'author', 'date', 'image')


blog_schema = BlogSchema()  # to return one of blog
blogs_schema = BlogSchema(many=True)
