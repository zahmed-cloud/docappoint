import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout.jsx";
import DashboardLayout from "../layouts/DashboardLayout.jsx";

import Home from "../pages/Home";
import AllAppointments from "../pages/AllAppointments/AllAppointments.jsx";
import DoctorDetails from "../pages/DoctorDetails/DoctorDetails.jsx";
import BookAppointment from "../pages/BookAppointment/BookAppointment.jsx";

import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";

import MyBookings from "../pages/Dashboard/MyBookings/MyBookings.jsx";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile.jsx";

import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";

import PrivateRoute from "../components/privateRoute/privateRoute.jsx";

const router = createBrowserRouter([

  {
    path: "/",

    element: <MainLayout />,

    errorElement: <ErrorPage />,

    children: [

      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/appointments",

        element: (
          <PrivateRoute>
            <AllAppointments />
          </PrivateRoute>
        ),
      },

      {
        path: "/doctor/:id",

        element: (
          <PrivateRoute>
            <DoctorDetails />
          </PrivateRoute>
        ),
      },

      {
        path: "/book-appointment/:id",

        element: (
          <PrivateRoute>
            <BookAppointment />
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },

    ],
  },

  {
    path: "/dashboard",

    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),

    children: [

      {
        path: "my-bookings",

        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },

      {
        path: "my-profile",

        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },

    ],
  },

]);

export default router;