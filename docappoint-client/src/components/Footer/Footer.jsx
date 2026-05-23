import { FaFacebookF, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white mt-20">

      <div className="w-11/12 mx-auto py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#38bdf8]">
              DocAppoint
            </h2>

            <p className="text-gray-300 leading-7">
              Book doctor appointments easily and manage your healthcare journey with trusted specialists.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/all-appointments">All Appointments</a>
              </li>

              <li>
                <a href="/dashboard/my-bookings">Dashboard</a>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                className="bg-[#1e293b] hover:bg-[#009dff] transition p-3 rounded-full"
                href="#"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                className="bg-[#1e293b] hover:bg-[#009dff] transition p-3 rounded-full"
                href="#"
              >
                <FaInstagram size={18} />
              </a>

              <a
                className="bg-[#1e293b] hover:bg-[#009dff] transition p-3 rounded-full"
                href="#"
              >
                <FaGithub size={18} />
              </a>

              <a
                className="bg-[#1e293b] hover:bg-[#009dff] transition p-3 rounded-full"
                href="#"
              >
                <FaXTwitter size={18} />
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          © 2026 DocAppoint. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
};


export default Footer;