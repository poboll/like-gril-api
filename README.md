# Love-Gril-API 文档

## 1. 默认路由

- **URL**: `/api`
- **方法**: `GET`
- **描述**: 展示 API 目录信息。

## 2. Lovelist 路由

### 获取所有爱情清单

- **URL**: `/api/lovelists`
- **方法**: `GET`
- **描述**: 获取所有爱情清单。

### 根据 ID 获取爱情清单

- **URL**: `/api/lovelists/:id`
- **方法**: `GET`
- **描述**: 根据 ID 获取指定的爱情清单。

### 创建新的爱情清单

- **URL**: `/api/lovelists`
- **方法**: `POST`
- **请求体**: 
  ```json
  {
    "eventname": "事件名称",
    "imgurl": "图片链接"
  }
  ```
- **描述**: 创建新的爱情清单。

### 更新爱情清单

- **URL**: `/api/lovelists/:id`
- **方法**: `PUT`
- **请求体**: 
  ```json
  {
    "eventname": "更新后的事件名称",
    "imgurl": "更新后的图片链接"
  }
  ```
- **描述**: 更新指定 ID 的爱情清单。

### 删除爱情清单

- **URL**: `/api/lovelists/:id`
- **方法**: `DELETE`
- **描述**: 删除指定 ID 的爱情清单。

### 模糊查询爱情清单

- **URL**: `/api/lovelists/search`
- **方法**: `POST`
- **请求体**: 
  ```json
  {
    "search_info": "模糊查询内容",
    "search_Type": 1  // 1 表示完成，0 表示未完成
  }
  ```
- **描述**: 根据 `eventname` 进行模糊查询，并根据 `imgurl` 字段判断完成状态。

## 404 错误处理

如果请求的资源不存在，返回 404 错误。

- **响应**: 
  ```json
  {
    "message": "Resource not found"
  }
  ```
