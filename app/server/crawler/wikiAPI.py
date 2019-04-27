import requests

def search_wiki(keyword):
    url = 'https://en.wikipedia.org/w/api.php'
    
    params = {
        'action': "opensearch",
        'search': keyword,
        'limit': 1,
        'namespace': 0,
        'format': "json"
    }

    response = requests.Session().get(url=url, params=params).json()
    return response


def get_wiki_data(keyword):
    url = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + keyword
    response = requests.Session().get(url=url).json()

    data = {
        'imgURL': response['originalimage']['source'],
        'bio': response['extract']
    }

    return data