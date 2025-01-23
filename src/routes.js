const express = require('express');
const router = express.Router();
const About = require('./models/About');
const Article = require('./models/Article');
const DiySet = require('./models/DiySet');
const Leaving = require('./models/Leaving');
const LoveImg = require('./models/LoveImg');
const Lovelist = require('./models/Lovelist');
const Text = require('./models/Text');
const Lovetime = require('./models/Lovetime');
const LovePhoto = require('./models/LovePhoto');

// ------------------- 默认路由 -------------------

// 默认路由，展示 API 目录信息
router.get('/', (req, res) => {
  res.json({
    message: "这里是api目录，小可爱",
    apiLinks: {
      about: "/api/about",
      articles: "/api/articles",
      diysets: "/api/diysets",
      leavings: "/api/leavings",
      loveimgs: "/api/loveimgs",
      lovelists: "/api/lovelists",
      lovephotos: "/api/lovephotos",
      lovetimes: "/api/lovetimes",
      texts: "/api/texts"
    }
  });
});

// ------------------- About 路由 -------------------

// 获取所有关于信息
router.get('/about', (req, res) => {
  About.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database query failed', error: err });
    }
    res.json(results);
  });
});

// 根据 ID 获取关于信息
router.get('/about/:id', (req, res) => {
  const id = req.params.id;
  About.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database query failed', error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'About not found' });
    }
    res.json(result[0]);
  });
});

// 创建新的关于信息
router.post('/about', (req, res) => {
  const newAbout = req.body;
  const query = 'INSERT INTO about SET ?';
  db.query(query, newAbout, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database insert failed', error: err });
    }
    res.status(201).json({ id: result.insertId, ...newAbout });
  });
});

// 更新关于信息
router.put('/about/:id', (req, res) => {
  const id = req.params.id;
  const updatedAbout = req.body;
  const query = 'UPDATE about SET ? WHERE id = ?';
  db.query(query, [updatedAbout, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database update failed', error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'About not found' });
    }
    res.json({ message: 'About updated successfully' });
  });
});

// 删除关于信息
router.delete('/about/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM about WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database delete failed', error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'About not found' });
    }
    res.json({ message: 'About deleted successfully' });
  });
});

// ------------------- Article 路由 -------------------

// 获取所有文章
router.get('/articles', (req, res) => {
  Article.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database query failed', error: err });
    }
    res.json(results);
  });
});

// 根据 ID 获取文章
router.get('/articles/:id', (req, res) => {
  const id = req.params.id;
  Article.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database query failed', error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(result[0]);
  });
});

// 创建新的文章
router.post('/articles', (req, res) => {
  const newArticle = req.body;
  const query = 'INSERT INTO article SET ?';
  db.query(query, newArticle, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database insert failed', error: err });
    }
    res.status(201).json({ id: result.insertId, ...newArticle });
  });
});

// 更新文章
router.put('/articles/:id', (req, res) => {
  const id = req.params.id;
  const updatedArticle = req.body;
  const query = 'UPDATE article SET ? WHERE id = ?';
  db.query(query, [updatedArticle, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database update failed', error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ message: 'Article updated successfully' });
  });
});

// 删除文章
router.delete('/articles/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM article WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database delete failed', error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ message: 'Article deleted successfully' });
  });
});

// ------------------- DiySet 路由 -------------------

// 获取所有 DIY 设置
router.get('/diysets', (req, res) => {
  DiySet.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database query failed', error: err });
    }
    res.json(results);
  });
});

// 根据 ID 获取 DIY 设置
router.get('/diysets/:id', (req, res) => {
  const id = req.params.id;
  DiySet.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database query failed', error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'DiySet not found' });
    }
    res.json(result[0]);
  });
});

// 创建新的 DIY 设置
router.post('/diysets', (req, res) => {
  const newDiySet = req.body;
  const query = 'INSERT INTO diySet SET ?';
  db.query(query, newDiySet, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database insert failed', error: err });
    }
    res.status(201).json({ id: result.insertId, ...newDiySet });
  });
});

