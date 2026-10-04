import { dirname } from "path";
import express from "express";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"; 

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandname  = "";

app.use(bodyParser.urlencoded({extended: true}));

function streeName(req,res,next){
  console.log(req.body);
    bandname = req.body["street"] + req.body["pet"];
    next();
}

app.use(streeName);

app.get("/",(req,res) => {
  res.sendFile(__dirname + "/public/index.html" );
});


app.post("/submit", (req, res) => {
  res.send(bandname);
});

app.listen(port, () => {  
  console.log(`Listening on port ${port}`);
});
