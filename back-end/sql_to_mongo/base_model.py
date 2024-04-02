import sqlalchemy
from sqlalchemy import Column, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class BaseModel:
    uqnr = Column(String, primary_key=True)
    personnr = Column(String)
    prov = Column(String)
    age = Column(String)
    age_grp = Column(String)
    geotype = Column(String)
    gender = Column(String)
    race = Column(String)
    education = Column(String)
    disab = Column(String)
    person_wgt = Column(String)
    employ_status = Column(String)
