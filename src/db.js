const mysql = require('mysql2');

// 创建 MySQL 数据库连接
const db = mysql.createConnection({
  host: '192.168.228.1',
  user: 'root',   // 你的 MySQL 用户名
  password: 'root',   // 你的 MySQL 密码
  database: 'like-gril'  // 你的数据库名
});

// 连接数据库并处理错误
db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err.stack);
    return;
  }
  console.log('MySQL connected as id ' + db.threadId);
});

module.exports = db; 