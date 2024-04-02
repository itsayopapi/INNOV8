from sql_to_mongo.base_model import BaseModel, Base
import sqlalchemy

class Stats2016(BaseModel, Base):
    __tablename__ = '2016_unemployed_data'