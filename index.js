const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    const currentDateTime = new Date().toISOString();
    res.json({
        "email": "emmy.thatdev@gmail.com",
        "current_datetime": currentDateTime,
        "github_url": "https://github.com/emthatdev/hng-stage-zero-api"
    })
});

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
