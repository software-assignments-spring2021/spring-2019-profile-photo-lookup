import requests
from bs4 import BeautifulSoup


def getNameID(name):
       
    html = requests.get('https://www.imdb.com/find?q=Tom+Cruise=nm').content

    page = BeautifulSoup(html, features="html.parser")
    person = page.find("td", {"class": "result_text"}).contents[1]
    id = str(person)
    return id.split('/')[2]

def getActorInfo(id):
       
    html = requests.get('https://www.imdb.com/name/%7Bid%7D').content

page = BeautifulSoup(html, features="html.parser")
person = page.find("td", {"class": "result_text"}).contents[1]
person2 = str(person)
print(person2.split('/')[2])

titles = page.findAll("div", {"class": "knownfor-title-role"})
#for title in titles:
   # print(title.contents[1].contents)