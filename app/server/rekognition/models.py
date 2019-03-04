from django.db import models

class ImageRekognition(models.Model):
    picture = models.ImageField(upload_to='./rekognition/asset')

    def __str__(self):
        return self.picture.name 
