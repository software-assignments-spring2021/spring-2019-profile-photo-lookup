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
    data = requests.Session().get(url=url, params=params).json()
    return data

