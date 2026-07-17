CREATE DATABASE IF NOT EXISTS aadhar;
USE aadhar;

-- Table: registration (Used for User/Admin accounts)
CREATE TABLE IF NOT EXISTS registration (
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email_address VARCHAR(255) PRIMARY KEY,
  password VARCHAR(255),
  confirm_password VARCHAR(255),
  is_admin TINYINT(1) DEFAULT 0
);

-- Table: aadhar_info (Source of truth for Aadhar data)
CREATE TABLE IF NOT EXISTS aadhar_info (
  Name VARCHAR(255),
  Aadharno VARCHAR(255) PRIMARY KEY,
  Email VARCHAR(255),
  Phoneno VARCHAR(20),
  Gender VARCHAR(10),
  Dob DATE,
  Is_registered VARCHAR(10) DEFAULT 'NO'
);

-- Table: registered_users (Tracks blockchain registration)
CREATE TABLE IF NOT EXISTS registered_users (
  Account_address VARCHAR(255) PRIMARY KEY,
  Is_registered VARCHAR(10) DEFAULT 'No'
);


-- DUMMY DATA FOR TESTING
-- 1. Insert a test Aadhar record
INSERT IGNORE INTO aadhar_info (Aadharno, Dob, Email, Is_registered) 
VALUES ('123456789012', '2000-01-01', 'test@example.com', 'NO');

-- 2. Insert a test admin account (email: admin@test.com, password: password)
INSERT IGNORE INTO registration (first_name, last_name, email_address, password, confirm_password, is_admin)
VALUES ('Admin', 'User', 'admin@test.com', 'password', 'password', 1);
