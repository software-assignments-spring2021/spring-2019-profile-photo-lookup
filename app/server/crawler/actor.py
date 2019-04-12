import requests
from bs4 import BeautifulSoup



       
html = requests.get('https://www.imdb.com/find?q=Tom+Cruise=nm').content
page = BeautifulSoup(html, features="html.parser")
person = page.find("td", {"class": "result_text"}).contents[1]
nameID = str(person)
id_num = nameID.split('/')[2]
print(id_num)


#titles = page.findAll("div", {"class": "knownfor-title-role"})
#for title in titles:
   # print(title.contents[1].contents)