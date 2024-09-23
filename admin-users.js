// admin-users.js (Route สำหรับการจัดการผู้ใช้บนหน้า Admin)
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('./myproject');  // ไฟล์เชื่อมต่อฐานข้อมูล

// ดึงรายชื่อผู้ใช้ทั้งหมด
router.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).send('Error fetching users');
    }
    res.json(result);
  });
});

// เพิ่มผู้ใช้ใหม่
router.post('/users', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
  
  db.query(query, [firstName, lastName, email, hashedPassword], (err, result) => {
    if (err) {
      return res.status(500).send('Error inserting user');
    }
    res.status(201).send('User added successfully');
  });
});

// ลบผู้ใช้
router.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  const query = 'DELETE FROM users WHERE id = ?';
  
  db.query(query, [userId], (err, result) => {
    if (err) {
      return res.status(500).send('Error deleting user');
    }
    res.send('User deleted successfully');
  });
});

// แก้ไขผู้ใช้
router.put('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const { firstName, lastName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const query = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?';
  
  db.query(query, [firstName, lastName, email, hashedPassword, userId], (err, result) => {
    if (err) {
      return res.status(500).send('Error updating user');
    }
    res.send('User updated successfully');
  });
});

module.exports = router;
