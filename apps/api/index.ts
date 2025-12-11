import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;
const DB_TYPE = process.env.DB_TYPE || "mysql";
const MYSQL_HOST = process.env.MYSQL_HOST || "mysql";
const REDIS_HOST = process.env.REDIS_HOST || "redis";
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017/opentsb";

app.get("/health", (_req, res) => {
  res.json({
    status: "OK",
    port: PORT,
    dbType: DB_TYPE,
    mysqlHost: MYSQL_HOST,
    redisHost: REDIS_HOST,
    mongoURL: MONGO_URL,
  });
});

app.get("/", (_req, res) => {
  res.send("OpenTSB API is running!");
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
  console.log(`DB_TYPE = ${DB_TYPE}`);
  console.log(`MySQL Host = ${MYSQL_HOST}`);
  console.log(`Redis Host = ${REDIS_HOST}`);
});

