import dotenv from "dotenv";
dotenv.config();

import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pcz5eav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const db = client.db("docappoint");

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,

  baseURL: process.env.BETTER_AUTH_URL,

  trustedOrigins: [
    "https://docappoint-client-kappa.vercel.app",
    "https://doctor-appointment-client-psi.vercel.app",
    "http://localhost:5173",
  ],

  database: mongodbAdapter(db),

  account: {
    skipStateCookieCheck: true,
  },

  onAPIError: {
    errorURL: "https://docappoint-client-kappa.vercel.app",
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});
