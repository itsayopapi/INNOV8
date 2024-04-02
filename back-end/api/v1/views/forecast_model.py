from flask import jsonify, request
from views import app_views
from models import storage
from models.sarimax_model import SARIMAXModel

sariMaxModel = SARIMAXModel()

@app_views.route('/unemployed_rate', methods=['POST'], strict_slashes=False)
def forecast_model():
    data = request.get_json()
    if data['startYear'] < 2022:
        result = storage.get_yearly_unemployed_stats(data['startYear'])
    else:
        result = []
    if data['endYear'] > 2022:
        steps = data['endYear'] - 2022
        start_year = 2023
        start_index = 32
        forecast_values, forecast_index = sariMaxModel.forecast(steps)
        for i in range(steps):
            if start_year >= data['startYear']:
                result.append({'year': start_year, 'unemployment_rate': forecast_values[start_index]})
            start_year += 1
            start_index += 1

    return jsonify(result)