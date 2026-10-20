import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const port = 3001;
const app = express();

app.use(express.static("public"));

app.get("/",async(req,res)=>{
    try{
        const result = await axios.get("https://v2.jokeapi.dev/joke/Any?type=twopart");
        res.render("index.ejs",{
            setup : result.data.setup,
            delivery : result.data.delivery
        });
    }
    catch(error){
        console.log(error.response.data);
        res.status(500);
    }
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})