import {
  createContext,
  useEffect,
  useState,
} from "react";

import { authClient } from "../lib/auth-client";

export const AuthContext =
  createContext(null);

const AuthProvider = ({
  children,
}) => {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const storedUser =
      localStorage.getItem("logged-user");

    const storedToken =
      localStorage.getItem("access-token");

    if (storedUser && storedToken) {

      setUser(JSON.parse(storedUser));

      setLoading(false);

      return;

    }

    // No localStorage session — check for a better-auth session cookie
    // (set after Google OAuth redirect back to the client)
    authClient
      .getSession()
      .then(async ({ data: session }) => {

        if (session?.user) {

          try {

            const res = await fetch(
              `${import.meta.env.VITE_API_URL}/jwt`,
              {
                method: "POST",

                headers: {
                  "content-type": "application/json",
                },

                body: JSON.stringify({
                  email: session.user.email,
                }),
              }
            );

            const { token } = await res.json();

            if (token) {

              localStorage.setItem(
                "access-token",
                token
              );

              localStorage.setItem(
                "logged-user",
                JSON.stringify(session.user)
              );

              setUser(session.user);

            }

          } catch (err) {

            console.error(
              "Failed to sync Google session",
              err
            );

          }

        }

        setLoading(false);

      })
      .catch(() => setLoading(false));

  }, []);

  const loginUser = (userData) => {

    setUser(userData);

    localStorage.setItem(
      "logged-user",
      JSON.stringify(userData)
    );

  };

  const logoutUser = () => {

    localStorage.removeItem("logged-user");

    localStorage.removeItem("access-token");

    setUser(null);

    authClient.signOut().catch(() => {});

  };

  const authInfo = {
    user,
    setUser,
    loginUser,
    logoutUser,
    loading,
  };

  return (

    <AuthContext.Provider value={authInfo}>

      {children}

    </AuthContext.Provider>

  );

};

export default AuthProvider;
