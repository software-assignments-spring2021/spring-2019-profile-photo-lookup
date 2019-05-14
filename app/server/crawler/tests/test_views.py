import json
from rest_framework.test import APITestCase

from ..views import CelebrityCrawler


class CelebrityCrawlerTest(APITestCase):
    def test_POST(self):
        names = {"names": ["Bradley Cooper", "Lindsey Graham"]}
        response = self.client.post("/crawler", json.dumps(names), content_type="application/json")
        self.assertEqual(response.status_code, 200)

