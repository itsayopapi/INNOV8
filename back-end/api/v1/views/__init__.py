from flask import Blueprint


app_views = Blueprint("app_views", "__name__", url_prefix="api/v1")

from views.charts import *
from views.predictive_model import *
from views.forecast_model import *