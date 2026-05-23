import dotenv from "dotenv";
dotenv.config();

import { betterAuth } from "better-auth";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,

  baseURL: process.env.BETTER_AUTH_URL,

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
