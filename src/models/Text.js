const mysql = require('mysql2');
const db = require('../db');

const Text = {
  // 获取所有文本信息
  getAll: (callback) => {
    const query = 'SELECT * FROM text';
    db.query(query, callback);
  },

  // 根据 ID 获取文本信息
  getById: (id, callback) => {
    const query = 'SELECT * FROM text WHERE id = ?';
    db.query(query, [id], callback);
  },

  // 根据网站标题精确查询
  getByTitle: (title, callback) => {
    const query = 'SELECT * FROM text WHERE title = ?';
    db.query(query, [title], callback);
  },

  // 获取所有网站信息的数量
  getCount: (callback) => {
    const query = 'SELECT COUNT(*) AS count FROM text';
    db.query(query, callback);
  }
};

module.exports = Text; 