// 更新 DIY 设置
router.put('/diysets/:id', (req, res) => {
  const id = req.params.id;
  const updatedDiySet = req.body;
  const query = 'UPDATE diySet SET ? WHERE id = ?';
  db.query(query, [updatedDiySet, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database update failed', error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'DiySet not found' });
    }
    res.json({ message: 'DiySet updated successfully' });
  });
});

// 删除 DIY 设置
router.delete('/diysets/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM diySet WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database delete failed', error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'DiySet not found' });
    }
    res.json({ message: 'DiySet deleted successfully' });
  });
});

// ------------------- Leaving 路由 -------------------

// 获取所有留言
router.get('/leavings', (req, res) => {
  Leaving.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database query failed', error: err });
    }
    res.json(results);
  });
});

// 根据 ID 获取留言
router.get('/leavings/:id', (req, res) => {
  const id = req.params.id;
  Leaving.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database query failed', error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Leaving not found' });
    }
    res.json(result[0]);
  });
});

// 创建新的留言
router.post('/leavings', (req, res) => {
  const newLeaving = req.body;
  const query = 'INSERT INTO leaving SET ?';
  db.query(query, newLeaving, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database insert failed', error: err });
    }
    res.status(201).json({ id: result.insertId, ...newLeaving });
  });
});

// 更新留言
router.put('/leavings/:id', (req, res) => {
  const id = req.params.id;
  const updatedLeaving = req.body;
  const query = 'UPDATE leaving SET ? WHERE id = ?';
  db.query(query, [updatedLeaving, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database update failed', error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Leaving not found' });
    }
    res.json({ message: 'Leaving updated successfully' });
  });
});

// 删除留言
router.delete('/leavings/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM leaving WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database delete failed', error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Leaving not found' });
    }
    res.json({ message: 'Leaving deleted successfully' });
  });
});

// ------------------- LoveImg 路由 -------------------

// 获取所有爱情图片
router.get('/loveimgs', (req, res) => {
  LoveImg.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database query failed', error: err });
    }
    res.json(results);
  });
});

// 根据 loveimg 的 id 获取绑定的照片
router.get('/loveimgs/:id', (req, res) => {
  const id = req.params.id;
  LoveImg.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database query failed', error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'LoveImg not found' });
    }
    res.json(result[0]);
  });
});

// 创建新的爱情图片
router.post('/loveimgs', (req, res) => {
  const newLoveImg = req.body;
  LoveImg.create(newLoveImg, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database insert failed', error: err });
    }
    res.status(201).json(result);
  });
});

// 更新爱情图片
router.put('/loveimgs/:id', (req, res) => {
  const id = req.params.id;
  const updatedLoveImg = req.body;
  LoveImg.update(id, updatedLoveImg, (err, affectedRows) => {
    if (err) {
      return res.status(500).json({ message: 'Database update failed', error: err });
    }
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'LoveImg not found' });
    }
    res.json({ message: 'LoveImg updated successfully' });
  });
});

// 删除爱情图片
router.delete('/loveimgs/:id', (req, res) => {
  const id = req.params.id;
  LoveImg.delete(id, (err, affectedRows) => {
    if (err) {
      return res.status(500).json({ message: 'Database delete failed', error: err });
    }
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'LoveImg not found' });
    }
    res.json({ message: 'LoveImg deleted successfully' });
  });
});

// ------------------- Lovelist 路由 -------------------

// 获取所有爱情清单
router.get('/lovelists', (req, res) => {
  Lovelist.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database query failed', error: err });
    }
    res.json(results); // 返回所有爱情清单
  });
});

// 根据 ID 获取爱情清单
router.get('/lovelists/:id', (req, res) => {
  const id = req.params.id;
  Lovelist.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database query failed', error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Lovelist not found' });
    }
    res.json(result[0]); // 返回指定 ID 的爱情清单
  });
});

