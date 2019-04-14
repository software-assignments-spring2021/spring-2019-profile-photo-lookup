import spotipy
from spotipy.oauth2 import SpotifyClientCredentials as SpotifyCC

CCManager = SpotifyCC(client_id = 'a1ea005deef446c2861253ea2f998105',
                      client_secret = '039d31abe6a74350999938feab8906e7')

spotify = spotipy.Spotify(client_credentials_manager= CCManager)


def find_related_artists(artistID):
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


def find_related_tracks(seed_genres):
    response = spotify.search(q = seed_genres[0], type='playlist', limit = 1)

    playlist = "https://open.spotify.com/embed/user/spotify/playlist/" + response['playlists']['items'][0]['id']

    return playlist


def construct_profile(name):
    data = spotify.search(q = name, 
                          type='artist',
                          limit = 1)['artists']

    

    artistID = data['items'][0]['id']

    profile = {}
    profile['genres'] = data['items'][0]['genres']
    profile['image'] = data['items'][0]['images'][0]
    profile['top tracks'] = "https://open.spotify.com/embed/artist/" + artistID
    profile['related artists'] = find_related_artists(artistID)
    profile['related tracks'] = find_related_tracks(profile['genres'])

    return profile
