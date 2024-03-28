const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send(<h1>trang chủ</h1>)
})