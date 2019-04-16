from bs4 import BeautifulSoup
import requests
from requests.models import PreparedRequest
import athlete as Athlete


def createTable(name):
    name_with_underscore,url_link = Athlete.getAthleteName(name)
    soup = Athlete.getPage(name)
    table = soup.find('table', {'class': 'wikitable'})
    table_info = table.find_all('tr')
    print(table_info)


createTable('Lee Chong Wei')
