from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS class
import pickle
import numpy as np

# Load the saved Decision Tree model
with open('C:\Practice\Random_Forest.pkl', 'rb') as f:
    model = pickle.load(f)

app = Flask('my_app')
CORS(app)  # Enable CORS for all routes

@app.route('/', methods=['POST'])
def predict():
    data = request.json
    sub = 1
    numerosity = data['Numerosity'] 
    RTs_WM = data['RTs_WM']
    Accuracy_WM = data['Accuracy_WM']
    
    features = np.array([[sub, numerosity, RTs_WM, Accuracy_WM]])
    prediction = model.predict(features)
    print(prediction)

    return jsonify({
        'hello': 'world',
        'result': prediction[0]
    })

app.run(debug=True)
