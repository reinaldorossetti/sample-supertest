const supertest = require('supertest')
const { expect } = require("chai");
const { url } = require('../../config')
const allureMocha = require("allure-mocha/runtime");

global.request = supertest(url)
global.expect = expect
global.allureMocha = allureMocha
