from joblib import load
import numpy as np  

class RandomForestPrediction:
    def __init__(self, model_path = 'models/random_forest_classifier.joblib'):
        self.__model = load(model_path)

    def predict(self, input_data):
        input_data_2d = np.array(input_data).reshape(1, -1)
        output_data = self.__model.predict(input_data_2d)
        return output_data
