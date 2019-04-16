import cv2
import boto3

client = boto3.client('rekognition', region_name='us-east-1')


def construct_student_profile(ID):
    info = ID.split('_') 
    student = {
        'uid': info[0],
        'first': info[1],
        'last': info[2],
        'school': info[3],
        'year': info[4]
    }
    return student


def crop_face(x1, y1, x2, y2, img):
    # calculate extended corner locations
    # enlarge face crop to include the entire head
    hy1 = int(y1 - (0.2 * (y2 - y1)))
    if hy1 <= 0:
        hy1 = int(y1)
    hy2 = int(y2)
    hx1 = int(x1 - (0.2 * (x2 - x1)))
    if hx1 <= 0:
        hx1 = int(x1)
    hx2 = int(x2 + (0.2 * (x2 - x1)))
    if hx2 <= 0:
        hx2 = int(x2)

    return img[hy1:hy2, hx1:hx2]


def detect_faces(filename):

    image = cv2.imread(filename)
    image_bytes = cv2.imencode('.jpg', image)[1].tostring()

    response = client.detect_faces(Image = {'Bytes': image_bytes})

    faces = []

    imgHeight, imgWidth, _ = image.shape
    for faceDetails in response['FaceDetails']:
        bbox = faceDetails['BoundingBox']
        left = imgWidth * bbox['Left']
        top = imgHeight * bbox['Top']
        width = imgWidth * bbox['Width']
        height = imgHeight * bbox['Height']
        face = crop_face(left, top, left + width, top + height, image)
        face_bytes = cv2.imencode('.jpg', face)[1].tostring()
        faces.append(face_bytes)
        
    return faces


def rekognize_student(img_path):
    faces = detect_faces(img_path)
    for face_bytes in faces:
        response = client.search_faces_by_image(CollectionId = 'RISE_NYU',
                                              Image = {'Bytes': face_bytes},
                                              FaceMatchThreshold = 70,
                                              MaxFaces = 2)
        faceMatches=response['FaceMatches']
        output = []
        for match in faceMatches:
            uid = match['Face']['ExternalImageId']
            profile = construct_student_profile(uid)
            profile['bbox'] = match['Face']['BoundingBox']
            profile['confidence'] = "{:.2f}".format(match['Similarity']) + "%"
            output.append(profile)
    return {"students": output}
