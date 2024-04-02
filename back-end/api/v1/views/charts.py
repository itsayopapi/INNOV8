from flask import jsonify, request
from views import app_views
from models import storage

@app_views.route('/provincial_unemployed', methods=['GET'], strict_slashes=False)
def provincial_unemployed_chart():
    data = storage.get_province_unemployed_stats('2015')
    del data['_id']
    return jsonify(data)

@app_views.route('/education_unemployed', methods=['GET'], strict_slashes=False)
def education_unemployed_chart():
    data = storage.get_education_unemployed_stats('2015')
    del data['_id']
    return jsonify(data)

@app_views.route('/gender_unemployed', methods=['GET'], strict_slashes=False)
def gender_unemployed_chart():
    data = storage.get_unemployment_by_gender('2015')
    del data['_id']
    return jsonify(data)

@app_views.route('/race_unemployed', methods=['GET'], strict_slashes=False)
def race_unemployed_chart():
    data = storage.get_unemployment_by_race('2015')
    del data['_id']
    return jsonify(data)
