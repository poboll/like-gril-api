const mysql = require('mysql2');
const db = require('../db');

const LoveImg = {
  // 获取所有爱情图片
  getAll: (callback) => {
    const query = 'SELECT * FROM loveImg';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching loveimg records:', err);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // 根据 ID 获取爱情图片
  getById: (id, callback) => {
    const query = 'SELECT * FROM loveImg WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error fetching loveimg record:', err);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // 根据日期范围获取爱情图片
  getByDateRange: (startDate, endDate, callback) => {
    const query = 'SELECT * FROM loveImg WHERE imgDatd BETWEEN ? AND ?';
    db.query(query, [startDate, endDate], callback);
  },

  // 创建新的爱情图片
  create: (newLoveImg, callback) => {
    const query = 'INSERT INTO loveImg SET ?';
    db.query(query, newLoveImg, (err, result) => {
      if (err) {
        console.error('Error inserting loveimg record:', err);
        return callback(err, null);
      }
      callback(null, { id: result.insertId, ...newLoveImg });
    });
  },

  // 更新爱情图片
  update: (id, updatedLoveImg, callback) => {
    const query = 'UPDATE loveImg SET ? WHERE id = ?';
    db.query(query, [updatedLoveImg, id], (err, result) => {
      if (err) {
        console.error('Error updating loveimg record:', err);
        return callback(err, null);
      }
      callback(null, result.affectedRows);
    });
  },

  // 删除爱情图片
  delete: (id, callback) => {
    const query = 'DELETE FROM loveImg WHERE id = ?';
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error('Error deleting loveimg record:', err);
        return callback(err, null);
      }
      callback(null, result.affectedRows);
    });
  }
};

module.exports = LoveImg; 