// 创建新的爱情清单
router.post('/lovelists', (req, res) => {
  const newLovelist = req.body;
  Lovelist.create(newLovelist, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database insert failed', error: err });
    }
    res.status(201).json(result); // 返回新创建的爱情清单
  });
});

// 更新爱情清单
router.put('/lovelists/:id', (req, res) => {
  const id = req.params.id;
  const updatedLovelist = req.body;
  Lovelist.update(id, updatedLovelist, (err, affectedRows) => {
    if (err) {
      return res.status(500).json({ message: 'Database update failed', error: err });
    }
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Lovelist not found' });
    }
    res.json({ message: 'Lovelist updated successfully' }); // 返回更新成功的消息
  });
});

// 删除爱情清单
router.delete('/lovelists/:id', (req, res) => {
  const id = req.params.id;
  Lovelist.delete(id, (err, affectedRows) => {
    if (err) {
      return res.status(500).json({ message: 'Database delete failed', error: err });
    }
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Lovelist not found' });
    }
    res.json({ message: 'Lovelist deleted successfully' }); // 返回删除成功的消息
  });
});

// ------------------- Lovelist 搜索路由 -------------------

// 根据 eventname 和 imgurl 字段进行模糊查询
router.post('/lovelists/search', (req, res) => {
  const { search_info, search_Type } = req.body; // 从请求体中获取参数
  Lovelist.search(search_info, search_Type, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database search failed', error: err });
    }
    res.json(results); // 返回查询结果
  });
});

// ------------------- Text 路由 -------------------

// 获取所有文本信息
router.get('/texts', (req, res) => {
  Text.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database query failed', error: err });
    }
    res.json(results);
  });
});

// 根据 ID 获取文本信息
router.get('/texts/:id', (req, res) => {
  const id = req.params.id;
  Text.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database query failed', error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Text not found' });
    }
    res.json(result[0]);
  });
});

// 创建新的文本信息
router.post('/texts', (req, res) => {
  const newText = req.body;
  const query = 'INSERT INTO text SET ?';
  db.query(query, newText, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database insert failed', error: err });
    }
    res.status(201).json({ id: result.insertId, ...newText });
  });
});

// 更新文本信息
router.put('/texts/:id', (req, res) => {
  const id = req.params.id;
  const updatedText = req.body;
  const query = 'UPDATE text SET ? WHERE id = ?';
  db.query(query, [updatedText, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database update failed', error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Text not found' });
    }
    res.json({ message: 'Text updated successfully' });
  });
});

// 删除文本信息
router.delete('/texts/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM text WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database delete failed', error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Text not found' });
    }
    res.json({ message: 'Text deleted successfully' });
  });
});

// ------------------- Lovetime 路由 -------------------

// 获取所有倒数纪念日
router.get('/lovetime', (req, res) => {
  Lovetime.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database query failed', error: err });
    }
    res.json(results);
  });
});

// ------------------- LovePhoto 路由 -------------------

// 创建新的照片
router.post('/lovephoto', (req, res) => {
  const newPhoto = req.body;
  LovePhoto.create(newPhoto, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database insert failed', error: err });
    }
    res.status(201).json(result);
  });
});

// 更新照片
router.put('/lovephoto/:id', (req, res) => {
  const id = req.params.id;
  const updatedPhoto = req.body;
  LovePhoto.update(id, updatedPhoto, (err, affectedRows) => {
    if (err) {
      return res.status(500).json({ message: 'Database update failed', error: err });
    }
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'LovePhoto not found' });
    }
    res.json({ message: 'LovePhoto updated successfully' });
  });
});

// 删除照片
router.delete('/lovephoto/:id', (req, res) => {
  const id = req.params.id;
  LovePhoto.delete(id, (err, affectedRows) => {
    if (err) {
      return res.status(500).json({ message: 'Database delete failed', error: err });
    }
    if (affectedRows === 0) {
      return res.status(404).json({ message: 'LovePhoto not found' });
    }
    res.json({ message: 'LovePhoto deleted successfully' });
  });
});

// 导出路由
module.exports = router;
