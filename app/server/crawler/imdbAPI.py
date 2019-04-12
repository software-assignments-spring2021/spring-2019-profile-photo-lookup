from imdb import IMDb
from urllib.request import urlretrieve
import requests

url = "https://api.themoviedb.org/3/search/person?api_key=4567404023e93988b15756b26b82c5ee&language=en-US&query=Tom%20Cruise&page=1&include_adult=falseprint"
data = requests.Session().get(url=url).json()
print(data)

 
