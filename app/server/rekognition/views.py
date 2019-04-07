from rekognition.models import ImageUpload

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser

import boto3

client = boto3.client('rekognition', region_name='us-east-1')

def get_local_img(filename):
    with open(filename, 'rb') as imgfile:
        return imgfile.read()

class ImageRekognition(APIView):
    parser_classes = (MultiPartParser,)
    def post(self, request, format=None):
        img = ImageUpload(image = request.FILES['image'])
        img.save()

        # retreive image saved in file system
        img_path = str(ImageUpload.objects.latest('image').image)
        img_bytes = get_local_img(img_path)

        # feed image to Amazon Rekognition API
        output = client.recognize_celebrities(Image={'Bytes': img_bytes})

        # process output from Amazon Rekognition
        names = []
        for face in output['CelebrityFaces']:
            names.append(face['Name'])

        output = {"names": names}

        # delete all model instances once result is obtained
        # django-cleanup automatically deletes old images in system
        ImageUpload.objects.all().delete()

        return Response(output, status = status.HTTP_200_OK)
