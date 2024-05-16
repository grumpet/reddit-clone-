from flask import Flask, jsonify, request, redirect, url_for
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = {}  # A dictionary to store user data

@app.route('/', methods=['GET'])
def health_check():
    print(users)
    return jsonify('connected to server...'), 200


@app.route('/register', methods=['POST'])
def register_details():
    email = request.json.get('email')
    username = request.json.get('username')
    password = request.json.get('password')
    if email in users:
        return jsonify({"message": "Email already exists"}), 400
    users[email] = [username, password]
    return jsonify({"message": "Registration complete"}), 200