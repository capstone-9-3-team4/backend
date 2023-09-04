DROP DATABASE IF EXISTS therapistconnect;
CREATE DATABASE therapistconnect;

\c therapistconnect;

CREATE TABLE therapists (
 id SERIAL PRIMARY KEY,
 license_number INTEGER NOT NULL,
 first_name VARCHAR(200) NOT NULL,
 last_name VARCHAR(200) NOT NULL,
 email VARCHAR(200) NOT NULL,
 specialization VARCHAR(200)
);

CREATE TABLE patients (
 id SERIAL PRIMARY KEY,
 therapist_id INTEGER NOT NULL REFERENCES therapists(id),
 first_name VARCHAR(200) NOT NULL,
 last_name VARCHAR(200) NOT NULL,
 email VARCHAR(200) NOT NULL,
 dob DATE NOT NULL,
 gender VARCHAR(200) NOT NULL,
 contact_number VARCHAR(200) NOT NULL,
 address VARCHAR(200) NOT NULL,
 city VARCHAR(200) NOT NULL,
 state VARCHAR(200) NOT NULL,
 zip_code VARCHAR(200) NOT NULL   
);

CREATE TABLE journal_entries (
 id SERIAL PRIMARY KEY,
 patient_id INTEGER NOT NULL REFERENCES patients(id),
 entry_date DATE NOT NULL,
 journal_entry VARCHAR(300) NOT NULL,
 analysis_score INTEGER NOT NULL
);

