import athlete as Athlete
import wikipedia
import numpy as np

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
            plot = np.Nan


def getSummary(name):
    name_with_underscore,url_link = Athlete.getAthleteName(name)
    result = wikipedia.WikipediaPage(title=name_with_underscore).summary
    return result

    #personal_life = section.replace('\n','').replace("\'"\,"")

def getPersonalLife(name):
    name_with_underscore,url_link = Athlete.getAthleteName(name)
    for i in personal_life:
        try:
            result = wikipedia.WikipediaPage(name_with_underscore).section(i)
            if result != None:
                return result
        except:
            result = np.NaN
    #personal_life = wikipedia.WikipediaPage(name_with_underscore).section('Personal Life')
    return result

def getAwards(name):
    name_with_underscore,url_link = Athlete.getAthleteName(name)
    for i in awards:
        try:
            result = wikipedia.WikipediaPage(name_with_underscore).section(i)
            if result != None:
                return result
        except:
            result = np.NaN
    #personal_life = wikipedia.WikipediaPage(name_with_underscore).section('Personal Life')
    return result




print(getSummary("Lee Chong Wei"))
print(getPersonalLife("Lee Chong Wei"))
print(getAwards("Lee Chong Wei"))
