# https://www.thefamouspeople.com/sports-persons.php

from bs4 import BeautifulSoup
import requests


def getPage():
    page = requests.get("https://www.thefamouspeople.com/sports-persons.php")
    return page.content


def parseBeautifulSoup():
    pageContent = getPage()
    soup = BeautifulSoup(pageContent, 'html.parser')
    result = soup.find_all('div', class_='col-md-4 col-sm-4 col-xs-12 catprofiles')
    return result[:10]
    #print(soup.prettify())


print(parseBeautifulSoup())
    
