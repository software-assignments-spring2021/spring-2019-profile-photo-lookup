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
   




