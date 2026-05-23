import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {

  const {
    id,
    name,
    specialty,
    image,
    experience,
    hospital,
    location,
    fee,
    rating,
  } = doctor;

  return (

    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100">

      <div className="p-5">

        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover rounded-2xl"
        />

        <div className="mt-5 space-y-3">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold text-gray-800">
              {name}
            </h2>

            <span className="bg-[#e8f5ff] text-[#3BA5F3] px-3 py-1 rounded-full text-sm font-semibold">
              ⭐ {rating}
            </span>

          </div>

          <p className="text-[#3BA5F3] font-semibold">
            {specialty}
          </p>

          <div className="space-y-1 text-gray-600 text-sm">

            <p>
              Experience: {experience}
            </p>

            <p>
              Hospital: {hospital}
            </p>

            <p>
              Location: {location}
            </p>

            <p>
              Consultation Fee: ৳{fee}
            </p>

          </div>

          <Link to={`/doctor/${id}`}>

            <button className="btn w-full mt-4 bg-[#3BA5F3] hover:bg-[#2593e8] border-none text-white">
              View Details
            </button>

          </Link>

        </div>

      </div>

    </div>

  );
};

export default DoctorCard;