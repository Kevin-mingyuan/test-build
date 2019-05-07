const express = require('express');

const app = express();


const list = [
    {
    name: 'a'
}, {
    name: 'b'
}, {
    name: 'v'
}, {
    name: 'c'
}, {
    name: 'b'
}, {
    name: 'y'
}, {
    name: 'u'
}, {
    name: 'j'
}, {
    name: 'h'
}, {
    name: 'p'
}, {
    name: 'o'
},{
    name: 'a'
}, {
    name: 'b'
}, {
    name: 'v'
}, {
    name: 'c'
}, {
    name: 'b'
}, {
    name: 'y'
}, {
    name: 'u'
}, {
    name: 'j'
}, {
    name: 'h'
}, {
    name: 'p'
}, {
    name: 'o'
},{
    name: 'u'
}, {
    name: 'j'
}, {
    name: 'h'
}, {
    name: 'p'
}, {
    name: 'o'
},{
    name: 'u'
}, {
    name: 'j'
}, {
    name: 'h'
}, {
    name: 'p'
}, {
    name: 'o'
}]

app.get('/', (req, res) => {

    let page = req.query.page; //前端返回的页码

    let begin = (page - 1) * 10;  //返回页码 -1 * 10  取十条

    let data = list.slice(begin, 10*page); //整个数组截取 开始下标 ， 结束下标

    console.log(data);

    res.setHeader('Access-Control-Allow-Origin', "*");

    res.send(data);
});

app.listen(3000);