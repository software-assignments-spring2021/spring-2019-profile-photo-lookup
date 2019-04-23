import boto3

client = boto3.client('rekognition', region_name='us-east-1')

def get_local_img(filename):
    with open(filename, 'rb') as imgfile:
        return imgfile.read()


def rekognize_celebrity(img_path):
    # read image as binary string
    img_bytes = get_local_img(img_path)

    # feed image to Amazon Rekognition API
    response = client.recognize_celebrities(Image={'Bytes': img_bytes})

    # extract names and face bounding box locations
    names = []
    bbox = []
    for face in response['CelebrityFaces']:
        names.append(face['Name'])
        bbox.append(face['Face']['BoundingBox'])

    return {"names": names, "bbox": bbox}
