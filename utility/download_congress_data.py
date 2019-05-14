import json
import requests 

API_KEY = "ENTER YOUR PROPUBLICA API KEY HERE"

def download_data():
    headers = {"X-API-Key": API_KEY}

    house = {}
    house_term = 115
    while house_term >= 102:
        print("H:", house_term)
        url = "https://api.propublica.org/congress/v1/" + str(house_term)+ "/house/members"
        response = requests.get(url, headers=headers)
        house[str(house_term)] = response.json()['results']
        house_term -= 1

    senate = {}
    senate_term = 115
    while senate_term >= 80:
        print("S:", senate_term)
        url = "https://api.propublica.org/congress/v1/" + str(senate_term)+ "/senate/members"
        response = requests.get(url, headers=headers)
        senate[str(senate_term)] = response.json()['results']
        senate_term -= 1

    with open('house.json', 'w') as house_file:  
        json.dump(house, house_file)

    with open('senate.json', 'w') as senate_file:  
        json.dump(senate, senate_file)
    
    return
