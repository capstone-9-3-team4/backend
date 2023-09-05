\c therapistconnect;


INSERT INTO users (id, role, email, password_hash) VALUES 
('ogPJfNIkAlSr5RiGHYUqR2d91UA3', 'T', 'ryanlundy@pursuit.org', 'UkVEQUNURUQ='),
('p8CR5WYLOEZqdHekreGAVZVXFLY2', 'P', 'christianorlando@pursuit.org', 'UkVEQUNURUQ=');


INSERT INTO therapists (user_id, license_number, first_name, last_name, email, specialization) VALUES 
('ogPJfNIkAlSr5RiGHYUqR2d91UA3', 100, 'Ryan', 'Lundy', 'pursuit.org', 'psychology');
-- (101, 'Jane', 'Doe', 'janedoe@gmail.com', 'psychology'),
-- (102, 'John', 'Smith', 'johnsmith@yahoo.com', 'couples therapy'),
-- (103, 'Mary', 'Johnson', 'maryjohnson@hotmail.com', 'family therapy'),
-- (104, 'Peter', 'Williams', 'peterwilliams@gmail.com', 'individual therapy'),
-- (105, 'Susan', 'Brown', 'susanbrown@outlook.com', 'substance abuse therapy'),
-- (106, 'David', 'Green', 'davidgreen@aol.com', 'eating disorder therapy'),
-- (107, 'Elizabeth', 'White', 'elizabethwhite@yahoo.com', 'anxiety therapy'),
-- (108, 'Jane', 'Black', 'janeblack@gmail.com', 'depression therapy'),
-- (109, 'Michael', 'Gray', 'michaelgray@outlook.com', 'PTSD therapy'),
-- (110, 'Sarah', 'Cyan', 'sarahcyan@aol.com', 'OCD therapy');
-- (111, 'William', 'Magenta', 'williammagenta@yahoo.com', 'ADHD therapy'),
-- (112, 'Ashley', 'Yellow', 'ashleyyellow@gmail.com', 'autism therapy'),
-- (113, 'Benjamin', 'Orange', 'benjaminorange@outlook.com', 'anger management therapy'),
-- (114, 'Caroline', 'Pink', 'carolinepink@aol.com', 'grief therapy'),
-- (115, 'Charles', 'Purple', 'charlespurple@yahoo.com', 'sleep therapy'),
-- (116, 'Danielle', 'Blue', 'danielleblue@gmail.com', 'marital therapy'),
-- (117, 'Ethan', 'Green', 'ethangreen@outlook.com', 'career counseling'),
-- (118, 'Gabriella', 'White', 'gabriellawhite@aol.com', 'life coaching'),
-- (119, 'Henry', 'Black', 'henryblack@yahoo.com', 'mindfulness therapy'),
-- (120, 'Isabella', 'Gray', 'isabellagray@gmail.com', 'trauma therapy');

