from sql_to_mongo.base_model import BaseModel, Base
import sqlalchemy

class MasterDataset(BaseModel, Base):
    __tablename__ = 'unemployed_data'