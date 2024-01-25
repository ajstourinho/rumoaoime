from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__)
CORS(app)

# Configure MongoDB URI (replace with your MongoDB URI)
app.config['MONGO_URI'] = 'mongodb://rumoaoime-database:27017/database_teste'

# Initialize PyMongo
mongo = PyMongo(app)

@app.route('/')
def index():
    return jsonify({"message": "Hello, world! This is the Flask backend."})

@app.route('/data', methods=['GET', 'POST'])
def post_data():
    # Handle POST request
    data = request.json
    print(data)  # Do something with the data

    # Pymongo test
    user_data = {
        'username': 'john_doe',
        'email': 'john@example.com',
    }
    users = mongo.db.collection_teste  # 'users' is the name of the MongoDB collection
    user_id = users.insert_one(user_data).inserted_id
    print(f'User added with ID: {user_id}')
    
    return jsonify({'message': 'POST request successful'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
