import requests
from requests.models import PreparedRequest
from bs4 import BeautifulSoup


def getActorID(name):
   nameSplit = name.split(" ")
   query = nameSplit[0] + nameSplit[1]
   req = PreparedRequest()
   base_url = "https://www.imdb.com/find"
   params = {query: 'nm'}
   req.prepare_url(base_url, params)   
   html = requests.get(req.url).content 
   page = BeautifulSoup(html, features="html.parser")
   person = page.find("td", {"class": "result_text"}).contents[1]
  # print(person)
   nameID = str(person)
   id_num = nameID.split('/')[2]
   return id_num


def getKnownTitles(actorID):
   url = 'https://www.imdb.com/name/'+actorID
   print(url)
   html = requests.get(url).content
   actor_page = BeautifulSoup(html, features="html.parser")
  # titles = actor_page.find_all("div", {"class": "knownfor-title-role"})
   titles = actor_page.find_all("a", {"class": "knownfor-ellipsis"})
   data = []
   i = 0
   while i < len(titles):
      att = (titles[i].attrs)
     # print(att['title'])
      data.append(att['title'])
      i+=1
   
  # print(titles2)
   return data


x = getActorID("Tom Cruise")
titles = getKnownTitles(x)
print(titles)


