const addPage = require('./addPage');
const editPage = require('./editPage');
const main = require('./main');
const userList = require('./userList');
const userPages = require('./userPages');
const wikiPage = require('./wikiPage');
const { Page } = require('../models');

const allPages = Page.findAll();

module.exports = { addPage, editPage, main, userList, userPages, wikiPage };
