import os
import boto3
import requests
from tqdm import tqdm
from os import environ
from botocore.exceptions import ClientError

#tutorial: https://docs.aws.amazon.com/rekognition/latest/dg/collections.html

def get_local_img(filename):
    with open(filename, 'rb') as imgfile:
        return imgfile.read()


def create_collection(collectionID):
    client = boto3.client('rekognition')
    response=client.create_collection(CollectionId = collectionID)
    print('Collection ARN: ' + response['CollectionArn'])
    print('Status code: ' + str(response['StatusCode']))
    print('Done...')
    return str(response['StatusCode'])


def delete_collection(collectionID):
    client=boto3.client('rekognition')
    print('Attempting to delete collection ' + collectionID)
    statusCode = ''
    try:
        response=client.delete_collection(CollectionId = collectionID)
        statusCode=response['StatusCode']
    except ClientError as e:
        if e.response['Error']['Code'] == 'ResourceNotFoundException':
            print ('The collection ' + collectionID + ' was not found ')
        else:
            print ('Error: ' + e.response['Error']['Message'])
        statusCode = e.response['ResponseMetadata']['HTTPStatusCode']
    print('Operation returned Status Code: ' + str(statusCode))
    print('Done...')
    return str(statusCode)


def match_face_from_collection(image):
    client=boto3.client('rekognition')
    img_bytes = get_local_img(image)
    response=client.search_faces_by_image(CollectionId = 'RISE_NYU',
                                Image = {'Bytes': img_bytes},
                                FaceMatchThreshold = 70,
                                MaxFaces = 2)
    faceMatches=response['FaceMatches']
    print ('Matching faces')
    for match in faceMatches:
            print ('FaceId:' + match['Face']['ExternalImageId'])
            print ('Similarity: ' + "{:.2f}".format(match['Similarity']) + "%")
            print
    return match['Face']['ExternalImageId']


def add_face_to_collection(image_path, ID):
    client=boto3.client('rekognition')
    img_bytes = get_local_img(image_path)
    response=client.index_faces(CollectionId='RISE_NYU',
                                Image={'Bytes': img_bytes},
                                ExternalImageId = ID,
                                MaxFaces = 1,
                                QualityFilter="AUTO",
                                DetectionAttributes=['ALL'])
    print ('Results for ' + ID)
    print('Faces indexed:')
    for faceRecord in response['FaceRecords']:
         print('  Face ID: ' + faceRecord['Face']['FaceId'])
         print('  Location: {}'.format(faceRecord['Face']['BoundingBox']))
    print('Faces not indexed:')
    for unindexedFace in response['UnindexedFaces']:
        print(' Location: {}'.format(unindexedFace['FaceDetail']['BoundingBox']))
        print(' Reasons:')
        for reason in unindexedFace['Reasons']:
            print('   ' + reason)
    return


def delete_face_from_collection(faceIDs):
    client=boto3.client('rekognition')
    response=client.delete_faces(CollectionId = 'RISE_NYU',
                                 FaceIds = faceIDs)
    print(str(len(response['DeletedFaces'])) + ' faces deleted:')
    for faceID in response['DeletedFaces']:
         print(faceID)
    return


def upload_all_faces(directory):
    for file in tqdm(os.listdir(directory)):
        file_name = os.fsdecode(file)
        if file_name.endswith('.jpg'):
            file_ID = os.path.splitext(file_name)[0]
            file_path = os.path.join(directory, file_name)
            print(file_path)
            add_face_to_collection(file_path, file_ID)
    return


#delete_collection('RISE_NYU')
#create_collection('RISE_NYU')
#upload_all_faces(photos)
#match_face_from_collection('face.jpg')
