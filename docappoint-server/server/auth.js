import dotenv from "dotenv";
dotenv.config();

import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const mongoClient = new MongoClient(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pcz5eav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
);

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,

  baseURL: process.env.BETTER_AUTH_URL,

  database: mongodbAdapter(
    mongoClient.db("docappoint")
  ),

  trustedOrigins: [
    "https://docappoint-client-kappa.vercel.app",
    "https://doctor-appointment-client-psi.vercel.app",
    "http://localhost:5173",
  ],

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});
