DROP DATABASE IF EXISTS therapistconnect;
CREATE DATABASE therapistconnect;

\c therapistconnect;

CREATE TABLE users (
 id VARCHAR(200) PRIMARY KEY,
 role VARCHAR(200) NOT NULL,
 email VARCHAR(200) NOT NULL
);

CREATE TABLE therapists (
 id SERIAL PRIMARY KEY,
 user_id VARCHAR(200) NOT NULL REFERENCES users(id),
 license_number INTEGER NOT NULL,
 first_name VARCHAR(200) NOT NULL,
 last_name VARCHAR(200) NOT NULL,
 email VARCHAR(200) NOT NULL,
 specialization VARCHAR(200)
);

CREATE TABLE patients (
 id SERIAL PRIMARY KEY,
 user_id VARCHAR(200) NOT NULL REFERENCES users(id),
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
 zip_code VARCHAR(200) NOT NULL,
 profile_picture VARCHAR(500)   
);

CREATE TABLE journal_entries (
 id SERIAL PRIMARY KEY,
 patient_id INTEGER NOT NULL REFERENCES patients(id),
 entry_date DATE NOT NULL,
 journal_entry VARCHAR(3000) NOT NULL,
 therapist_notes VARCHAR(3000) DEFAULT NULL,
 analysis_score INTEGER NOT NULL,
 ai_response VARCHAR(3000),
 read BOOLEAN DEFAULT FALSE
);