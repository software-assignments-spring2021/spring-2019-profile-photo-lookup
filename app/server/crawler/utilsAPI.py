import json
import requests
import re
import googleapiclient.discovery
from bs4 import BeautifulSoup

class WikiAPI(object):
    
    def get_bio(self, keyword):
        url = 'https://en.wikipedia.org/w/api.php'
        
        params = {
            'action': "opensearch",
            'search': keyword,
            'limit': 1,
            'namespace': 0,
            'format': "json"
        }

        response = requests.Session().get(url=url, params=params).json()
        url = response[3][0]

        html = requests.get(url).content
        page = BeautifulSoup(html, features="html.parser")
        disambig = len(page.find_all("a", href="/wiki/Help:Disambiguation"))

        wikiID = response[3][0].split('/')[-1]
        if disambig > 0:
            wikiID = self.handle_disambig(url)

        url = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + wikiID
        bio = requests.Session().get(url=url).json()['extract']

        return bio

    def handle_disambig(self, url):
        html = requests.get(url).content
        page = BeautifulSoup(html, features="html.parser")

        result = page.find_all("a", text = re.compile(r"((\(musician\))|(\(actor\))|(\(artist\)))"))[0]['href']
        wikiID = result.split('/')[-1]

        return wikiID


class GoogleAPI(object):
        
    def get_image(self, keyword):
        url = "https://www.googleapis.com/customsearch/v1"
        API_KEY = "AIzaSyD49c5nykh6f1HXBnujidJhi6tEbVwrksk"
        ID = "013224824088471738258:vahaiv5q6kk"

        params = {
            'q': keyword,
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

        
    def get_youtube_video(self, keyword, occupation):

        DEVELOPER_KEY = "AIzaSyClNjMhsLYyFo-e3AqFeqgtjzA02cHfA2M"
        youtube = googleapiclient.discovery.build(
            "youtube", "v3", developerKey = DEVELOPER_KEY)

        sort = "relevance"
        publishedTime = "1990-01-01T00:00:00Z"

        if occupation == "athlete":
            sort = "relevance"
            publishedTime = "2010-01-01T00:00:00Z"
        elif occupation == "actor":
            sort = "relevance"
            publishedTime = "2019-01-01T00:00:00Z"
        elif occupation == "musician":
            sort = "viewCount"
            publishedTime = "1990-01-01T00:00:00Z"

        query =  keyword
        request = youtube.search().list(
            part = "snippet",
            q = query,
            maxResults = 1,
            order = sort,
            publishedAfter = publishedTime
        )

        response = request.execute()
        videoID = response["items"][0]["id"]["videoId"]
        url = "https://www.youtube.com/embed/" + videoID

        return url
