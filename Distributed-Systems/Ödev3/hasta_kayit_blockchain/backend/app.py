from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, PatientRecord, User
from blockchain import Blockchain
from auth import authenticate
from datetime import datetime

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
blockchain = Blockchain()

@app.before_request
def setup():
    db.create_all()
    if not User.query.first():
        db.session.add(User(username="ebu", password="1234"))
        db.session.add(User(username="fatih", password="1234"))
        db.session.commit()


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    if authenticate(data["username"], data["password"]):
        return jsonify({"success": True})
    return jsonify({"success": False}), 401

@app.route("/add_patient", methods=["POST"])
def add_patient():
    data = request.json
    timestamp = datetime.now().isoformat()
    record = PatientRecord(
        user_id=data["user_id"],
        patient_name=data["patient_name"],
        diagnosis=data["diagnosis"],
        treatment=data["treatment"],
        timestamp=timestamp
    )
    db.session.add(record)
    db.session.commit()

    blockchain.add_transaction({
        "user": data["user_id"],
        "patient": data["patient_name"],
        "diagnosis": data["diagnosis"],
        "treatment": data["treatment"],
        "timestamp": timestamp
    })
    blockchain.mine_block()
    return jsonify({"message": "Kayıt eklendi."})

@app.route("/chain", methods=["GET"])
def get_chain():
    return jsonify(blockchain.get_chain())

if __name__ == "__main__":
    app.run(debug=True)
