from pymongo import MongoClient

class Storage:
    def __init__(self):
        self.__mongo_client = MongoClient('localhost', 27017)
        self.__db = self.__mongo_client['unemployed_data']

    def get_province_unemployed_stats(self, year):
        return self.__db[f'province_unemployed_stats_{year}'].find_one()

    def get_education_unemployed_stats(self, year):
        return self.__db[f'education_unemployed_stats_{year}'].find_one()

    def get_unemployment_by_gender(self, year):
        return self.__db[f'gender_unemployed_stats_{year}'].find_one()

    def get_unemployment_by_race(self, year):
        return self.__db[f'race_unemployed_stats_{year}'].find_one()
    
    def store_yearly_unemployed_stats(self):
        collection = self.__db['yearly_unemployed_stats']
        data = {
            1991: 34.339,
            1992: 34.792,
            1993: 34.963,
            1994: 35.16,
            1995: 35.398,
            1996: 35.488,
            1997: 35.703,
            1998: 35.919,
            1999: 35.894,
            2000: 35.846,
            2001: 35.898,
            2002: 35.839,
            2003: 35.906,
            2004: 35.906,
            2005: 35.997,
            2006: 36.115,
            2007: 36.271,
            2008: 36.536,
            2009: 38.589,
            2010: 45.536,
            2011: 39.739,
            2012: 41.897,
            2013: 42.81,
            2014: 43.958,
            2015: 41.999,
            2016: 43.936,
            2017: 42.811,
            2018: 43.761,
            2019: 47.406,
            2020: 43.499,
            2021: 49.864,
            2022: 51.519
        }
        for year, rate in data.items():
            collection.insert_one({'year': year, 'unemployment_rate': rate})
    
    def get_yearly_unemployed_stats(self, start_year = 1991):
        collection = self.__db['yearly_unemployed_stats']
        results = collection.find({'year': {'$gte': start_year, '$lte': 2022}}, {'_id': 0})
        return list(results)
