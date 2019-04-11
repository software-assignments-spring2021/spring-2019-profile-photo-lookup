from .views import CelebrityCrawler
from django.urls import path

urlpatterns = [
    path('crawler', CelebrityCrawler.as_view())
]
