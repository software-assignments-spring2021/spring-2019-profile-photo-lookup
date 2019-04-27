from ..views import CelebrityRekognition, StudentRekognition
from rest_framework.test import APITestCase
from django.core.files.uploadedfile import SimpleUploadedFile


class test_CelebrityRekognition(APITestCase):
    def test_POST(self):
        test_file = open('rekognition/tests/asset/test_celeb.jpg', 'rb')
        test_image = SimpleUploadedFile(test_file.name,
                                        test_file.read(),
                                        content_type="image/jpeg")
        response = self.client.post('/rekognition/celebrity', {'image': test_image})
        self.assertEqual(response.status_code, 200)


class test_StudentRekognition(APITestCase):
    def test_POST(self):
        test_file = open('rekognition/tests/asset/test_student.jpg', 'rb')
        test_image = SimpleUploadedFile(test_file.name,
                                        test_file.read(),
                                        content_type="image/jpeg")
        response = self.client.post('/rekognition/student', {'image': test_image})
        self.assertEqual(response.status_code, 200)
