const mysql = require('mysql2');
const db = require('../db');

const Leaving = {
  // 获取所有留言
  getAll: (callback) => {
    const query = 'SELECT * FROM leaving';
    db.query(query, callback);
  },

  // 根据 ID 获取留言
  getById: (id, callback) => {
    const query = 'SELECT * FROM leaving WHERE id = ?';
    db.query(query, [id], callback);
  },

  // 根据用户名字模糊查询留言
  getByName: (name, callback) => {
    const query = 'SELECT * FROM leaving WHERE name LIKE ?';
    db.query(query, [`%${name}%`], callback);
  },

  // 获取留言数量
  getCount: (callback) => {
    const query = 'SELECT COUNT(*) AS count FROM leaving';
    db.query(query, callback);
  }
};

module.exports = Leaving; 