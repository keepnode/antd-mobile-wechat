'use strict';

const Controller = require('egg').Controller;
const path = require('path');

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async detail() {
    await this.ctx.render('home/detail.jsx', { message: { text: '这是一个来自服务器渲染信息！' } });
  }
}

module.exports = HomeController;
