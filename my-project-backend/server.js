const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const jwt = require('jsonwebtoken');


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // เปลี่ยนให้ตรงกับข้อมูลจริง
  password: '', // เปลี่ยนให้ตรงกับข้อมูลจริง
  database: 'myproject' // ชื่อฐานข้อมูลที่ใช้
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

app.post('/api/register', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // เข้ารหัสรหัสผ่าน
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return res.status(500).json({ message: err.message });

    const sql = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
    db.query(sql, [firstName, lastName, email, hash], (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      res.status(201).json({ message: 'User registered successfully!' });
    });
  });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';

  console.log("ตรวจสอบผู้ใช้ด้วย email:", email); // ข้อความสำหรับการดีบัก

  db.query(sql, [email], (err, results) => {
    if (err) {
      console.log("ข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล:", err);
      return res.status(500).json({ message: err.message });
    }

    if (results.length > 0) {
      const user = results[0];
      console.log("พบผู้ใช้:", user); // ข้อความสำหรับการดีบัก

      // เปรียบเทียบรหัสผ่านกับรหัสผ่านที่เข้ารหัสในฐานข้อมูล
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          console.log("ข้อผิดพลาดในการเปรียบเทียบรหัสผ่าน:", err);
          return res.status(500).json({ message: err.message });
        }
        if (isMatch) {
          const token = jwt.sign({ id: user.id, email: user.email }, 'secretkey', { expiresIn: '1h' });
          console.log("เข้าสู่ระบบสำเร็จ สร้าง token"); // ข้อความสำหรับการดีบัก
          return res.status(200).json({ message: 'Login successful!', token });
        } else {
          console.log("รหัสผ่านไม่ถูกต้อง");
          return res.status(401).json({ message: 'Invalid credentials!' });
        }
      });
    } else {
      console.log("ไม่พบผู้ใช้");
      return res.status(401).json({ message: 'User not found!' });
    }
  });
});

// ออกจากระบบ (Logout)
app.post('/api/logout', (req, res) => {
  // ในที่นี้ เราจะไม่ทำการทำลายโทเค็น แต่เราจะให้ความรู้ว่าได้ออกจากระบบแล้ว
  res.status(200).json({ message: 'Logout successful!' });
});


app.get('/api/addresses', (req, res) => {
  const userId = req.query.userId; // รับ userId จาก query parameter
  
  const sql = 'SELECT * FROM addresses WHERE user_id = ?';
  db.query(sql, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json(results); // ส่งผลลัพธ์กลับไปยัง frontend
  });
});





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
