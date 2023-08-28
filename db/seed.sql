-- \c therapistconnect;

INSERT INTO therapists (license_number, first_name, last_name, email, specialization) VALUES 
(100, 'Elizabeth', 'Bright', 'elizabethbright@pursuit.org', 'child psychology'),
(101, 'Jane', 'Doe', 'janedoe@gmail.com', 'psychology');

INSERT INTO patients (therapist_id, first_name, last_name, email, dob, gender, contact_number, address, city, state, zip_code) VALUES
(2, 'Ryan', 'Lundy', 'ryanlundy@gmail.org', '1992-01-07', 'male', '555-555-5555', '4200 Broadway, 3rd floor', 'New York', 'NY', '10033');

INSERT INTO journal_entries (patient_id, entry_date, journal_entry, analysis_score) VALUES 
(1, '2023-08-25', 'Hello world', 1);
