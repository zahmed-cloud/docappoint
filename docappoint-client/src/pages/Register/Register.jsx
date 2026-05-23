import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  Helmet,
} from "react-helmet-async";

import {
  useState,
} from "react";

import { toast } from "react-toastify";

import { authClient } from "../../lib/auth-client";

const Register = () => {

  const navigate =
    useNavigate();

  const [error, setError] =
    useState("");

  const handleRegister =
    async (e) => {

      e.preventDefault();

      setError("");

      const form =
        e.target;

      const name =
        form.name.value;

      const email =
        form.email.value;

      const photo =
        form.photo.value;

      const password =
        form.password.value;

      if (
        password.length < 6
      ) {

        setError(
          "Password must be at least 6 characters"
        );

        return;

      }

      if (
        !/[A-Z]/.test(
          password
        )
      ) {

        setError(
          "Password must contain at least 1 uppercase letter"
        );

        return;

      }

      if (
        !/[a-z]/.test(
          password
        )
      ) {

        setError(
          "Password must contain at least 1 lowercase letter"
        );

        return;

      }

      const userInfo = {

        name,
        email,
        photo,
        password,

      };

      try {

        const res =
          await fetch(
            `${import.meta.env.VITE_API_URL}/register`,
            {

              method: "POST",

              headers: {
                "content-type":
                  "application/json",
              },

              body: JSON.stringify(
                userInfo
              ),

            }
          );

        const data =
          await res.json();

        if (
          data.insertedId
        ) {

          toast.success(
            "Registration Successful"
          );

          navigate(
            "/login"
          );

        } else {

          toast.error(
            data.message ||
              "Registration Failed"
          );

        }

      } catch (error) {

        console.log(
          error
        );

        toast.error(
          "Registration Failed"
        );

      }

    };

  const handleGoogleSignup =
    async () => {

      try {

        await authClient.signIn.social({

          provider:
            "google",

          callbackURL:
            window.location.origin + "/",

        });

      } catch (error) {

        console.log(error);

        toast.error(
          "Google Signup Failed"
        );

      }

    };

  return (

    <>

      <Helmet>

        <title>
          Register | DocAppoint
        </title>

        <meta
          name="description"
          content="Create your DocAppoint account to book appointments with trusted doctors."
        />

      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-[#eef9ff] px-4 py-10">

        <div className="w-full max-w-md bg-white border border-blue-100 shadow-xl rounded-3xl p-6 sm:p-8">

          <h2 className="text-3xl sm:text-4xl font-bold text-center text-sky-500 mb-8">
            Register
          </h2>

          <form
            onSubmit={
              handleRegister
            }
            className="space-y-5"
          >

            <div>

              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400 bg-white text-gray-700"
                required
              />

            </div>

            <div>

              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400 bg-white text-gray-700"
                required
              />

            </div>

            <div>

              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Photo URL
              </label>

              <input
                type="text"
                name="photo"
                placeholder="Enter your photo URL"
                className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400 bg-white text-gray-700"
              />

            </div>

            <div>

              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400 bg-white text-gray-700"
                required
              />

            </div>

            {
              error && (

                <p className="text-red-500 text-sm font-medium">
                  {error}
                </p>

              )
            }

            <button className="btn w-full bg-sky-500 hover:bg-sky-600 border-none text-white rounded-xl">
              Register
            </button>

          </form>

          <div className="divider text-gray-400">
            OR
          </div>

          <button
            onClick={
              handleGoogleSignup
            }
            className="btn w-full bg-white hover:bg-gray-100 text-black border border-gray-300 rounded-xl"
          >
            Continue with Google
          </button>

          <p className="text-center mt-6 text-sm text-gray-600">

            Already have an account?

            <Link
              to="/login"
              className="text-sky-500 font-semibold ml-1 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </>

  );

};

export default Register;