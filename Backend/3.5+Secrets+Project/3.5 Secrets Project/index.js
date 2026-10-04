
import { dirname, join } from "path";
import express from "express";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function checkpwd(req, res, next) {
    const password = req.body.password;

    if (password === "ILoveProgramming") {
        next();
    } else {
        res.status(401).sendFile(
            join(__dirname, "public", "index.html")
        );
    }
}

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "public", "index.html"));
});

app.post("/check", checkpwd, (req, res) => {
    res.sendFile(join(__dirname, "public", "secret.html"));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});