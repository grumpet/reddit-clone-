import firebase_admin
from firebase_admin import credentials, firestore
cred = credentials.Certificate(r"C:\Users\nknim\Desktop\uni-drive\back\reddit-clone-fdade-firebase-adminsdk-80zb3-a920ba2736.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
users = db.collection('users')

liked_songs = db.collection('liked_songs')

def add_liked_songs_dict(username, liked_songs_dict):
    liked_songs.document(username).set(liked_songs_dict)
    return {"message": "Liked songs added"}, 200

def add_user(email, username, password):
    user = users.document(username)
    if user.get().exists:
        return {"message": "username already exists"}, 400
    user.set({"email": email, "password": password})
    return {"message": "Registration complete"}, 200

def add_spotify_user(email, username):
    user = users.document(username)
    if user.get().exists:
        return {"message": "username already exists"}, 400
    user.set({"email": email})


def get_user(username):
    user = users.document(username)
    if not user.get().exists:
        return False
    return user.get().to_dict()


def get_user_email(username):
    user = users.document(username)
    if not user.get().exists:
        return False
    return user.get().to_dict()["email"]


def get_user_password(username):
    user = users.document(username)
    if not user.get().exists:
        return False
    return user.get().to_dict()["password"]

def email_exists(email):
    for user in users.stream():
        if user.to_dict()["email"] == email:
            return True
    return False

def username_exists(username):
    for user in users.stream():
        if user.id == username:
            return True
    return False


def username_email_exists(username, email):
    for user in users.stream():
        if user.id == username:
            return "username already exists"
        elif user.to_dict()["email"] == email:
            return "email already exists"
    return False


def two_users_simillar_liked_songs(user1, user2):
    user1_liked_songs = liked_songs.document(user1).get().to_dict()
    user2_liked_songs = liked_songs.document(user2).get().to_dict()
    simillar_songs = {song: user1_liked_songs[song] for song in user1_liked_songs if song in user2_liked_songs}
    return simillar_songs

