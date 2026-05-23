import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  Helmet,
} from "react-helmet-async";

import { toast } from "react-toastify";

import { authClient } from "../../lib/auth-client";

const Login = () => {

  const navigate =
    useNavigate();

  const handleLogin =
    async (e) => {

      e.preventDefault();

      const form =
        e.target;

      const email =
        form.email.value;

      const password =
        form.password.value;

      const userInfo = {
        email,
        password,
      };

      try {

        const res =
          await fetch(
            `${import.meta.env.VITE_API_URL}/login`,
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

        if (data.token) {

          localStorage.setItem(
            "access-token",
            data.token
          );

          localStorage.setItem(
            "logged-user",
            JSON.stringify(
              data.user
            )
          );

          toast.success(
            "Login Successful"
          );

          navigate("/");

        } else {

          toast.error(
            data.message
          );

        }

      } catch (error) {

        console.log(error);

        toast.error(
          "Login Failed"
        );

      }

    };

  const handleGoogleLogin =
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
          "Google Login Failed"
        );

      }

    };

  return (

    <>

      <Helmet>

        <title>
          Login | DocAppoint
        </title>

        <meta
          name="description"
          content="Login to DocAppoint to manage appointments and connect with trusted doctors."
        />

      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-[#eef9ff] px-4 py-10">

        <div className="w-full max-w-md bg-white border border-blue-100 shadow-xl rounded-3xl p-6 sm:p-8">

          <h2 className="text-3xl sm:text-4xl font-bold text-center text-sky-500 mb-8">
            Login
          </h2>

          <form
            onSubmit={
              handleLogin
            }
            className="space-y-5"
          >

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

            <div className="text-right">

              <button
                type="button"
                className="text-sm text-sky-500 hover:underline"
              >
                Forgot Password?
              </button>

            </div>

            <button className="btn w-full bg-sky-500 hover:bg-sky-600 border-none text-white rounded-xl">
              Login
            </button>

          </form>

          <div className="divider text-gray-400">
            OR
          </div>

          <button
            onClick={
              handleGoogleLogin
            }
            className="btn w-full bg-white hover:bg-gray-100 text-black border border-gray-300 rounded-xl"
          >
            Continue with Google
          </button>

          <p className="text-center mt-6 text-sm text-gray-600">

            Don’t have an account?

            <Link
              to="/register"
              className="text-sky-500 font-semibold ml-1 hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </>

  );

};

export default Login;