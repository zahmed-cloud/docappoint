import { FaUserDoctor } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-5xl font-bold text-[#3BA5F3]">
            Why Choose Us
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-7">
            We provide trusted healthcare services with modern technology,
            experienced doctors, and fast appointment management.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-[#f4fbff] rounded-3xl p-8 text-center hover:shadow-xl transition duration-300">

            <div className="w-16 h-16 mx-auto rounded-full bg-[#dff3ff] flex items-center justify-center text-[#3BA5F3] text-3xl">
              <FaUserDoctor />
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
              Expert Doctors
            </h3>

            <p className="text-gray-600 leading-7 text-sm">
              Get treatment from experienced and highly qualified medical specialists.
            </p>

          </div>

          <div className="bg-[#f4fbff] rounded-3xl p-8 text-center hover:shadow-xl transition duration-300">

            <div className="w-16 h-16 mx-auto rounded-full bg-[#dff3ff] flex items-center justify-center text-[#3BA5F3] text-3xl">
              <IoTimeOutline />
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
              24/7 Support
            </h3>

            <p className="text-gray-600 leading-7 text-sm">
              Our healthcare support team is always available for your assistance.
            </p>

          </div>

          <div className="bg-[#f4fbff] rounded-3xl p-8 text-center hover:shadow-xl transition duration-300">

            <div className="w-16 h-16 mx-auto rounded-full bg-[#dff3ff] flex items-center justify-center text-[#3BA5F3] text-3xl">
              <MdHealthAndSafety />
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
              Trusted Care
            </h3>

            <p className="text-gray-600 leading-7 text-sm">
              We ensure reliable healthcare services with trusted medical facilities.
            </p>

          </div>

          <div className="bg-[#f4fbff] rounded-3xl p-8 text-center hover:shadow-xl transition duration-300">

            <div className="w-16 h-16 mx-auto rounded-full bg-[#dff3ff] flex items-center justify-center text-[#3BA5F3] text-3xl">
              <RiSecurePaymentLine />
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
              Secure System
            </h3>

            <p className="text-gray-600 leading-7 text-sm">
              Your appointment and personal information remain fully protected.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;