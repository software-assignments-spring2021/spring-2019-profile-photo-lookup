import re
import os
import json
import requests
import pandas as pd
import numpy as np
from unidecode import unidecode
from tqdm import tqdm

def is_silhouette(profileURL):
    response_byte = requests.get(profileURL, params = {'redirect': 'false'}).content
    response_json = response_byte.decode('utf8').replace("'", '"')
    json_data = json.loads(response_json)
    return json_data["data"]["is_silhouette"]

def clean_name(first, last):
    first = re.sub(' +', '-', first)
    first = re.sub("'", ':', first)
    first = unidecode(first)
    last= re.sub(' +', '-', last)
    last = re.sub("'", ':', last)
    last = unidecode(last)
    return first, last

def save_profile_pics(school, year, csv_data, folder):
    df = pd.read_csv(csv_data)
    for indx, student in tqdm(df.iterrows(), total=df.shape[0]):
        uid = str(student['uid'])
        firstName = student['firstName']
        lastName = student['lastName']
        if firstName is np.nan or lastName is np.nan:
            continue
        firstName, lastName = clean_name(firstName, lastName)
        profileURL = "https://graph.facebook.com/" + uid + "/picture?width=9999&height=9999"
        if not is_silhouette(profileURL):
            filename = uid + '_' + firstName + '_' + lastName + '_' + school + '_' + year + '.jpg' 
            path = os.path.join(folder, filename)
            f = open(path,'wb')
            f.write(requests.get(profileURL).content)
            f.close()
    return

#save_profile_pics('CAS', '2020', 'output.csv', 'photos')