from sql_to_mongo.base_model import BaseModel, Base
import sqlalchemy

class Stats2022(BaseModel, Base):
    __tablename__ = '2022_unemployed_data'