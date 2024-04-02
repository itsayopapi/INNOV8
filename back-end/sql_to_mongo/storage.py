from sql_to_mongo.unemployed_data_2015 import Stats2015
from sql_to_mongo.unemployed_data_2016 import Stats2016
from sql_to_mongo.unemployed_data_2017 import Stats2017
from sql_to_mongo.unemployed_data_2018 import Stats2018
from sql_to_mongo.unemployed_data_2021 import Stats2021
from sql_to_mongo.unemployed_data_2022 import Stats2022
from sql_to_mongo.unemployed_data import MasterDataset
from sql_to_mongo.base_model import Base
from sqlalchemy.orm import scoped_session, sessionmaker
import sqlalchemy
from sqlalchemy import func
from pymongo import MongoClient

classes = {'2015': Stats2015, '2016': Stats2016, '2017': Stats2017, '2018': Stats2018, '2021': Stats2021, '2022': Stats2022, 'master': MasterDataset}

class BuildNoSQLDatabase:
    def __init__(self):
        self.__engine = sqlalchemy.create_engine('mysql://root:root@localhost:3306/unemployed_data')
        Base.metadata.create_all(self.__engine)
        sess_factory = sessionmaker(bind=self.__engine, expire_on_commit=False)
        self.__session = scoped_session(sess_factory)
        self.__mongo_client = MongoClient('localhost', 27017)
        self.__mongo_client.drop_database('unemployed_data')
        

    def get_province_unemployed_stats(self, year):
        graph_data = {}
        provinces = self.__session.query(classes[year].prov).distinct().all()
        total_people = self.__session.query(classes[year].personnr).filter_by(employ_status='unemployed').count()
        for prov in provinces:
            prov = prov[0]
            total_unemployed = self.__session.query(classes[year].uqnr).filter_by(prov=prov).filter_by(employ_status='unemployed').count()
            graph_data[prov] = (total_unemployed / total_people) * 100
        self.__mongo_client['unemployed_data'][f'province_unemployed_stats_{year}'].insert_one(graph_data)


    def get_unemployment_by_education_level(self, year):
        graph_data = {}
        education_levels = self.__session.query(classes[year].education).distinct().all()
        total_people = self.__session.query(classes[year].personnr).filter_by(employ_status='unemployed').count()
        for level in education_levels:
            level = level[0]
            total_unemployed = self.__session.query(classes[year].uqnr).filter_by(education=level).filter_by(employ_status='unemployed').count()
            graph_data[level] = (total_unemployed / total_people) * 100
        self.__mongo_client['unemployed_data'][f'education_unemployed_stats_{year}'].insert_one(graph_data)

    def get_unemployment_by_race(self, year):
        graph_data = {}
        races = self.__session.query(classes[year].race).distinct().all()
        total_people = self.__session.query(classes[year].personnr).filter_by(employ_status='unemployed').count()
        for race in races:
            race = race[0]
            total_unemployed = self.__session.query(classes[year].uqnr).filter_by(race=race).filter_by(employ_status='unemployed').count()
            graph_data[race] = (total_unemployed / total_people) * 100
        self.__mongo_client['unemployed_data'][f'race_unemployed_stats_{year}'].insert_one(graph_data)

    def get_unemployment_by_gender(self, year):
        graph_data = {}
        genders = self.__session.query(classes[year].gender).distinct().all()
        total_people = self.__session.query(classes[year].personnr).filter_by(employ_status='unemployed').count()
        for gender in genders:
            gender = gender[0]
            total_unemployed = self.__session.query(classes[year].uqnr).filter_by(gender=gender).filter_by(employ_status='unemployed').count()
            graph_data[gender] = (total_unemployed / total_people) * 100
        self.__mongo_client['unemployed_data'][f'gender_unemployed_stats_{year}'].insert_one(graph_data)
