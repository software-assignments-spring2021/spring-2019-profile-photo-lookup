from .views import ImageRekognition
from django.urls import path

urlpatterns = [
    path('rekognition', ImageRekognition.as_view())
]
