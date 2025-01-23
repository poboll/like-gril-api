const express = require('express');
const mysql = require('mysql2');  // 使用 mysql2 连接 MySQL

const app = express();
app.use(express.json());

// MySQL 数据库连接
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',   // 你的 MySQL 用户名
  password: 'root',   // 你的 MySQL 密码
  database: 'like-gril'  // 你的数据库名
});

db.connect((err) => {
  if (err) {
    console.log('MySQL connection error:', err.stack);
    return;
  }
  console.log('MySQL connected as id ' + db.threadId);
});

// API 路由
const routes = require('./routes');
app.use('/api', routes);

// 处理 404 错误
app.use((req, res) => {
  res.status(404).json({ message: 'Resource not found' });
});

// 启动服务器
const PORT = 5201;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
