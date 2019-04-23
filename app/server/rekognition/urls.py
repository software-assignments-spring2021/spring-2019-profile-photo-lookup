from .views import CelebrityRekognition
from .views import StudentRekognition
from django.urls import path

urlpatterns = [
    path('rekognition/celebrity', CelebrityRekognition.as_view()),
    path('rekognition/student', StudentRekognition.as_view())
]
