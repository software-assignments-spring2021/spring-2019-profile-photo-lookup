from django.test import TestCase
from django.db import models
from ..models import ImageRekognition
from django.core.files.uploadedfile import SimpleUploadedFile
# Create your tests here.

class test_models(TestCase):
    def test_img_rep(self):
        test_file = open('rekognition/tests/asset/test_img.jpg', 'rb')
        img = SimpleUploadedFile(test_file.name, test_file.read(), content_type="image/jpeg")
        model= ImageRekognition(picture=img)
        print(str(model))
        print(model.picture)
        self.assertEqual(str(model), model.picture)
        

