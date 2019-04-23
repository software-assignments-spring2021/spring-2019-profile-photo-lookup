from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser

from .models import ImageUpload
from .celebrity import rekognize_celebrity
from .student import rekognize_student


class CelebrityRekognition(APIView):
    parser_classes = (MultiPartParser,)
    def post(self, request, format=None):
        ImageUpload.objects.all().delete()
        # save image from POST request form
        img = ImageUpload(image = request.FILES['image'])
        img.save()

        # retreive path of image saved in file system
        img_path = str(ImageUpload.objects.latest('image').image)

        # feed image to Amazon Celebrity Rekognition API
        output = rekognize_celebrity(img_path)

        # delete all model instances once result is obtained
        # django-cleanup automatically deletes old images in system
        ImageUpload.objects.all().delete()

        return Response(output, status = status.HTTP_200_OK)


class StudentRekognition(APIView):
    parser_classes = (MultiPartParser,)
    def post(self, request, format=None):
        ImageUpload.objects.all().delete()
        # save image from POST request form
        img = ImageUpload(image = request.FILES['image'])
        img.save()

        # retreive path of image saved in file system
        img_path = str(ImageUpload.objects.latest('image').image)

        # feed image to Amazon Custom Rekognition API
        output = rekognize_student(img_path)

        # delete all model instances once result is obtained
        ImageUpload.objects.all().delete()

        return Response(output, status = status.HTTP_200_OK)
