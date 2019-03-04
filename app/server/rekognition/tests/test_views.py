from django.test import TestCase
from django.core.files.uploadedfile import SimpleUploadedFile

class test_rekognize_faces(TestCase):
    def test_request_GET(self):
        response = self.client.get('')
        self.assertEqual(response.status_code, 200)

    def test_request_POST(self):
        test_file = open('rekognition/tests/asset/test_img.jpg', 'rb')
        image = SimpleUploadedFile(test_file.name, test_file.read(), content_type="image/jpeg")
        response = self.client.post('', {'input_image': image})
        self.assertEqual(response.status_code, 200)
