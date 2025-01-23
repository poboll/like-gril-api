const mysql = require('mysql2');
const db = require('../db');

const Lovelist = {
  // 获取所有爱情清单
  getAll: (callback) => {
    const query = 'SELECT * FROM lovelist'; // 查询所有记录
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching lovelist records:', err);
        return callback(err, null); // 返回错误
      }
      callback(null, results); // 返回结果
    });
  },

  // 根据 ID 获取爱情清单
  getById: (id, callback) => {
    const query = 'SELECT * FROM lovelist WHERE id = ?'; // 根据 ID 查询
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Error fetching lovelist record:', err);
        return callback(err, null); // 返回错误
      }
      callback(null, results); // 返回结果
    });
  },

  // 创建新的爱情清单
  create: (newLovelist, callback) => {
    const query = 'INSERT INTO lovelist SET ?'; // 插入新记录
    db.query(query, newLovelist, (err, result) => {
      if (err) {
        console.error('Error inserting lovelist record:', err);
        return callback(err, null); // 返回错误
      }
      callback(null, { id: result.insertId, ...newLovelist }); // 返回新记录的 ID 和数据
    });
  },

  // 更新爱情清单
  update: (id, updatedLovelist, callback) => {
    const query = 'UPDATE lovelist SET ? WHERE id = ?'; // 更新记录
    db.query(query, [updatedLovelist, id], (err, result) => {
      if (err) {
        console.error('Error updating lovelist record:', err);
        return callback(err, null); // 返回错误
      }
      callback(null, result.affectedRows); // 返回受影响的行数
    });
  },

  // 删除爱情清单
  delete: (id, callback) => {
    const query = 'DELETE FROM lovelist WHERE id = ?'; // 删除记录
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error('Error deleting lovelist record:', err);
        return callback(err, null); // 返回错误
      }
      callback(null, result.affectedRows); // 返回受影响的行数
    });
  },

  // 根据 eventname 进行模糊查询
  search: (searchInfo, searchType, callback) => {
    let query = 'SELECT * FROM lovelist WHERE 1=1'; // 基础查询
    const params = [];

    // 添加模糊查询条件
    if (searchInfo) {
      query += ' AND eventname LIKE ?'; // 根据 eventname 模糊查询
      params.push(`%${searchInfo}%`);
    }

    // 根据 imgurl 字段判断完成状态
    if (searchType !== undefined) {
      if (searchType === 1) {
        query += ' AND imgurl IS NOT NULL AND imgurl != ""'; // 完成
      } else if (searchType === 0) {
        query += ' AND (imgurl IS NULL OR imgurl = "")'; // 未完成
      }
    }

    db.query(query, params, (err, results) => {
      if (err) {
        console.error('Error searching lovelist records:', err);
        return callback(err, null); // 返回错误
      }
      callback(null, results); // 返回结果
    });
  }
};

module.exports = Lovelist; 