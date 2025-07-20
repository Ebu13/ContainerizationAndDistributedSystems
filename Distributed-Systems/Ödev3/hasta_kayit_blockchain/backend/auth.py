from models import db, User

def authenticate(username, password):
    user = User.query.filter_by(username=username, password=password).first()
    return user is not None
