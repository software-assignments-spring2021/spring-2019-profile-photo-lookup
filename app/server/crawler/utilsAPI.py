import json
import requests
import googleapiclient.discovery

class WikiAPI(object):

    def search(self, keyword):
        url = 'https://en.wikipedia.org/w/api.php'

        params = {
            'action': "opensearch",
            'search': keyword,
            'limit': 1,
            'namespace': 0,
            'format': "json"
        }
        response = requests.Session().get(url=url, params=params).json()
        return response


    def get_bio(self, keyword):
        url = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + keyword
        response = requests.Session().get(url=url).json()
        return response['extract']


class GoogleAPI(object):

    def get_image(self, keyword):
        url = "https://www.googleapis.com/customsearch/v1"
        API_KEY = "AIzaSyD49c5nykh6f1HXBnujidJhi6tEbVwrksk"
        ID = "013224824088471738258:vahaiv5q6kk"

        params = {
            'q': keyword + " 16 by 9",
            'cx': ID,
            'key': API_KEY,
            'searchType': 'image',
            'imgSize': 'xlarge',
            'num': 10,
            'imageType': 'face'
        }

        response = requests.get(url, params=params).json()

        for result in response["items"]:
            if result["image"]["height"] < result["image"]["width"]:
                return(result["link"])

        return response["items"][0]["link"]


    def get_youtube_video(self, keyword):

        DEVELOPER_KEY = "AIzaSyClNjMhsLYyFo-e3AqFeqgtjzA02cHfA2M"
        youtube = googleapiclient.discovery.build(
            "youtube", "v3", developerKey = DEVELOPER_KEY)

        query =  keyword + "trailer"
        request = youtube.search().list(
            part = "snippet",
            q = query
        )

        response = request.execute()

        print(json.dumps(response, indent=4, sort_keys=True))
