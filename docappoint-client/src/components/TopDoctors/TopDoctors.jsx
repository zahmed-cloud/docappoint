import {
  useEffect,
  useState,
} from "react";

import DoctorCard from "../DoctorCard/DoctorCard";

const TopDoctors = () => {

  const [doctors, setDoctors] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetch(
      "https://doctor-appointment-server-seven.vercel.app/doctors"
    )
      .then((res) => res.json())
      .then((data) => {

        const topRatedDoctors =
          data
            .sort(
              (a, b) =>
                b.rating - a.rating
            )
            .slice(0, 3);

        setDoctors(
          topRatedDoctors
        );

        setLoading(false);

      })
      .catch((error) => {

        console.log(error);

        setLoading(false);

      });

  }, []);

  return (

    <div className="py-16 md:py-20 bg-[#f4fbff]">

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-[#3BA5F3]">
            Top Rated Doctors
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Meet our highly experienced and trusted doctors who provide the best healthcare support for patients.
          </p>

        </div>

        {
          loading ? (

            <div className="flex justify-center items-center py-20">

              <span className="loading loading-spinner loading-lg text-sky-500"></span>

            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {
                doctors.map(
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

      </div>

    </div>

  );

};

export default TopDoctors;