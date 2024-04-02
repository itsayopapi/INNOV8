from sql_to_mongo.base_model import BaseModel, Base
import sqlalchemy

class Stats2018(BaseModel, Base):
    __tablename__ = '2018_unemployed_data'