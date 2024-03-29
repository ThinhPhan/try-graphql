const express = require("express");
const { postgraphile } = require("postgraphile");

const app = express();

app.use(postgraphile(process.env.DATABASE_URL || "postgres:///"));

app.listen(process.env.PORT || 3000);
