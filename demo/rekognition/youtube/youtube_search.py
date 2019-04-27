# -*- coding: utf-8 -*-

# Sample Python code for youtube.search.list
# See instructions for running these code samples locally:
# https://developers.google.com/explorer-help/guides/code_samples#python

import os

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


def main(query, num_result):
    publishedAt = 0
    channelId = 0
    title = ""
    description = ""
    thumbnails = {}
    channelTitle = ""
    liveBroadcastContent = ""
    videoId = ""
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
        maxResults=num_result,
        q=query
    )

    response = request.execute()
    #d = {"first_name": "Alfred", "last_name":"Hitchcock"}

    for key,val in response.items():
        if key == "items":
            #print(type(val[0]))
            #for i in range(4):
            if isinstance(val, str) == True:
                val = val.encode('utf-8')
            print("{} = {}".format(key, val))
            if key == "id":
                videoId = key[videoId]
            for k, v in val[0].items():
                #print(type(v))
                print("{} = {}".format(k, v))
                if k == "snippet":
                    #print(type(v))
                    for snippet_key, snippet_value in v.items():
                        print("Snippet")
                        print("{} = {}".format(snippet_key, snippet_value))
                        if isinstance(snippet_value, str) == True:
                            snippet_key = snippet_key.encode('utf-8')
                        elif isinstance(snippet_value, int) == True:
                            snippet_key = snippet_key.encode('utf-8')
                        if snippet_key == "title":
                            title = snippet_value
                        elif snippet_key == "publishedAt":
                            publishedAt = snippet_value
                        elif snippet_key == "description":
                            description = snippet_value
                        elif snippet_key == "thumbnails":
                            thumbnails = snippet_value
                        elif snippet_key == "channelTitle":
                            channelTitle = snippet_value
                        elif snippet_key == "liveBroadcastContent":
                            liveBroadcastContent = snippet_value

        else:
            print("")
            #print("{} = {}".format(key, val))
    #response = response.encode('utf-8')
    #return response
    #print(response)
    def generateLink(video):
        videoId = video.getVideoID()
        result = "www.youtube.com/watch?v="
        result = result + videoId
        return result

if __name__ == "__main__":
    main("David Beckham Highlights", 1)
