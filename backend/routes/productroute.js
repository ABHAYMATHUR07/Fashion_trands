const express = require('express');
// const productcontroller = require('../controllers/products/getproductcontroller');
const getproductcontroller = require('../controllers/products/getproductcontroller');
const router = express.Router();
router.get("/",getproductcontroller);
router.get("/category/:category" , getproductcontroller )
router.get("/name/:name" , getproductcontroller )
router.get("/subcategory/:sub_category" , getproductcontroller )
router.get("/id/:id" , getproductcontroller )
router.get("/rendom" , getproductcontroller )
router.get("/toprated" , getproductcontroller )
router.get("/hightolow" , getproductcontroller )
router.get("/lowtohigh" , getproductcontroller )
module.exports = router;