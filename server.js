const express = require('express');
const cors = require('cors');

const app = express();
const db = require('./db.js');

const user = require("./routes/user");
const role = require("./routes/role");

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/user", user);
app.use("/role", role);

db.sync(() => console.log("Banco de dados rodando..."));
app.listen(process.env.PORT, () => {
    console.log("Aplicação rodando")
});