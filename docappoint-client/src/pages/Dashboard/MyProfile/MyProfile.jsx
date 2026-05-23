import {
  useContext,
  useState,
} from "react";

import {
  Helmet,
} from "react-helmet-async";

import {
  AuthContext,
} from "../../../providers/AuthProvider";

import { toast } from "react-toastify";

const MyProfile = () => {

  const {
    user,
    setUser,
  } = useContext(AuthContext);

  const [name, setName] =
    useState(
      user?.name || ""
    );

  const [image, setImage] =
    useState(
      user?.image || ""
    );

  const handleUpdateProfile = (e) => {

    e.preventDefault();

    const updatedUser = {

      ...user,

      name,

      image,

    };

    setUser(updatedUser);

    localStorage.setItem(
      "logged-user",
      JSON.stringify(updatedUser)
    );

    toast.success(
      "Profile updated successfully!"
    );

    document
      .getElementById("update_modal")
      .close();

  };

  return (

    <>

      <Helmet>

        <title>
          My Profile | DocAppoint
        </title>

        <meta
          name="description"
          content="Manage and update your profile information easily with DocAppoint."
        />

      </Helmet>

      <div className="bg-[#f4fbff] min-h-screen py-12 px-4">

        <div className="max-w-3xl mx-auto">

          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">

            <h2 className="text-3xl md:text-5xl font-bold text-center text-[#3BA5F3] mb-10">
              My Profile
            </h2>

            <div className="flex flex-col items-center mb-10">

              <img
                src={
                  image ||
                  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                }
                alt="User"
                className="w-32 h-32 rounded-full object-cover border-4 border-sky-300"
              />

              <h3 className="text-2xl font-bold mt-5 text-gray-800">
                {name || "User"}
              </h3>

              <p className="text-gray-500 mt-2">
                {user?.email}
              </p>

            </div>

            <button
              onClick={() =>
                document
                  .getElementById("update_modal")
                  .showModal()
              }
              className="btn w-full bg-sky-500 hover:bg-sky-600 border-none text-white rounded-xl"
            >
              Update Profile
            </button>

          </div>

        </div>

        <dialog
          id="update_modal"
          className="modal"
        >

          <div className="modal-box rounded-3xl">

            <h3 className="font-bold text-2xl text-center text-sky-500 mb-6">
              Update Profile
            </h3>

            <form
              onSubmit={handleUpdateProfile}
              className="space-y-5"
            >

              <div>

                <label className="block mb-2 font-semibold text-gray-700">
                  Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(
                      e.target.value
                    )
                  }
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400"
                />

              </div>

              <div>

                <label className="block mb-2 font-semibold text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-gray-100 cursor-not-allowed"
                />

              </div>

              <div>

                <label className="block mb-2 font-semibold text-gray-700">
                  Photo URL
                </label>

                <input
                  type="text"
                  value={image}
                  onChange={(e) =>
                    setImage(
                      e.target.value
                    )
                  }
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400"
                />

              </div>

              <button className="btn w-full bg-sky-500 hover:bg-sky-600 border-none text-white rounded-xl">
                Save Changes
              </button>

            </form>

            <div className="modal-action">

              <form method="dialog">

                <button className="btn rounded-xl">
                  Close
                </button>

              </form>

            </div>

          </div>

        </dialog>

      </div>

    </>

  );
};

export default MyProfile;