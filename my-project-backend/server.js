const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // เปลี่ยนให้ตรงกับข้อมูลจริง
  password: '', // เปลี่ยนให้ตรงกับข้อมูลจริง
  database: 'your_database' // ชื่อฐานข้อมูลที่ใช้
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

// API สำหรับการสมัครสมาชิก
app.post('/api/register', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const sql = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
  db.query(sql, [firstName, lastName, email, password], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json({ message: 'User registered successfully!' });
  });
});

// API สำหรับการล็อกอิน
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM users WHERE email = ?';

// ค้นหาข้อมูลผู้ใช้โดยใช้ email เท่านั้น
db.query(sql, [email], (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    
    // ตรวจสอบว่าพบผู้ใช้หรือไม่
    if (results.length > 0) {
      const user = results[0];
      
      // เปรียบเทียบรหัสผ่านที่เข้ารหัสกับรหัสผ่านที่ผู้ใช้กรอกเข้ามา
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) return res.status(500).json({ message: err.message });
        
        if (isMatch) {
          res.status(200).json({ message: 'Login successful!' });
        } else {
          res.status(401).json({ message: 'Invalid credentials!' });
        }
      });
    } else {
      res.status(401).json({ message: 'User not found!' });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
