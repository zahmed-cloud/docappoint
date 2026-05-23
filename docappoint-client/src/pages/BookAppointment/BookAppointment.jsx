import {
  useContext,
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  Helmet,
} from "react-helmet-async";

import {
  AuthContext,
} from "../../providers/AuthProvider";

import { toast } from "react-toastify";

const BookAppointment = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const { user } =
    useContext(AuthContext);

  const [doctor, setDoctor] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetch(
      `https://doctor-appointment-server-seven.vercel.app/doctors/${id}`
    )
      .then((res) => res.json())

      .then((data) => {

        setDoctor(data);

        setLoading(false);

      })

      .catch((error) => {

        console.log(error);

        setLoading(false);

      });

  }, [id]);

  const handleBookAppointment =
    async (e) => {

      e.preventDefault();

      const form = e.target;

      const patientName =
        form.patientName.value;

      const gender =
        form.gender.value;

      const phone =
        form.phone.value;

      const appointmentDate =
        form.appointmentDate.value;

      const appointmentTime =
        form.appointmentTime.value;

      const appointmentData = {

        userEmail:
          user?.email,

        doctorName:
          doctor?.name,

        patientName,

        gender,

        phone,

        appointmentDate,

        appointmentTime,

        fee:
          doctor?.fee,

      };

      try {

        const res = await fetch(
          "https://doctor-appointment-server-seven.vercel.app/appointments",
          {

            method: "POST",

            headers: {
              "content-type":
                "application/json",
            },

            body: JSON.stringify(
              appointmentData
            ),

          }
        );

        const data =
          await res.json();

        if (
          data.insertedId
        ) {

          toast.success(
            "Appointment booked successfully!"
          );

          navigate(
            "/dashboard/my-bookings"
          );

        }

      } catch (error) {

        console.log(error);

        toast.error(
          "Failed to book appointment"
        );

      }

    };

  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <span className="loading loading-spinner loading-lg text-info"></span>

      </div>

    );

  }

  if (!doctor) {

    return (

      <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-red-500">

        Doctor not found

      </div>

    );

  }

  return (

    <>

      <Helmet>

        <title>
          Book Appointment | DocAppoint
        </title>

        <meta
          name="description"
          content="Book doctor appointments easily and securely with DocAppoint."
        />

      </Helmet>

      <div className="bg-[#f4fbff] min-h-screen py-12">

        <div className="max-w-3xl mx-auto px-4">

          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">

            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3BA5F3] mb-10">
              Book Appointment
            </h2>

            <form
              onSubmit={
                handleBookAppointment
              }
              className="space-y-5"
            >

              <div>

                <label className="block mb-2 font-semibold text-gray-700">
                  Doctor Name
                </label>

                <input
                  type="text"
                  value={
                    doctor?.name
                  }
                  readOnly
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-gray-100"
                />

              </div>

              <div>

                <label className="block mb-2 font-semibold text-gray-700">
                  Patient Name
                </label>

                <input
                  type="text"
                  name="patientName"
                  placeholder="Enter patient name"
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400"
                  required
                />

              </div>

              <div>

                <label className="block mb-2 font-semibold text-gray-700">
                  Gender
                </label>

                <select
                  name="gender"
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400"
                >

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                </select>

              </div>

              <div>

                <label className="block mb-2 font-semibold text-gray-700">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400"
                  required
                />

              </div>

              <div>

                <label className="block mb-2 font-semibold text-gray-700">
                  Appointment Date
                </label>

                <input
                  type="date"
                  name="appointmentDate"
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400"
                  required
                />

              </div>

              <div>

                <label className="block mb-2 font-semibold text-gray-700">
                  Appointment Time
                </label>

                <input
                  type="time"
                  name="appointmentTime"
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400"
                  required
                />

              </div>

              <button className="btn w-full bg-[#3BA5F3] hover:bg-[#2593e8] border-none text-white rounded-xl">
                Confirm Appointment
              </button>

            </form>

          </div>

        </div>

      </div>

    </>

  );

};

export default BookAppointment;