import mongodb from "mongodb";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });
const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  database = client.db(process.env.DB_NAME);
}
function getDb() {
  if (!database) {
    throw new Error("You must connect first!");
  }

  return database;
}

export default {
  connectToDatabase,
  getDb,
};
