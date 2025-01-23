const mysql = require('mysql2');
const db = require('../db');

const LovePhoto = {
  // 获取所有与指定 loveimg 绑定的照片
  getByLoveImgId: (loveImgId, callback) => {
    const query = 'SELECT * FROM lovephoto WHERE photoId = ?';
    db.query(query, [loveImgId], (err, results) => {
      if (err) {
        console.error('Error fetching lovephoto records:', err);
        return callback(err, null);
      }
      callback(null, results);
    });
  }
};

module.exports = LovePhoto; 