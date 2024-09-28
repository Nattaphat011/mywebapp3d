const express = require('express');
const router = express.Router();
const db = require('../myproject'); // assuming db.js handles MySQL connection

router.post('/add-address', (req, res) => {
    const { user_id, address, district, subdistrict, city, province, postal_code, phone } = req.body;

    const query = `
      INSERT INTO addresses (user_id, address, district, subdistrict, city, province, postal_code, phone) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [user_id, address, district, subdistrict, city, province, postal_code, phone], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json({ message: 'Address added successfully' });
    });
});

module.exports = router;