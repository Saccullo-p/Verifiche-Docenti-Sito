FROM nikolaik/python-nodejs

# Definisce la working directory del container
WORKDIR /flask

ENV FLASK_APP=app.py

RUN npm install -g nodemon

# Copia requirements.txt e installa le dipendenze
COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

# Copia tutta la cartella server
COPY . .

# Espone la porta 5000
EXPOSE 5000

# Avvia il server python
# CMD ["python", "./app.py"]
# CMD ["nodemon", "./app.py"]
CMD ["flask", "run", "--host=0.0.0.0"]
