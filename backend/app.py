from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Database config (SQLite for simplicity – acceptable for final year)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:699623@localhost:5434/carbon_db' 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# ------------------ MODELS ------------------

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(200))

class Activity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    type = db.Column(db.String(50))
    value = db.Column(db.Float)
    emission = db.Column(db.Float)
    date = db.Column(db.String(20))

# ------------------ EMISSION FACTORS ------------------

EMISSION_FACTORS = {
    "travel": 0.21,
    "electricity": 0.82,
    "waste": 0.45
}

# ------------------ ROUTES ------------------

@app.route("/")
def home():
    return "Carbon Footprint Tracker Backend Running"

# -------- REGISTER --------
@app.route("/register", methods=["POST"])
def register():
    data = request.json

    hashed_password = generate_password_hash(data["password"])

    new_user = User(
        name=data["name"],
        email=data["email"],
        password=hashed_password
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"})

# -------- LOGIN --------
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    user = User.query.filter_by(email=data["email"]).first()

    if user and check_password_hash(user.password, data["password"]):
        return jsonify({
            "message": "Login successful",
            "user_id": user.id,
            "name": user.name
        })

    return jsonify({"message": "Invalid credentials"}), 401

# -------- ADD ACTIVITY --------
@app.route("/activity", methods=["POST"])
def add_activity():
    data = request.json

    factor = EMISSION_FACTORS.get(data["type"], 0)
    emission = float(data["value"]) * factor

    activity = Activity(
        user_id=data["user_id"],
        type=data["type"],
        value=data["value"],
        emission=emission,
        date=data["date"]
    )

    db.session.add(activity)
    db.session.commit()

    return jsonify({"message": "Activity added", "emission": emission})

# -------- GET ACTIVITIES --------
@app.route("/activities/<int:user_id>", methods=["GET"])
def get_activities(user_id):
    activities = Activity.query.filter_by(user_id=user_id).all()

    result = []
    for a in activities:
        result.append({
            "id": a.id,
            "type": a.type,
            "value": a.value,
            "emission": a.emission,
            "date": a.date
        })

    return jsonify(result)

@app.route("/profile/<int:user_id>", methods=["GET"])
def get_profile(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"message": "User not found"}), 404

    return jsonify({
        "id": user.id,
        "name": user.name,
        "email": user.email
    })
import csv
from io import StringIO
from flask import Response

@app.route("/export/csv/<int:user_id>", methods=["GET"])
def export_csv(user_id):
    activities = Activity.query.filter_by(user_id=user_id).all()

    si = StringIO()
    writer = csv.writer(si)
    writer.writerow(["Date", "Type", "Value", "Emission (kg CO2)"])

    for a in activities:
        writer.writerow([a.date, a.type, a.value, round(a.emission, 2)])

    output = si.getvalue()

    return Response(
        output,
        mimetype="text/csv",
        headers={"Content-Disposition": "attachment;filename=carbon_report.csv"}
    )


# ------------------ RUN ------------------

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
