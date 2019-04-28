import os
import json

import googleapiclient.discovery
class Video:
    def __ini__(self, title, videoId, description):
        self.title = title
        self.videoId = videoId
        self.description = description

    def getTitle():
        return self.title

    def getVideoID():
        return self.videoId

    def getDescrption():
        return self.description



# The code below is modified from Youtube developer's sample code


def main(query, num_of_results):
    videoList = []
    # Disable OAuthlib's HTTPS verification when running locally.
    # *DO NOT* leave this option enabled in production.
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

    api_service_name = "youtube"
    api_version = "v3"
    DEVELOPER_KEY = ""

    youtube = googleapiclient.discovery.build(
        api_service_name, api_version, developerKey = DEVELOPER_KEY)

    request = youtube.search().list(
        part="snippet",
        maxResults=num_of_results,
        q=query

    )
    response = request.execute()
    for k, v in response.items():
        if k == "items":
            for i in range(len(v)):
                try:
                    result = json.dumps(v[i], sort_keys=True)
                    videoList.append(result)
                    print(result)
                except:
                    print("Cannot display format not in UTF-8!")

    return videoList

def generateLink(video):
    videoId = video.getVideoID()
    result = "www.youtube.com/watch?v="
    result = result + videoId
    return result

if __name__ == "__main__":
    #video = main("David Beckham Highlights", 1)
    videoList = main("David Beckham Highlights", 5)
    #print(generateLink(video))
