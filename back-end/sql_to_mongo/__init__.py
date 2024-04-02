from sql_to_mongo.storage import BuildNoSQLDatabase, classes

build_mongo = BuildNoSQLDatabase()
for year in classes.keys():
    build_mongo.get_province_unemployed_stats(year)
    build_mongo.get_unemployment_by_education_level(year)
    build_mongo.get_unemployment_by_gender(year)
    build_mongo.get_unemployment_by_race(year)
    print(f'done with {year}!')