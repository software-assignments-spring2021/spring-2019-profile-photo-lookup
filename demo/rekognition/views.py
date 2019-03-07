from django.shortcuts import render
from django.http import HttpResponse

from .models import ImageUpload
from .forms import ImageForm

import boto3

client = boto3.client('rekognition', region_name='us-east-1')


def get_local_img(filename):
    with open(filename, 'rb') as imgfile:
        return imgfile.read()


def rekognize_faces(request):
    if request.method == 'POST':
        form = ImageForm(request.POST, request.FILES)
        if form.is_valid():
            # process user-input image and save it in file system
            img = ImageUpload(image = request.FILES['input_image'])
            img.save()

            # retreive image saved in file system
            img_path = str(ImageUpload.objects.latest('image').image)
            img_bytes = get_local_img(img_path)

            # feed image to Amazon Rekognition API
            response = client.recognize_celebrities(Image={'Bytes': img_bytes})

            # process output from Amazon Rekognition
            names = []
            for face in response['CelebrityFaces']:
                names.append(face['Name'])

            # delete all model instances once result is obtained
            # django-cleanup automatically deletes old images in system
            ImageUpload.objects.all().delete()

            return HttpResponse('\n'.join(names), content_type="text/plain")
    else:
        context = {"form": ImageForm()}

    return render(request, "image_form.html", context)
