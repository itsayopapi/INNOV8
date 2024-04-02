from flask import Flask
from flask_cors import CORS
from views import app_views

app = Flask(__name__)

app.register_blueprint(app_views, url_prefix="/api/v1")

cors = CORS(app, resources={r"*": {"origins": "*"}})

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)