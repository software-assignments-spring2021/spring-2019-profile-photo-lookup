import spotipy
from spotipy.oauth2 import SpotifyClientCredentials as SpotifyCC
import requests
from bs4 import BeautifulSoup
import webbrowser
import urllib
from .celebrity import Celebrity
from .utilsAPI import WikiAPI, GoogleAPI


CCManager = SpotifyCC(client_id = 'a1ea005deef446c2861253ea2f998105',
                      client_secret = '039d31abe6a74350999938feab8906e7')

spotify = spotipy.Spotify(client_credentials_manager= CCManager)



class Musician(Celebrity):

    def __init__(self, name, occupations):
        Celebrity.__init__ (self, name, occupations)
        self.occID = 'musician'
        self.info = self.retrieve_info()


    def get_bio(self):
        return WikiAPI().get_bio(self.name)


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

    def get_twitter(self,name):
        search = self.name + " twitter"
        search = urllib.parse.quote_plus(search)
        url = 'https://google.com/search?q=' + search
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'lxml')
        for g in soup.find_all(class_ =  'r'):
            print(g.text)
            res = g.text.split()[2]
            twitter_handle = res[2:(len(res)-1)]
            return twitter_handle



    def get_insta(self, name):
        search = self.name + " instagram"
        search = urllib.parse.quote_plus(search)
        url = 'https://google.com/search?q=' + search
        response = requests.get(url)


        soup = BeautifulSoup(response.text, 'lxml')
        for g in soup.find_all(class_ =  'r'):
            res = g.text.split()[2]
            insta_handle = res[2:(len(res)-1)]
            return insta_handle 

    def retrieve_info(self):
        data = spotify.search(q = self.name, 
                              type='artist',
                              limit = 1)['artists']

        artistID = data['items'][0]['id']

        image = GoogleAPI().get_image(self.name)

        info = {}
        info['bio'] = self.get_bio()
        info['genres'] = data['items'][0]['genres']
        info['image'] = image
        info['top tracks'] = "https://open.spotify.com/embed/artist/" + artistID
        info['related artists'] = self.find_related_artists(artistID)
        info['related tracks'] = self.find_related_tracks(info['genres'])
        info['video'] = GoogleAPI().get_youtube_video(self.name + "music video (official)", "musician")
        info['twitter'] = self.get_twitter(self.name)
        info['insta'] = self.get_insta(self.name)
        return info


        

