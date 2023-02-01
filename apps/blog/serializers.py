from rest_framework import serializer
from .models import Post
from apps.category.serializers import CategorySerializer

class PostSerializer(serializer.ModelSerializer):
    thumbnail = serializer.CharField(source='get_thumbnail')
    video = serializer.CharField(source='get_video')
    category = CategorySerializer()
    class Meta:
        model = Post
        fields =[
            'blog_uuid',
            'title',
            'slug',
            'thumbnail',
            'video',
            'description',
            'excerpt',
            'category',
            'published',
            'status',
        ]