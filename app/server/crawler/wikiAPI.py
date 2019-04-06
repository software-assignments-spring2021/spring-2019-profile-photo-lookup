import requests

def get_wiki_data(names):
    output = []
    url = 'https://en.wikipedia.org/w/api.php'
    for name in names:
        params = {
            'action':"opensearch",
            'search':name,
            'limit': 1,
            'namespace':0,
            'format':"json"
        }
        data = requests.Session().get(url=url, params=params).json()
        output.append(data)
    return output
