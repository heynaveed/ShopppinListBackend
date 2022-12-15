const express = require ("express");
const cors = require("cors");
const { Connection } = require("./config/db");
const { ProductsList } = require("./Routes/ListRoute");
const { Bookmark } = require("./Routes/BookmarkRoute");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT=process.env.PORT || 8500

app.use("/productlist",ProductsList)

app.use("/bookmark",Bookmark)

app.listen(PORT,async()=>{
    try{
            await Connection;
            console.log("Connection to DB successfull");
    }
    catch(err){
        console.log("error in connecting in db");
        console.log(err)
    }
    console.log(`Listening to Port ${PORT}`)
})
