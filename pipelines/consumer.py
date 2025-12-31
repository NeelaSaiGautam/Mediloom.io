import json
from kafka import KafkaConsumer
import psycopg2
from datetime import datetime

import os
import psycopg2
from dotenv import load_dotenv

# Kafka config
KAFKA_BROKER = "kafka-38e1fd14-saigautam-19e3.l.aivencloud.com:28468"
TOPIC_NAME = "patientflow"
CERT_FOLDER = "./certs"

consumer = KafkaConsumer(
    TOPIC_NAME,
    bootstrap_servers=KAFKA_BROKER,
    security_protocol="SSL",
    ssl_cafile=f"{CERT_FOLDER}/ca.pem",
    ssl_certfile=f"{CERT_FOLDER}/service.cert",
    ssl_keyfile=f"{CERT_FOLDER}/service.key",
    value_deserializer=lambda m: json.loads(m.decode('utf-8'))
)

load_dotenv()

# PostgreSQL connection
conn = psycopg2.connect(
    host=os.getenv("DB_HOST"),
    database=os.getenv("DB_NAME"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASS")
)
cursor = conn.cursor()

# Insert function
def insert_patient_to_db(patient):
    query = """
        INSERT INTO patient_records (
            patient_id, name, age, gender, blood_type,
            medical_condition, date_of_admission, discharge_date,
            doctor, hospital, insurance_provider, billing_amount,
            room_number, admission_type, medication, test_results
        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """
    values = (
        patient['patient_id'],
        patient['name'],
        patient['age'],
        patient['gender'],
        patient['blood_type'],
        patient['medical_condition'],
        datetime.strptime(patient['date_of_admission'], '%Y-%m-%d %H:%M:%S.%f'),
        datetime.strptime(patient['discharge_date'], '%Y-%m-%d %H:%M:%S.%f'),
        patient['doctor'],
        patient['hospital'],
        patient['insurance_provider'],
        patient['billing_amount'],
        patient['room_number'],
        patient['admission_type'],
        patient['medication'],
        patient['test_results']
    )
    cursor.execute(query, values)
    conn.commit()
    print(f"\033[92m Inserted {patient['patient_id']} into DB\033[0m")

# Start consuming
print(f"\033[92m Waiting for messages from Kafka...\033[0m")
for msg in consumer:
    patient = msg.value
    insert_patient_to_db(patient)
