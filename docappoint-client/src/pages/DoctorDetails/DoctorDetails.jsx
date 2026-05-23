import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  Helmet,
} from "react-helmet-async";

import { toast } from "react-toastify";

const DoctorDetails = () => {

  const { id } =
    useParams();

  const [doctor, setDoctor] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [reviews, setReviews] =
    useState([]);

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

  const handleReview =
    (e) => {

      e.preventDefault();

      const form = e.target;

      const reviewer =
        form.reviewer.value;

      const comment =
        form.comment.value;

      const rating =
        form.rating.value;

      const newReview = {

        reviewer,

        comment,

        rating,

      };

      setReviews([
        newReview,
        ...reviews,
      ]);

      toast.success(
        "Review added successfully!"
      );

      form.reset();

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
          Doctor Details | DocAppoint
        </title>

        <meta
          name="description"
          content="View doctor details and book appointments easily with DocAppoint."
        />

      </Helmet>

      <div className="bg-[#f4fbff] dark:bg-[#0f172a] py-12 md:py-20 min-h-screen duration-300">

        <div className="max-w-6xl mx-auto px-4 md:px-8">

          <div className="bg-white dark:bg-[#1e293b] rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 md:p-10 duration-300">

            <div>

              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full rounded-3xl object-cover"
              />

            </div>

            <div className="flex flex-col justify-center">

              <div className="flex items-center gap-3 mb-4">

                <span className="bg-[#e8f5ff] text-[#3BA5F3] px-4 py-1 rounded-full text-sm font-semibold">
                  ⭐ {doctor.rating}
                </span>

                <span className="bg-[#e8f5ff] text-[#3BA5F3] px-4 py-1 rounded-full text-sm font-semibold">
                  {doctor.specialty}
                </span>

              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-5">
                {doctor.name}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 leading-8 mb-6 text-base md:text-lg">
                Experienced specialist dedicated to providing trusted healthcare support and quality treatment for patients.
              </p>

              <div className="space-y-3 text-gray-700 dark:text-gray-300 text-base md:text-lg">

                <p>
                  <span className="font-bold">
                    Experience:
                  </span>{" "}
                  {doctor.experience}
                </p>

                <p>
                  <span className="font-bold">
                    Hospital:
                  </span>{" "}
                  {doctor.hospital}
                </p>

                <p>
                  <span className="font-bold">
                    Location:
                  </span>{" "}
                  {doctor.location}
                </p>

                <p>
                  <span className="font-bold">
                    Consultation Fee:
                  </span>{" "}
                  ৳{doctor.fee}
                </p>

              </div>

              <Link
                to={`/book-appointment/${doctor.id}`}
              >

                <button className="btn mt-8 bg-[#3BA5F3] hover:bg-[#2593e8] border-none text-white w-full sm:w-fit px-10 rounded-xl">
                  Book Appointment
                </button>

              </Link>

            </div>

          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">

            <div className="bg-white dark:bg-[#1e293b] rounded-3xl shadow-lg p-6 md:p-8">

              <h2 className="text-3xl font-bold text-sky-500 mb-8">
                Add Review
              </h2>

              <form
                onSubmit={
                  handleReview
                }
                className="space-y-5"
              >

                <input
                  type="text"
                  name="reviewer"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400"
                  required
                />

                <select
                  name="rating"
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400"
                >

                  <option value="5">
                    ⭐⭐⭐⭐⭐
                  </option>

                  <option value="4">
                    ⭐⭐⭐⭐
                  </option>

                  <option value="3">
                    ⭐⭐⭐
                  </option>

                </select>

                <textarea
                  name="comment"
                  rows="4"
                  placeholder="Write your review..."
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400"
                  required
                ></textarea>

                <button className="btn bg-sky-500 hover:bg-sky-600 border-none text-white rounded-xl w-full">
                  Submit Review
                </button>

              </form>

            </div>

            <div className="bg-white dark:bg-[#1e293b] rounded-3xl shadow-lg p-6 md:p-8">

              <h2 className="text-3xl font-bold text-sky-500 mb-8">
                Patient Reviews
              </h2>

              {
                reviews.length === 0 ? (

                  <p className="text-gray-500 dark:text-gray-300">
                    No reviews added yet.
                  </p>

                ) : (

                  <div className="space-y-5">

                    {
                      reviews.map(
                        (
                          review,
                          index
                        ) => (

                          <div
                            key={index}
                            className="border border-sky-100 rounded-2xl p-5"
                          >

                            <div className="flex items-center justify-between mb-2">

                              <h4 className="font-bold text-lg dark:text-white">
                                {
                                  review.reviewer
                                }
                              </h4>

                              <span className="text-yellow-500">
                                {
                                  "⭐".repeat(
                                    review.rating
                                  )
                                }
                              </span>

                            </div>

                            <p className="text-gray-600 dark:text-gray-300 leading-7">
                              {
                                review.comment
                              }
                            </p>

                          </div>

                        )
                      )
                    }

                  </div>

                )
              }

            </div>

          </div>

        </div>

      </div>

    </>

  );

};

export default DoctorDetails;