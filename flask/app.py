from flask import Flask, render_template, request, redirect, url_for, session, jsonify, flash,  render_template, Response
from flask_mysqldb import MySQL
import MySQLdb.cursors
# Regular expression operations
import re
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
import pymssql
import pandas as pd
from bson import json_util
import json
# PostgreSQL database adapter for Python
import psycopg2
import psycopg2.extras

app = Flask(__name__)

app.secret_key = 'xyzsdfg'


def connection():
    conn = pymssql.connect(server='213.140.22.237\SQLEXPRESS', user='ramon.darwin', password='ramondarwinsqlgalvani', database='ramon.darwin')
    return conn


mysql = MySQL(app)
CORS(app)


@app.route('/')
def index():
    return ("Modificare l'URL per visualizzare i dati.")


@app.route('/teachers')
def docenti():
    # Crea una connessione
    conn = connection()
    # Crea un cursore
    cur = conn.cursor(as_dict=True)
    # Esegue la query di SQL
    cur.execute("SELECT * FROM docenti")
    # Raccoglie tutte le righe
    list_users = cur.fetchall()
    return jsonify(list_users)
    resp = jsonify(list_users)
    # Ritorna un json.dumps
    resp = json_util.dumps(list_users)
    return Response(resp, mimetype='application/json')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.json['email']
        password = request.json['password']
        # Crea una connessione
        conn = connection()
        # Crea un cursore
        cursor = conn.cursor()
        # Esegue la query
        cursor.execute('SELECT * FROM docenti WHERE email=%s AND password=%s', (email, password))
        # Raccoglie i dati
        user = cursor.fetchone()
        if user:
            return jsonify({"message": "Logged in successfully", "email":email, "password":password}), 200
        else:
            return jsonify("Doesn't match"), 400

    return jsonify({"message": "Error"}), 400


@app.route('/logout')
def logout():
    if 'loggedin' in session:
        session.pop('loggedin', None)
        session.pop('name', None)
        session.pop('email', None)
        return jsonify({"message": "Logged out successfully"}), 200
    else:
        return jsonify({"message": "You are not logged in"}), 400
        

@app.route('/register', methods=['GET', 'POST'])
def register():
    # Se la richiesta HTTP è di tipo "POST"
    if request.method == 'POST':
        # Il valore del campo "name" viene associato alla variabile "name"
        name = request.json['name']
        # Il valore del campo "surname" viene associato alla variabile "surname"
        surname = request.json['surname']
        # Il valore del campo "email" viene associato alla variabile "email"
        email = request.json['email']
        # Il valore del campo "password" viene associato alla variabile "password"
        password = request.json['password']
        # Crea una connessione
        conn = connection()
        # Crea un cursore
        cursor = conn.cursor()
        # Esegue la query
        cursor.execute('SELECT * FROM docenti WHERE email=%s', (email))
        # I dati del primo account trovato dalla query SQL vengono associati alla variabile "account"
        account = cursor.fetchone()
        # Se l'account è già esistente, restituisce un messaggio di errore
        if account:
            return jsonify({"message": "Account già esistente!"}), 400
        # Se l'indirizzo email non è valido, restituisce un messaggio di errore
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            return jsonify({"message": "Indirizzo email non valido!"}), 400
        # Se non sono stati compilati tutti i campi del modulo, restituisce un messaggio di errore
        elif not name or not surname or not email or not password:
            return jsonify({"message": "Compilare tutti i campi del modulo!"}), 400
        else:
        # Esegue la query
            cursor.execute(
                'INSERT INTO docenti (name, surname, email, password) VALUES (%s, %s, %s, %s)', (name,surname, email, password))
            conn.commit()
            return jsonify({"message": "Registrazione effettuata con successo!"}), 201


@app.route('/verifiche', methods=['POST', 'GET'])
def verifiche():
    if request.method == 'GET':
        # Crea una connessione
        conn = connection()
        # Crea un cursore
        cur = conn.cursor(as_dict=True)
        # Esegue la query
        cur.execute("SELECT * FROM Verifiche")
        # Raccoglie i dati
        data = cur.fetchall()
        # Inizializza una lista vuota
        dataJson = []
        print(data)
        # Inizia un ciclo per iterare attraverso ogni documento nella lista "data"
        for doc in data:
            # Assegna la chiave "id" del documento alla variabile "id"
            id = doc['id']
            title = doc['title']
            course = doc['course']
            difficulty = doc['difficulty']
            duration = doc['duration']
            classe = doc['classe']
            subject = doc['subject']
            link = doc['link']
            griglia = doc['griglia']
            dataDict = {
                # Aggiunge una coppia chiave-valore al dizionario "dataDict"
                # Con la chiave "id" e il valore assegnato alla variabile "id"
                'id' :id,
                'title': title,
                'course': course,
                'difficulty': difficulty,
                'duration': duration,
                'classe': classe,
                'subject': subject,
                'link': link,
                'griglia': griglia,
            }
            dataJson.append(dataDict)
        return jsonify(dataJson)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)