import os
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials as SpotifyCC
import requests
from bs4 import BeautifulSoup

from .celebrity import Celebrity
from .utilsAPI import WikiAPI, GoogleAPI


SPOTIFY_CLIENT_ID = os.getenv("Spotify_Client_ID")
SPOTIFY_SECRET_KEY = os.getenv("Spotify_Secret_Key")

CCManager = SpotifyCC(client_id = SPOTIFY_CLIENT_ID,
                      client_secret = SPOTIFY_SECRET_KEY)
spotify = spotipy.Spotify(client_credentials_manager= CCManager)


class Musician(Celebrity):

    def __init__(self, name, occupations):
        Celebrity.__init__ (self, name, occupations)
        self.occID = 'musician'
        self.info = self.retrieve_info()


    def find_related_tracks(self, seed_genres):
        response = spotify.search(q = seed_genres[0],
                                  type='playlist',
                                  limit = 1)
        playlist = "https://open.spotify.com/embed/user/spotify/playlist/" + response['playlists']['items'][0]['id']
        
        return playlist

    
    def find_related_artists(self, artistID):
        response = spotify.artist_related_artists(artistID)["artists"]
        output = []
        for artist in response[0:3]:
            p = {'name': artist['name'],
                'id': artist['id'],
                'image': artist['images'][0],
                'genres': artist['genres']
            }
            output.append(p)

        return output


    def retrieve_info(self):
        data = spotify.search(q = self.name, 
                              type='artist',
                              limit = 1)['artists']

        artistID = data['items'][0]['id']

        image = GoogleAPI().get_image(self.name)

        info = {}
        info['bio'] = WikiAPI().get_bio(self.name)
        info['genres'] = data['items'][0]['genres']
        info['image'] = image
        info['top tracks'] = "https://open.spotify.com/embed/artist/" + artistID
        info['related artists'] = self.find_related_artists(artistID)
        info['related tracks'] = self.find_related_tracks(info['genres'])
        info['video'] = GoogleAPI().get_youtube_video(self.name + "music video (official)", "musician")
        info['twitter'] = GoogleAPI().get_twitter(self.name)
        info['insta'] = GoogleAPI().get_insta(self.name)
        return info


        

