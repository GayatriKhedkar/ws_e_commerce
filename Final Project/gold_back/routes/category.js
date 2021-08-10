const express = require('express')
const router = express.Router();

const {createCategory,getAllCategory,getCategoryById,getCategory,updateCategory,removeCategory} = require("../controllers/category");


router.post("/category/create",createCategory);
router.get("/categories", getAllCategory);
router.param("categoryId", getCategoryById);
router.get("/category/:categoryId", getCategory);
router.put("/category/:categoryId",updateCategory);
router.delete("/category/:categoryId",removeCategory);



module.exports = router;