from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({"message": "Hello, world! This is the Flask backend."})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
