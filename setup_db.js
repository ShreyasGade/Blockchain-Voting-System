const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL.');

  // Create Database
  connection.query('CREATE DATABASE IF NOT EXISTS aadhar', function(err, result) {
    if (err) throw err;
    console.log('Database "aadhar" created or already exists.');

    connection.changeUser({database: 'aadhar'}, function(err) {
      if (err) throw err;
// Table: registration
const createRegistration = `
  CREATE TABLE IF NOT EXISTS registration (
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email_address VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255),
    confirm_password VARCHAR(255),
    is_admin TINYINT(1) DEFAULT 0
  )`;

      connection.query(createRegistration, function(err) {
        if (err) throw err;
        console.log('Table "registration" ready.');
      });

      // Table: aadhar_info
      const createAadharInfo = `
        CREATE TABLE IF NOT EXISTS aadhar_info (
          Name VARCHAR(255),
          Aadharno VARCHAR(255) PRIMARY KEY,
          Email VARCHAR(255),
          Phoneno VARCHAR(20),
          Gender VARCHAR(10),
          Dob DATE,
          Is_registered VARCHAR(10) DEFAULT 'NO'
        )`;
      connection.query(createAadharInfo, function(err) {
        if (err) throw err;
        console.log('Table "aadhar_info" ready.');

        // Insert dummy data for testing if empty
        connection.query('SELECT COUNT(*) as count FROM aadhar_info', function(err, results) {
            if (err) throw err;
            if (results[0].count === 0) {
                const dummyAadhar = "INSERT INTO aadhar_info (Aadharno, Dob, Email, Is_registered) VALUES ('123456789012', '2000-01-01', 'test@example.com', 'NO')";
                connection.query(dummyAadhar, function(err) {
                    if (err) throw err;
                    console.log('Dummy Aadhar data inserted.');
                });
            }
        });
      });

      // Table: registered_users
      const createRegisteredUsers = `
        CREATE TABLE IF NOT EXISTS registered_users (
          Account_address VARCHAR(255) PRIMARY KEY,
          Is_registered VARCHAR(10) DEFAULT 'No'
        )`;
      connection.query(createRegisteredUsers, function(err) {
        if (err) throw err;
        console.log('Table "registered_users" ready.');
        
        // Finalize
        connection.end();
      });
    });
  });
});
