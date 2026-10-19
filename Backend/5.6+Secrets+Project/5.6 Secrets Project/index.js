import express from "express";
import axios from "axios";

const port = 3001;
const app = express();

app.use(express.static("public"));

app.get("/",async(req,res)=>{
    try{
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs",{
            user : result.data.user,
            secret : result.data.secret
        });
    }
    catch(error){
        console.log(error.response.data);
        res.status(500);
    }
});

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.


