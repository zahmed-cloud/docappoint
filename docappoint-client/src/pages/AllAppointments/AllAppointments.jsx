import {
  useEffect,
  useState,
} from "react";

import {
  Helmet,
} from "react-helmet-async";

import DoctorCard from "../../components/DoctorCard/DoctorCard";

const AllAppointments = () => {

  const [doctors, setDoctors] =
    useState([]);

  const [searchText, setSearchText] =
    useState("");

  const [sortOption, setSortOption] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetch(
      "https://doctor-appointment-server-seven.vercel.app/doctors"
    )
      .then((res) => res.json())

      .then((data) => {

        setDoctors(data);

        setLoading(false);

      })

      .catch((error) => {

        console.log(error);

        setLoading(false);

      });

  }, []);

  let filteredDoctors =
    doctors.filter((doctor) =>
      doctor.name
        .toLowerCase()
        .includes(
          searchText.toLowerCase()
        )
    );

  if (sortOption === "fee-low-high") {

    filteredDoctors.sort(
      (a, b) => a.fee - b.fee
    );

  }

  if (sortOption === "fee-high-low") {

    filteredDoctors.sort(
      (a, b) => b.fee - a.fee
    );

  }

  if (sortOption === "rating-high-low") {

    filteredDoctors.sort(
      (a, b) => b.rating - a.rating
    );

  }

  return (

    <>

      <Helmet>

        <title>
          All Appointments | DocAppoint
        </title>

        <meta
          name="description"
          content="Browse all available doctors and book appointments easily with DocAppoint."
        />

      </Helmet>

      <div className="bg-[#f4fbff] py-12 md:py-16 min-h-screen">

        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="text-center mb-10">

            <h2 className="text-3xl md:text-5xl font-bold text-[#3BA5F3]">
              All Appointments
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Find experienced doctors and book your appointment easily.
            </p>

          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">

            <input
              type="text"
              placeholder="Search doctor by name..."
              value={searchText}
              onChange={(e) =>
                setSearchText(
                  e.target.value
                )
              }
              className="w-full md:w-[400px] px-5 py-4 rounded-2xl border border-sky-200 focus:outline-none focus:border-sky-400"
            />

            <button className="btn bg-sky-500 hover:bg-sky-600 border-none text-white rounded-2xl px-8">
              Search
            </button>

            <select
              value={sortOption}
              onChange={(e) =>
                setSortOption(
                  e.target.value
                )
              }
              className="px-5 py-4 rounded-2xl border border-sky-200 focus:outline-none focus:border-sky-400 bg-white"
            >

              <option value="">
                Sort By
              </option>

              <option value="fee-low-high">
                Fee: Low to High
              </option>

              <option value="fee-high-low">
                Fee: High to Low
              </option>

              <option value="rating-high-low">
                Rating: High to Low
              </option>

            </select>

          </div>

          {
            loading ? (

              <div className="flex justify-center items-center py-20">

                <span className="loading loading-spinner loading-lg text-sky-500"></span>

              </div>

            ) : (

              <>

                {
                  filteredDoctors.length === 0 ? (

                    <div className="text-center text-gray-500 text-lg py-20">
                      No doctors found.
                    </div>

                  ) : (

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                      {
                        filteredDoctors.map(
                          (doctor) => (

                            <DoctorCard
                              key={
                                doctor._id
                              }
                              doctor={doctor}
                            />

                          )
                        )
                      }

                    </div>

                  )
                }

              </>

            )
          }

        </div>

      </div>

    </>

  );

};

export default AllAppointments;