INSERT INTO patients (user_id, therapist_id, first_name, last_name, email, dob, gender, contact_number, address, city, state, zip_code) VALUES
('p8CR5WYLOEZqdHekreGAVZVXFLY2', 1, 'Christian', 'Orlando', 'christianorlando@gmail.org', '1992-01-07', 'male', '555-555-5555', '4200 Broadway, 3rd floor', 'New York', 'NY', '10033');
-- (2, 'Ava', 'Smith', 'avasmith@yahoo.com', '2000-02-08', 'female', '666-666-6666', '123 Main Street, Apt. 100', 'Los Angeles', 'CA', '90001'),
-- (4, 'Ben', 'Jones', 'benjones@hotmail.com', '1990-03-09', 'male', '777-777-7777', '456 Elm Street, Apt. 200', 'Chicago', 'IL', '60602'),
-- (3, 'Claire', 'Williams', 'clairewilliams@gmail.com', '1988-04-10', 'female', '888-888-8888', '789 Maple Street, Apt. 300', 'Houston', 'TX', '77002'),
-- (5, 'David', 'Brown', 'davidbrown@outlook.com', '1986-05-11', 'male', '999-999-9999', '1010 Oak Street, Apt. 400', 'Miami', 'FL', '33101'),
-- (6, 'Ethan', 'Green', 'ethangreen@aol.com', '1984-06-12', 'male', '111-111-1111', '1111 Pine Street, Apt. 500', 'New York', 'NY', '10001'),
-- (7, 'Gabriella', 'White', 'gabriellawhite@yahoo.com', '1982-07-13', 'female', '222-222-2222', '2222 Birch Street, Apt. 600', 'San Francisco', 'CA', '94102'),
-- (8, 'Henry', 'Black', 'henryblack@gmail.com', '1980-08-14', 'male', '333-333-3333', '3333 Elm Street, Apt. 700', 'Seattle', 'WA', '98101'),
-- (9, 'Isabella', 'Gray', 'isabellagray@outlook.com', '1978-09-15', 'female', '444-444-4444', '4444 Maple Street, Apt. 800', 'Boston', 'MA', '02101'),
-- (10, 'Jacob', 'Pink', 'jacobpink@aol.com', '1976-10-16', 'male', '555-555-5555', '5555 Oak Street, Apt. 900', 'Denver', 'CO', '80202'),
-- (11, 'Katherine', 'Purple', 'katherinepurple@yahoo.com', '1974-11-17', 'female', '666-666-6666', '6666 Pine Street, Apt. 1000', 'Atlanta', 'GA', '30303'),
-- (1, 'John', 'Smith', 'johnsmith@gmail.com', '1980-02-20', 'male', '123-456-7890', '123 Main Street', 'Los Angeles', 'CA', '90001'),
-- (2, 'Jane', 'Doe', 'janedoe@gmail.com', '1995-03-08', 'female', '987-654-3210', '456 Elm Street', 'Chicago', 'IL', '60601'),
-- (3, 'Peter', 'Parker', 'peterparker@gmail.com', '1990-04-15', 'male', '321-567-8900', '789 Washington Street', 'Miami', 'FL', '33131'),
-- (4, 'Clark', 'Kent', 'clarkkent@gmail.com', '1985-05-22', 'male', '654-321-9870', '1011 Maple Street', 'San Francisco', 'CA', '94101'),
-- (5, 'Bruce', 'Wayne', 'brucewayne@gmail.com', '1970-06-09', 'male', '890-012-3456', '2020 Pennsylvania Avenue', 'Washington', 'DC', '20500'),
-- (6, 'Diana', 'Prince', 'dianaprince@gmail.com', '1988-07-16', 'female', '789-012-3456', '3000 Ocean Drive', 'Miami Beach', 'FL', '33139'),
-- (7, 'Tony', 'Stark', 'tonystark@gmail.com', '1975-08-23', 'male', '654-567-8900', '10880 Malibu Point', 'Malibu', 'CA', '90265'),
-- (8, 'Steve', 'Rogers', 'steverogers@gmail.com', '1918-09-03', 'male', '321-987-6540', '30 Rockefeller Plaza', 'New York', 'NY', '10112'),
-- (9, 'Thor', 'Odinson', 'thorodinson@gmail.com', '1993-10-10', 'male', '987-890-0123', '1 Asgardian Way', 'Asgard','AS', '90210'),
-- (10, 'Wanda', 'Maximoff', 'wandamaximoff@gmail.com', '1998-11-17', 'female', '567-890-1234', '20 Avengers Tower', 'New York', 'NY', '10032'),
-- (11, 'John', 'Doe', 'johndoe@gmail.org', '1980-02-20', 'male', '666-666-6666', '123 Main Street', 'Los Angeles', 'CA', '90001'),
-- (1, 'Jane', 'Doe', 'janedoe@gmail.org', '1990-03-08', 'female', '777-777-7777', '543 Elm Street', 'Chicago', 'IL', '60601'),
-- (2, 'Peter', 'Smith', 'petersmith@gmail.org', '1985-04-15', 'male', '888-888-8888', '987 Maple Avenue', 'Dallas', 'TX', '75201'),
-- (3, 'Sarah', 'Jones', 'sarahjones@gmail.org', '1995-05-22', 'female', '999-999-9999', '654 Oak Street', 'Miami', 'FL', '33101'),
-- (4, 'David', 'Williams', 'davidwilliams@gmail.org', '1988-06-30', 'male', '123-456-7890', '210 Washington Street', 'Seattle', 'WA', '98101'),
-- (5, 'Emily', 'Brown', 'emilybrown@gmail.org', '1997-07-17', 'female', '234-567-8901', '345 Jefferson Street', 'San Francisco', 'CA', '94101'),
-- (11, 'Michael', 'Green', 'michaelgreen@gmail.org', '1990-08-24', 'male', '345-678-9012', '456 Lincoln Street', 'Boston', 'MA', '02101'),
-- (6, 'Jessica', 'White', 'jessicawhite@gmail.org', '1995-09-30', 'female', '456-789-0123', '567 Washington Street', 'New York', 'NY', '10001'),
-- (7, 'Christopher', 'Black', 'christopherblack@gmail.org', '1998-10-18', 'male', '567-890-1234', '678 Jefferson Street', 'Los Angeles', 'CA', '90002'),
-- (8, 'John', 'Doe', 'johndoe@gmail.org', '1980-02-20', 'male', '666-666-6666', '123 Main Street', 'Los Angeles', 'CA', '90001'),
-- (9, 'Jane', 'Doe', 'janedoe@gmail.org', '1990-03-08', 'female', '777-777-7777', '543 Elm Street', 'Chicago', 'IL', '60601'),
-- (10, 'Emily', 'Johnson', 'emilyjohnson@gmail.com', '1990-05-15', 'female', '555-123-4567', '123 Elm Street, Apt. 101', 'New York', 'NY', '10001'),
-- (1, 'Michael', 'Smith', 'michaelsmith@yahoo.com', '1985-09-25', 'male', '555-234-5678', '456 Oak Avenue, Unit 202', 'Los Angeles', 'CA', '90001'),
-- (2, 'Sophia', 'Williams', 'sophiawilliams@gmail.com', '1992-03-10', 'female', '555-345-6789', '789 Maple Street, Suite 303', 'Chicago', 'IL', '60601'),
-- (3, 'Daniel', 'Brown', 'danielbrown@hotmail.com', '1988-11-20', 'male', '555-456-7890', '1010 Pine Road, Apt. 404', 'Houston', 'TX', '77002'),
-- (4, 'Olivia', 'Miller', 'oliviamiller@gmail.com', '1995-07-18', 'female', '555-567-8901', '1111 Birch Lane, Apt. 505', 'Miami', 'FL', '33101'),
-- (5, 'Matthew', 'Davis', 'matthewdavis@yahoo.com', '1982-01-08', 'male', '555-678-9012', '1313 Cedar Court, Suite 606', 'San Francisco', 'CA', '94101'),
-- (6, 'Emma', 'Moore', 'emmamoore@hotmail.com', '1998-04-05', 'female', '555-789-0123', '1515 Oak Avenue, Unit 707', 'Seattle', 'WA', '98101'),
-- (7, 'Andrew', 'Taylor', 'andrewtaylor@gmail.com', '1980-12-01', 'male', '555-890-1234', '1616 Pine Road, Apt. 808', 'Boston', 'MA', '02101'),
-- (8, 'Isabella', 'Johnson', 'isabellajohnson@yahoo.com', '1993-08-12', 'female', '555-901-2345', '1717 Birch Lane, Suite 909', 'Denver', 'CO', '80201'),
-- (9, 'Ethan', 'Williams', 'ethanwilliams@gmail.com', '1987-06-30', 'male', '555-012-3456', '1818 Cedar Court, Apt. 1010', 'Atlanta', 'GA', '30301'),
-- (10, 'Emma', 'Johnson', 'emmajohnson@gmail.com', '1990-05-15', 'female', '555-123-4567', '123 Elm Street, Apt. 101', 'New York', 'NY', '10001'),
-- (11, 'Liam', 'Smith', 'liamsmith@yahoo.com', '1985-09-25', 'male', '555-234-5678', '456 Oak Avenue, Unit 202', 'Los Angeles', 'CA', '90001'),
-- (1, 'Olivia', 'Williams', 'oliviawilliams@gmail.com', '1992-03-10', 'female', '555-345-6789', '789 Maple Street, Suite 303', 'Chicago', 'IL', '60601'),
-- (2, 'Noah', 'Brown', 'noahbrown@hotmail.com', '1988-11-20', 'male', '555-456-7890', '1010 Pine Road, Apt. 404', 'Houston', 'TX', '77002'),
-- (3, 'Ava', 'Miller', 'avamiller@gmail.com', '1995-07-18', 'female', '555-567-8901', '1111 Birch Lane, Apt. 505', 'Miami', 'FL', '33101'),
-- (4, 'Ethan', 'Davis', 'ethandavis@yahoo.com', '1982-01-08', 'male', '555-678-9012', '1313 Cedar Court, Suite 606', 'San Francisco', 'CA', '94101'),
-- (5, 'Sophia', 'Moore', 'sophiamoore@hotmail.com', '1998-04-05', 'female', '555-789-0123', '1515 Oak Avenue, Unit 707', 'Seattle', 'WA', '98101'),
-- (6, 'Jackson', 'Taylor', 'jacksontaylor@gmail.com', '1980-12-01', 'male', '555-890-1234', '1616 Pine Road, Apt. 808', 'Boston', 'MA', '02101'),
-- (7, 'Mia', 'Johnson', 'miajohnson@yahoo.com', '1993-08-12', 'female', '555-901-2345', '1717 Birch Lane, Suite 909', 'Denver', 'CO', '80201'),
-- (8, 'Aiden', 'Williams', 'aidenwilliams@gmail.com', '1987-06-30', 'male', '555-012-3456', '1818 Cedar Court, Apt. 1010', 'Atlanta', 'GA', '30301');

-- INSERT INTO journal_entries (patient_id, entry_date, journal_entry, analysis_score) VALUES 
-- (1, '2023-08-25', 'Hello world', 1);