import requests
from bs4 import BeautifulSoup
html = requests.get('https://www.imdb.com/name/nm0000130/').content
page = BeautifulSoup(html, features="html.parser")

print(page)

titles = page.findAll("div", {"class": "knownfor-title-role"})
for title in titles:
    print(title.contents[1].contents)