# My Express API App

一个基于 Express.js 和 MongoDB 的 RESTful API 应用，提供用户管理功能。

## 功能特性

- ✅ 用户 CRUD 操作 (创建、读取、更新、删除)
- ✅ MongoDB 数据库集成
- ✅ RESTful API 设计
- ✅ 路径别名支持 (@)
- ✅ 错误处理
- ✅ CORS 支持
- ✅ 完整的测试套件

## API 端点

### 用户管理

| 方法   | 端点                | 描述         |
| ------ | ------------------- | ------------ |
| GET    | `/api/v1/users`     | 获取所有用户 |
| GET    | `/api/v1/users/:id` | 获取指定用户 |
| POST   | `/api/v1/users`     | 创建新用户   |
| PUT    | `/api/v1/users/:id` | 更新用户信息 |
| DELETE | `/api/v1/users/:id` | 删除用户     |

### 请求示例

#### 创建用户

```bash
POST /api/v1/users
Content-Type: application/json

{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "password": "password123"
}
```

#### 获取用户

```bash
GET /api/v1/users
```

## 安装和运行

1. 安装依赖：

```bash
npm install
```

2. 启动 MongoDB 服务

3. 启动应用：

```bash
npm start
```

4. 运行测试：

```bash
npm test
```

## 环境变量

- `MONGODB_URI`: MongoDB 连接字符串 (默认: mongodb://localhost:27017/next)
- `PORT`: 服务器端口 (默认: 3000)

## 项目结构

```
├── bin/
│   └── www                 # 服务器启动脚本
├── controller/
│   ├── index.js           # 控制器索引
│   └── usersController.js # 用户控制器
├── model/
│   ├── index.js           # 模型索引
│   └── userModel.js       # 用户模型
├── routes/
│   ├── index.js           # 路由索引
│   └── users.js           # 用户路由
├── tests/
│   └── users.test.js      # 用户API测试
├── public/                # 静态文件
├── app.js                 # Express应用配置
├── package.json           # 项目配置
└── README.md              # 项目文档
```

## 技术栈

- **Node.js** - JavaScript 运行时
- **Express.js** - Web 框架
- **MongoDB** - NoSQL 数据库
- **Mongoose** - MongoDB 对象建模
- **Jest** - 测试框架
- **Supertest** - HTTP 测试库
