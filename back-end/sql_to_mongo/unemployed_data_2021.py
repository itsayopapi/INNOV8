from sql_to_mongo.base_model import BaseModel, Base
import sqlalchemy

class Stats2021(BaseModel, Base):
    __tablename__ = '2021_unemployed_data'