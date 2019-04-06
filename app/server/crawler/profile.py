from .wikiAPI import *
from .occupation import *

def construct_profiles(names):
    wiki_data = get_wiki_data(names)
    output = find_occupations(wiki_data)

    return output
