import requests
from requests.models import PreparedRequest
from bs4 import BeautifulSoup




def getActorID(name):
   name = name.split(" ")
   query = name[0] + name[1]
   request = PreparedRequest()
   params = {query: 'nm'}
   request.prepare_url("https://www.imdb.com/find", params)  

   html = requests.get(request.url).content 
   page = BeautifulSoup(html, features="html.parser")
   id_num = str(page.find("td", {"class": "result_text"}).contents[1]).split('/')[2]
   return id_num

def getActorPage(actorID):
   url = 'https://www.imdb.com/name/'+actorID
   #print(url)
   html = requests.get(url).content
   actor_page = BeautifulSoup(html, features="html.parser")
   return actor_page


def getTitles(actor_page):
   titles = actor_page.find_all("a", {"class": "knownfor-ellipsis"})
   data = []
   i = 0
   while i < len(titles):
      att = (titles[i].attrs)
      data.append(att['title'])
      i+=1
   return data


def getAwards(actor_page):
   awards = str(actor_page.find("span", {"class": "awards-blurb" }).contents[1].get_text()).replace("  ", "").replace("\n", " ")
   return awards
   
  
def getBio(actorID):
   url = 'https://www.imdb.com/name/'+actorID+'/'+'bio'
 
   html = requests.get(url).content
   page = BeautifulSoup(html, features="html.parser")
   bio = (page.find('div', {'class': 'soda odd'}).contents[1])
   return bio.get_text()
   

def getUpcomingTitlesByName(movie_id):
   api = "?api_key=4567404023e93988b15756b26b82c5ee"
   url = "https://api.themoviedb.org/3/movie/"+movie_id+api
   #print(url)
   req = requests.get(url)
   if req.status_code == 200:
      data = req.json()
      return data['original_title']
   else:
      return 
   


def getUpcomingTitlesByID(actor_page):
   upcoming = actor_page.find_all("a", {"class": "in_production"})
   data = []
   i = 0
   while i < len(upcoming):
      att = upcoming[i].attrs
      #print(att)
      link = str(att['href']).split('?')[0].split('/')
      #print(link)
      movie_id = link[len(link)-1]
      #print(movie_id)
      movie_title = getUpcomingTitlesByName(movie_id)
      
      #data.append(link[len(link)-1])
      #print(movie_title)
      data.append(movie_title)
      i+=1   
   return data




