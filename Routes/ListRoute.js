const { Router } = require("express");
const { PostList, GetList, DeleteList } = require("../controller/ListController");

const ProductsList=Router();

ProductsList.post("/",PostList)

ProductsList.get("/",GetList)

ProductsList.delete("/:listid",DeleteList)

module.exports={ProductsList};