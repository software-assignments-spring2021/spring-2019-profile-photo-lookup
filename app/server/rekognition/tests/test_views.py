from ..views import *
from rest_framework.test import APITestCase
from django.core.files.uploadedfile import SimpleUploadedFile


class test_ImageRekognition(APITestCase):
    def test_POST(self):
        test_file = open('rekognition/tests/asset/test_img.jpg', 'rb')
        test_image = SimpleUploadedFile(test_file.name, test_file.read(), content_type="image/jpeg")
        response = self.client.post('/rekognition', {'image': test_image})
        self.assertEqual(response.status_code, 200)

    def test_get_local_img(self):
        test_img = get_local_img('rekognition/tests/asset/test_img.jpg')
        self.assertIsInstance(test_img, bytes)
