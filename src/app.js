const express = require('express');
const mongoose = require('mongoose'); // 如果使用MongoDB
// const mysql = require('mysql2'); // 如果使用MySQL

const app = express();
app.use(express.json());

// 数据库连接 (根据你使用的数据库进行调整)
// MongoDB 连接
mongoose.connect('mongodb://localhost:27017/like-gril', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error: ', err));

// API 路由
const routes = require('./routes');
app.use('/api', routes);

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
