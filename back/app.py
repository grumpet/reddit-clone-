from flask import Flask, jsonify, request, session
from flask_cors import CORS
from users_crud import *
from werkzeug.security import generate_password_hash ,check_password_hash
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

users = {} 

load_dotenv()
app.secret_key = os.environ.get('SECRET_KEY')

@app.route('/', methods=['GET'])
def health_check():
    print(session)
    return jsonify('connected to server...'), 200

@app.route('/register', methods=['POST'])
def register_details():
    email = request.json.get('email')
    username = request.json.get('username')
    password = request.json.get('password')
    message = username_email_exists(username, email)
    print(message)
    if message:
        return jsonify({"message": message}), 400
    password_hash = generate_password_hash(password)  
    add_user(email, username, password_hash)  
    return jsonify({"message": "Registration complete"}), 200

@app.route('/login', methods=['POST'])
def login_details():
    username = request.json.get('username')
    password = request.json.get('password')
    print(username, password)
    if get_user_password(username):
        data_base_password = get_user_password(username)
        print(data_base_password)
        if check_password_hash(data_base_password, password):
            session['username'] = username 
            return jsonify({"message": "Login successful"}), 200
        else:
            return jsonify({"message": "Invalid password"}), 400
    else:
        return jsonify({"message": "Invalid username"}), 400

@app.route('/logout')
def logout():
    session.pop('username', None)
    return jsonify({"message": "Logout successful"}), 200