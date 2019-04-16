from bs4 import BeautifulSoup
import requests
from requests.models import PreparedRequest
import athlete as Athlete


def createTable(name):
    result = []
    result_head = []
    result_info = []
    name_with_underscore,url_link = Athlete.getAthleteName(name)
    soup = Athlete.getPage(name)
    table = soup.find('table', {'class': 'wikitable'})
    table_header = table.find_all('th')
    table_info = table.find_all('td')

    for head in table_header:
        print(type(head))
        head = head.replace('<th>',"")
        head = head.replace('</th>',"")
        result_head.append(head)
    print(result_head)


createTable('Lee Chong Wei')
