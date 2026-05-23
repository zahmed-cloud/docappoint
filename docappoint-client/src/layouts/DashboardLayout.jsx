import { Outlet, NavLink } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-[#f4fbff] flex flex-col md:flex-row">
      <div className="w-full md:w-72 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-[#009dff] mb-8">
          Dashboard
        </h2>

        <div className="flex flex-col gap-4">
          <NavLink
            to="/dashboard/my-bookings"
            className="font-medium hover:text-[#009dff]"
          >
            My Bookings
          </NavLink>

          <NavLink
            to="/dashboard/my-profile"
            className="font-medium hover:text-[#009dff]"
          >
            My Profile
          </NavLink>
        </div>
      </div>

      <div className="flex-1 p-4 md:p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;