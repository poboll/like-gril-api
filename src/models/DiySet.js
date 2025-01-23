const mysql = require('mysql2');
const db = require('../db');

const DiySet = {
  // 获取所有 DIY 设置
  getAll: (callback) => {
    const query = 'SELECT * FROM diySet';
    db.query(query, callback);
  },

  // 根据 ID 获取 DIY 设置
  getById: (id, callback) => {
    const query = 'SELECT * FROM diySet WHERE id = ?';
    db.query(query, [id], callback);
  },

  // 根据 Pjax 开关获取 DIY 设置
  getByPjax: (pjaxStatus, callback) => {
    const query = 'SELECT * FROM diySet WHERE Pjaxkg = ?';
    db.query(query, [pjaxStatus], callback);
  }
};

module.exports = DiySet;
