import {
  FaUserDoctor,
  FaCalendarCheck,
  FaHospital,
} from "react-icons/fa6";

const Services = () => {
  return (

    <div className="py-16">

      <div className="text-center mb-12">

        <h2 className="text-3xl md:text-5xl font-bold text-sky-500">
          Our Services
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          We provide trusted healthcare services with experienced doctors and modern medical support.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-sky-100 hover:shadow-xl transition">

          <div className="flex justify-center mb-5">

            <div className="bg-sky-100 text-sky-500 p-5 rounded-full text-3xl">
              <FaUserDoctor />
            </div>

          </div>

          <h3 className="text-2xl font-bold mb-3 text-gray-800">
            Expert Doctors
          </h3>

          <p className="text-gray-600 text-sm md:text-base">
            Connect with highly qualified and experienced specialists for the best treatment.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-sky-100 hover:shadow-xl transition">

          <div className="flex justify-center mb-5">

            <div className="bg-sky-100 text-sky-500 p-5 rounded-full text-3xl">
              <FaCalendarCheck />
            </div>

          </div>

          <h3 className="text-2xl font-bold mb-3 text-gray-800">
            Easy Appointments
          </h3>

          <p className="text-gray-600 text-sm md:text-base">
            Book appointments online quickly and manage your schedule smoothly.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-sky-100 hover:shadow-xl transition">

          <div className="flex justify-center mb-5">

            <div className="bg-sky-100 text-sky-500 p-5 rounded-full text-3xl">
              <FaHospital />
            </div>

          </div>

          <h3 className="text-2xl font-bold mb-3 text-gray-800">
            Trusted Hospitals
          </h3>

          <p className="text-gray-600 text-sm md:text-base">
            Get healthcare support from trusted hospitals and modern medical facilities.
          </p>

        </div>

      </div>

    </div>

  );
};

export default Services;