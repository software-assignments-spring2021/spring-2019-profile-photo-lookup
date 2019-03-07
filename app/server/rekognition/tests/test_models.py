from django.test import TestCase
from ..models import ImageUpload
from django.core.files.uploadedfile import SimpleUploadedFile

class test_models(TestCase):
    def test_toString(self):
        test_file = open('rekognition/tests/asset/test_img.jpg', 'rb')
        img = SimpleUploadedFile(test_file.name, test_file.read(), content_type="image/jpeg")
        model = ImageUpload(image = img)
        self.assertEqual(str(model), model.image.name)
