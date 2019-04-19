import requests
from requests.models import PreparedRequest
from bs4 import BeautifulSoup
from .wikiAPI import search_wiki


def check_Senate(name):

    new_name = name.split()
    headers = {"X-API-Key":"KgI2lOueGBFwLYWYsicnT4PSQUblFGDEpfj2Gcdd"}

    member_ID= 0
    x=115
    while x>79:
        add_on= str(x)+ "/senate/members"
        url= "https://api.propublica.org/congress/v1/" + add_on
        response= requests.get(url, headers=headers)
        data= response.json()
        results= data["results"]
        result= results[0]

        first_name= new_name[0]
        last_name= new_name[1]
        congresses= data["results"]
        congress= congresses[0]
        check_found=0
        members= congress["members"]
        for member in members:
            if(member["last_name"]==last_name):
                if(member["first_name"]== first_name):
                    member_ID= member["id"]
                    check_found=1
                    break
        if check_found==1:
            break
        x=x-1
    return member_ID


def check_House(name):

    name = name.split(" ")
    headers = {"X-API-Key":"KgI2lOueGBFwLYWYsicnT4PSQUblFGDEpfj2Gcdd"}

    member_ID= 0
    x=115
    while x>102:
        add_on= str(x)+ "/house/members"
        url= "https://api.propublica.org/congress/v1/" + add_on
        response= requests.get(url, headers=headers)
        data= response.json()
        results= data["results"]
        result= results[0]

        first_name= name[0]
        last_name= name[1]
        congresses= data["results"]
        congress= congresses[0]
        check_found=0
        members= congress["members"]
        for member in members:
            if(member["last_name"]==last_name):
                if(member["first_name"]== first_name):
                    member_ID= member["id"]
                    check_found=1
                    break
        if check_found==1:
            break
        x=x-1
    return member_ID


def construct_congress_profile(member_ID):
    headers = {"X-API-Key":"KgI2lOueGBFwLYWYsicnT4PSQUblFGDEpfj2Gcdd"}
    url= "https://api.propublica.org/congress/v1/" + "members/" + member_ID
    response= requests.get(url, headers=headers)
    data= response.json()
    result= data["results"]
    member= result[0]
    profile= {}
    if(member["middle_name"]):
        profile['name']= member["first_name"] + " " + member["middle_name"] + " " + member["last_name"]
    else:
        profile['name']= member["first_name"] + " " +  member["last_name"]
    profile['party']= ""
    if member["current_party"]== "R":
        profile['party']= "Republican"
    elif member["current_party"]== "D":
        profile['party']= "Democrat"
    else:
        profile['party']= "Other"
    roles_list= member["roles"]
    roles= roles_list[0]
    profile['title']= "U.S. " + roles["chamber"] + ", " + roles["title"]
    profile['state']= roles["state"]
    profile['service_span']= "From " + roles["start_date"]+ " to " + roles["end_date"]
    profile['website']= member["url"]
    if(member["twitter_account"]):
        profile['twitter']= "@" + member["twitter_account"]
    profile['facebook']= member["facebook_account"]
    profile['address']= roles["office"]
    profile['phone']= roles["phone"]
    committees=[]
    for committee in roles["committees"]:
        committees.append(committee["name"])
    profile['committees']=committees
    return(profile)

def check_execs(name):
    execs= requests.get("https://theunitedstates.io/congress-legislators/executive.json").json()
    name= name.split(" ")
    president={}
    profile={}
    for pres in execs:
        pname= pres["name"]
        first_name= pname["first"]
        last_name= pname["last"]
        if(first_name== name[0] and last_name== name[1]):
            president=pres
            full_name= ""
            fname= president['name']
            for key in fname:
                if(key== 'nickname'):
                    profile['nickname']= fname[key]
                else:
                    full_name= full_name + fname[key] + " "
            profile['name']= full_name
            profile['birthday']= president['bio']['birthday']
            profile['service_span']= []
            for term in president['terms']:
                if(term['type']=="prez"):
                    profile['title']= "President of the United States"
                else:
                    profile['title']= "Vice President of the United States"
                term_time= "From "+ term["start"] + " to " + term['end']
                profile['service_span'].append(term_time)
                profile['party']= term['party']
                return profile






def main(name):
    member_ID=check_Senate(name)
    if member_ID== 0:
        member_ID= check_House(name)
    profile= {}
    if member_ID!=0:
        profile= construct_congress_profile(member_ID)
    profile= check_execs(name)
    wiki_data = search_wiki(name)
    wiki_desc= wiki_data[2][0]
    print(name)
    profile['bio']= wiki_desc
    for key in profile:
        print(key, profile[key], "\n")
    
        


if __name__ == '__main__':
    main()