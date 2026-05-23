import {
  Link,
} from "react-router-dom";

import {
  Helmet,
} from "react-helmet-async";

const ErrorPage = () => {

  return (

    <>

      <Helmet>

        <title>
          Page Not Found | DocAppoint
        </title>

        <meta
          name="description"
          content="The page you are looking for could not be found on DocAppoint."
        />

      </Helmet>

      <div className="min-h-screen bg-[#eef9ff] flex items-center justify-center px-4">

        <div className="text-center max-w-2xl">

          <h1 className="text-7xl md:text-9xl font-bold text-sky-500">
            404
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-6">
            Page Not Found
          </h2>

          <p className="text-gray-600 mt-6 text-base md:text-lg leading-8">
            The page you are looking for does not exist or has been moved.
          </p>

          <Link to="/">

            <button className="btn mt-10 bg-sky-500 hover:bg-sky-600 border-none text-white rounded-xl px-8">
              Back To Home
            </button>

          </Link>

        </div>

      </div>

    </>

  );

};

export default ErrorPage;