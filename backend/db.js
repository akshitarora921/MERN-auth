import { MongoClient } from "mongodb";

let client;

export const initializeDbConnection = async () => {
  client = new MongoClient(process.env.MONGO_URL);
};

export const getDbConnection = (dbName) => {
  const db = client.db(dbName);
  return db;
};
