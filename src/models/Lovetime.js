const mysql = require('mysql2');
const db = require('../db');

const Lovetime = {
  // 获取所有倒数纪念日
  getAll: (callback) => {
    // 使用 SQL 中的 CASE WHEN 来计算 LovePast 字段
    const query = `
      SELECT 
        *,
        CASE 
          WHEN day_type = 0 THEN 
            CEIL(DATEDIFF(FutureLoveday, CURDATE()))  -- 计算未来天数差
          ELSE 
            CEIL(DATEDIFF(CURDATE(), FutureLoveday))  -- 计算过去天数差
        END AS LovePast
      FROM lovetime
    `;

    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching lovetime records:', err);
        return callback(err, null);
      }

      callback(null, results);  // 结果已经包含了计算后的 LovePast 字段
    });
  }
};

module.exports = Lovetime;
