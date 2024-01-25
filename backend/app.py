from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return jsonify({"message": "Hello, world! This is the Flask backend."})

@app.route('/data', methods=['GET', 'POST'])
def post_data():
    # Handle POST request
    data = request.json
    print(data)  # Do something with the data
    return jsonify({'message': 'POST request successful'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
