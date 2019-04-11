from .profile import construct_profiles

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class CelebrityCrawler(APIView):
    def post(self, request, format=None):
        names = request.data['names']
        output = construct_profiles(names)

        return Response(output, status = status.HTTP_200_OK)
