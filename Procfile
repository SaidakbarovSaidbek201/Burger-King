web:gunicorn burger.wsgi --log-file - 
web: python manage.py migrate && gunicorn burger.wsgi