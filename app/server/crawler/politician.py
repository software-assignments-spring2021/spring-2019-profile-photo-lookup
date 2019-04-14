import requests
from requests.models import PreparedRequest
from bs4 import BeautifulSoup

#https://api.propublica.org/congress/{version}/

headers = {"X-API-Key":"KgI2lOueGBFwLYWYsicnT4PSQUblFGDEpfj2Gcdd"}

member_ID= 0

for num in range(80, 115):
    add_on= str(num)+ "/senate/members"
    url= "https://api.propublica.org/congress/v1/" + add_on
    response= requests.get(url, headers=headers)
    data= response.json()
    results= data["results"]
    result= results[0]
    #print(result["congress"])

    first_name= "Patrick"
    last_name= "Toomey"
    congresses= data["results"]
    congress= congresses[0]
    check_found=0
    members= congress["members"]
    for member in members:
        if(member["last_name"]==last_name):
            if(member["first_name"]== first_name):
                member_ID= member["id"]
                check_found=1
                print("found")
                break
    if check_found==1:
        break

url= "https://api.propublica.org/congress/v1/" + "members/" + member_ID
response= requests.get(url, headers=headers)
data= response.json()
result= data["results"]
member= result[0]
profile= {}
profile['name']= member["first_name"] + " " + member["middle_name"] + " " + member["last_name"]
profile['party']= ""
if member["current_party"]== "R":
    profile['party']= "Republican"
elif member["current_party"]== "D":
    profile['party']= "Democrat"
else:
    profile['party']= "Other"
