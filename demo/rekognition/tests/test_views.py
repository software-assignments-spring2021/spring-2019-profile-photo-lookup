from django.test import TestCase
from django.core.files.uploadedfile import SimpleUploadedFile
from ..views import *

class test_rekognize_faces(TestCase):
    def test_request_GET(self):
        response = self.client.get('')
        self.assertEqual(response.status_code, 200)

    def test_request_POST(self):
        test_file = open('rekognition/tests/asset/test_img.jpg', 'rb')
        image = SimpleUploadedFile(test_file.name, test_file.read(), content_type="image/jpeg")
        response = self.client.post('', {'input_image': image})
        self.assertEqual(response.status_code, 200)

class test_get_local_img(TestCase):
    def test_return_binary(self):
        img_file = get_local_img('rekognition/tests/asset/test_img.jpg')
        self.assertIsInstance(img_file, bytes)
