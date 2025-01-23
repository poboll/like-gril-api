const mysql = require('mysql2');
const db = require('../db');

const About = {
  // 获取所有关于信息
  getAll: (callback) => {
    const query = 'SELECT * FROM about';
    db.query(query, callback);
  },

  // 根据 ID 获取关于信息
  getById: (id, callback) => {
    const query = 'SELECT * FROM about WHERE id = ?';
    db.query(query, [id], callback);
  },

  // 根据标题精确查询
  getByTitle: (title, callback) => {
    const query = 'SELECT * FROM about WHERE title = ?';
    db.query(query, [title], callback);
  },

  // 获取关于信息的数量
  getCount: (callback) => {
    const query = 'SELECT COUNT(*) AS count FROM about';
    db.query(query, callback);
  }
};

module.exports = About;
