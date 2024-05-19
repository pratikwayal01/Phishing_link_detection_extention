from flask import Flask, jsonify, request
from flask_restful import Resource, Api
import pickle
import URLFeatureExtraction as fe

app = Flask(__name__)
api = Api(app)

class PredictLink(Resource):
    def post(self):
        try:
            data = request.get_json(force=True)
            links = data.get('links', [])
            print(links)
            # Process the links one by one
            results = {}
            for link in links:
                
                result_for_link = self.process_link(link)
                results[link]=str(result_for_link)
            print(results)
           
            return  results
        except Exception as e:
            return jsonify({'error': str(e)}), 400

    def process_link(self, link):
        loaded_model = pickle.load(open("XGBoostClassifier.pickle.dat", "rb"))

        extract_url = fe.featureExtraction(link)

        prediction = loaded_model.predict([extract_url])
        return prediction[0]

# Endpoints definitions
api.add_resource(PredictLink, '/predict')

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
