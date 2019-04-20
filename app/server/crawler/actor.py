import requests
from requests.models import PreparedRequest
from bs4 import BeautifulSoup



# Takes actor name and returns their imdb id
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

# Takes actor imdb id and returns their imdb page
def getActorPage(actorID):
   url = 'https://www.imdb.com/name/'+actorID
   #print(url)
   html = requests.get(url).content
   actor_page = BeautifulSoup(html, features="html.parser")
   return actor_page

# Takes actor imdb page and returns films they are most known for
def getTitles(actor_page):
   titles = actor_page.find_all("a", {"class": "knownfor-ellipsis"})
   data = []
   i = 0
   while i < len(titles):
      att = (titles[i].attrs)
      data.append(att['title'])
      i+=1
   return data

   
# Takes actor imdb page and returns the number of awards/nominations they 
# have received
def getAwards(actor_page):
   awards = str(actor_page.find("span", {"class": "awards-blurb" }).contents[1].get_text()).replace("  ", "").replace("\n", " ")
   return awards
   
# Takes actor imdb id and returns brief bio
def getBio(actorID):
   url = 'https://www.imdb.com/name/'+actorID+'/'+'bio'
   html = requests.get(url).content
   page = BeautifulSoup(html, features="html.parser")
   bio = (page.find('div', {'class': 'soda odd'}).contents[1])
   return bio.get_text()

# Take a imdb movie id and returns the title
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
   

# Takes actor imdb page and returns list of upcoming films 
def getUpcomingTitlesByID(actor_page):
   upcoming = actor_page.find_all("a", {"class": "in_production"})
   data = []
   i = 0
   while i < len(upcoming):
      att = upcoming[i].attrs
      link = str(att['href']).split('?')[0].split('/')
      movie_id = link[len(link)-1]
      movie_title = getUpcomingTitlesByName(movie_id)
      if movie_title == None:
         i = i+1
         continue
      data.append(movie_title)
      i+=1   
   return data

# Takes actor's name and returns dictionary object
# containing bio, awards, well known films, and 
# upcoming films
def getPersonObject(name):
   actorID = getActorID(name)
   page = getActorPage(actorID)
   ACTOR_BIO = getBio(actorID)
   AWARDS = getAwards(page)
   KNOWN_FOR = getTitles(page)
   UPCOMING = getUpcomingTitlesByID(page)

   actor_dict = {
      "name": name,
      "bio": ACTOR_BIO,
      "awards": AWARDS,
      "known_for": KNOWN_FOR,
      "upcoming": UPCOMING
   }
   return actor_dict



