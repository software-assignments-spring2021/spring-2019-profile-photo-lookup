from django.test import TestCase
from django.core.files.uploadedfile import SimpleUploadedFile

from ..models import ImageUpload

class test_models(TestCase):
    def test_toString(self):
        test_file = open('rekognition/tests/asset/test_celeb.jpg', 'rb')
        img = SimpleUploadedFile(test_file.name, test_file.read(), content_type="image/jpeg")
        model = ImageUpload(image = img)
        self.assertEqual(str(model), model.image.name)
