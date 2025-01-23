const mysql = require('mysql2');
const db = require('../db');

const Article = {
  // 获取所有文章
  getAll: (callback) => {
    const query = 'SELECT * FROM article';
    db.query(query, callback);
  },

  // 根据 ID 获取文章
  getById: (id, callback) => {
    const query = 'SELECT * FROM article WHERE id = ?';
    db.query(query, [id], callback);
  },

  // 根据时间范围获取文章
  getByDateRange: (startDate, endDate, callback) => {
    const query = 'SELECT * FROM article WHERE articletime BETWEEN ? AND ?';
    db.query(query, [startDate, endDate], callback);
  },

  // 获取最新的 N 篇文章
  getLatest: (limit, callback) => {
    const query = 'SELECT * FROM article ORDER BY articletime DESC LIMIT ?';
    db.query(query, [limit], callback);
  }
};

module.exports = Article;
