from sql_to_mongo.base_model import BaseModel, Base
import sqlalchemy

class Stats2015(BaseModel, Base):
    __tablename__ = '2015_unemployed_data'