import crawler.musician as musician
from .wikiAPI import search_wiki
from .occupation import find_occupations


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
        output.append(profile)

    return output
