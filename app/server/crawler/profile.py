import crawler.musician as musician
from .wikiAPI import search_wiki
from .occupation import find_occupations
import crawler.politician as politician

def construct_profiles(names):
    output = []
    for name in names:
        profile = {}
        profile["name"] = name
        wiki_data = search_wiki(name)
        profile['occID'], profile["occupations"] = find_occupations(wiki_data)
        profile['info'] = {}
        if profile['occID'] == "musician":
            profile['info'] = musician.construct_profile(name)
        if profile['occID']== 'politician':
            wiki_desc = wiki_data[2][0]
            wiki_desc= wiki_desc.split(" ")
            name= name.split()
            first_name= wiki_desc[0]
            last_name= name[1]
            new_name= first_name + " " + last_name
            print(new_name)
            profile['info']= politician.main(new_name)
        output.append(profile)

    return output
