const express = require("express");
const app = express();
// const cors = require("cors");  // CORS IS NEEDED WHEN WE INCORPORATE FRONT END STUFF (right now it's just back end)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());  

require("./config/mongoose.config");
require("./routes/routes")(app);

app.listen(8000, () => console.log("Now listening on port 8000"));