const express = require('express');
const router = express.Router();

router.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // MongoDB 模型查询
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 这里可以继续添加其他API路由

module.exports = router;
