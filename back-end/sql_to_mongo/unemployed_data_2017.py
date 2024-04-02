from sql_to_mongo.base_model import BaseModel, Base
import sqlalchemy

class Stats2017(BaseModel, Base):
    __tablename__ = '2017_unemployed_data'