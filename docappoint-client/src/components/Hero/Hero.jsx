import docImage from "../../assets/doc.avif";
const Hero = () => {
  return (
    <div className="bg-[#f4fbff] py-10 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-16">

          <div className="w-full lg:w-1/2">
            <img
              src={docImage}
              alt="Doctors"
              className="w-full max-w-lg mx-auto"
            />
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3BA5F3] leading-tight">
              Your Health <br /> Comes First
            </h1>

            <p className="py-6 text-gray-600 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
              Easily book appointments with experienced doctors and
              receive trusted healthcare support anytime, anywhere.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button className="btn bg-[#3BA5F3] hover:bg-[#2593e8] border-none text-white px-8">
                Book Appointment
              </button>

              <button className="btn btn-outline border-[#3BA5F3] text-[#3BA5F3] hover:bg-[#3BA5F3] hover:text-white">
                Learn More
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;