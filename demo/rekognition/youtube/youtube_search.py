# -*- coding: utf-8 -*-

# Sample Python code for youtube.search.list
# See instructions for running these code samples locally:
# https://developers.google.com/explorer-help/guides/code_samples#python

import os

import googleapiclient.discovery

def main(query, num_result):
    publishedAt = 0
    channelId = 0
    title = ""
    description = ""
    thumbnails = {}
    channelTitle = ""
    liveBroadcastContent = ""
    # Disable OAuthlib's HTTPS verification when running locally.
    # *DO NOT* leave this option enabled in production.
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

    api_service_name = "youtube"
    api_version = "v3"
    DEVELOPER_KEY = "AIzaSyA3a9G_aBAfROe6uVPOfOGxdqSiOEcR8wE"

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
        #print(type(key))
        #print(type(val))
        if key == "items":
            #print(type(val[0]))
            #for i in range(4):
            for k, v in val[0].items():
                #print(type(v))
                print("{} = {}".format(k, v))
                if k == "snippet":
                    #print(type(v))
                    for snippet_key, snippet_value in v.items():
                        print("Snippet")
                        print("{} = {}".format(snippet_key, snippet_value))
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

if __name__ == "__main__":
    main("David Beckham Highlights", 1)
