import os
from flask import Flask, jsonify
from flask_cors import CORS
from db.session import engine, SessionLocal
from db.mock import mockdb
from db.models import (
    Base, 
    User
)
from questions.generator import generate_new_question



app = Flask(__name__)
# CORS(app, origins=["http://localhost:3000", "http://another.domain"])  # This will allow all origins to access your app. It's okay for development but not for production!


# Base.metadata.create_all(bind=engine)


@app.route('/button-endpoint', methods=['POST'])
def button_endpoint():
    return jsonify(message="Button was pressed!")

# @app.route('/new-question', methods=['GET'])
# def new_question_route():
#     new_question = generate_new_question()
#     return jsonify(question=new_question)

@app.route('/newQuestions/<int:howmany>')
def new_questions(howmany):
    questions = [generate_new_question() for _ in range(howmany)]
    return jsonify(questions)


@app.route('/createTables', methods=['GET'])
def create_tables():
    try:
        Base.metadata.create_all(bind=engine)
    except Exception as e:
        return {"error": "Base: " + str(Base) + ". Error: " + str(e)}, 500
    return {"message": "Tables created!"}



if __name__ == '__main__':
    print("Starting Flask app...")
    CORS(app)
    app.run(debug=True, port=5000)