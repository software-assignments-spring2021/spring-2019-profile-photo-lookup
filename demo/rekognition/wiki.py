import athlete as Athlete
import wikipedia
import numpy as np
import sys

#reload(sys)
#sys.setdefaultencoding('utf8')

titles = ['David Beckham', 'Michael Jordan']
personal_life = ['Personal Life', 'Personal life', 'personal life']
awards = ['Award', 'Awards', 'award', 'awards']


def getPlot(names):
    possibles = ['Award', 'Awards', 'Honours', 'Honors', 'Honour', 'Honor','Accolade']

    career_possibles = ['Career statistics', 'Statistics', 'career statistics']

    for i in names:
        try:
            wik = wikipedia.WikipediaPage(i[0])
        except:
            wik = np.NaN

        try:
            for j in possibles:
                if wik.section(j) != None:
                    plot = wik.section(j).replace('\n', '').replace('\n', '')
        except:
            plot = np.NaN


def getSummary(name):
    name_with_underscore,url_link = Athlete.getAthleteName(name)
    try:
        result = wikipedia.WikipediaPage(title=name_with_underscore).summary
        result = result.encode('utf-8')
    except:
        result = np.NaN
    return result

def getPersonalLife(name):
    name_with_underscore,url_link = Athlete.getAthleteName(name)
    for i in personal_life:
        try:
            result = wikipedia.WikipediaPage(name_with_underscore).section(i)
            if result != None:
                result = result.encode('utf-8')
                return result
        except:
            result = np.NaN
    return result

def getAwards(name):
    name_with_underscore,url_link = Athlete.getAthleteName(name)
    for i in awards:
        try:
            result = wikipedia.WikipediaPage(name_with_underscore).section(i)
            if result != None:
                result = result.encode('utf-8')
                return result
        except:
            result = np.NaN
    return result

def getExternalLinks(name):
    name_with_underscore, url_link = Athlete.getAthleteName(name)
    try:
        result = wikipedia.WikipediaPage(name_with_underscore).section('External links')
        result = result.encode('utf-8')
    except:
        result = np.NaN

    return result


<<<<<<< Updated upstream
print(getSummary("Lee Chong Wei"))
print(getPersonalLife("Lee Chong Wei"))
print(getAwards("Lee Chong Wei"))
=======

#print(getSummary("Nicol David"))
#print(getPersonalLife("Michael Jordan"))
print(getExternalLinks("Michael Jordan"))
>>>>>>> Stashed changes
