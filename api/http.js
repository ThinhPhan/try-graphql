const http = require("http");
const { postgraphile } = require("postgraphile");

http
  .createServer(postgraphile(process.env.DATABASE_URL || "postgres:///"))
  .listen(process.env.PORT || 3000);