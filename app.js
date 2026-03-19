require('module-alias/register');

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan'); // 记录日志的中间件
const cors = require('cors'); // 处理跨域的中间件
const { connectDB } = require('@/model/index');
const indexRouter = require('@/routes/index');
const app = express();

// 连接数据库
connectDB();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/api/v1', indexRouter);

module.exports = app;
