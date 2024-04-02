from flask import jsonify, request
from views import app_views
from models.predictive_model import RandomForestPrediction

randomForestPrediction = RandomForestPrediction()

employment_status = {
      0: 'Employed',
      1: 'Unemployed',
      2: 'Unspecified'
}

@app_views.route('/predictive_model', methods=['POST'], strict_slashes=False)
def predictive_model():
    encoderLoader = ['provinces', 'age', 'geotype', 'gender', 'race', 'education', 'disability', 'weight']
    input_data = []
    values = request.json
    for key in encoderLoader:
            input_data.append(int(values[key]))
    status = employment_status[randomForestPrediction.predict(input_data)[0]]
    return jsonify(status)