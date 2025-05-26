from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow requests from React frontend

picnic_items = []

@app.route('/add-item', methods=['POST'])
def add_item():
    data = request.get_json()
    item = data.get('item')
    if item:
        picnic_items.append(item)
        return jsonify({'message': 'Item added!', 'items': picnic_items}), 200
    return jsonify({'error': 'No item provided'}), 400

@app.route('/get-items', methods=['GET'])
def get_items():
    return jsonify({'items': picnic_items})
