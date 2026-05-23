const Loadingspinner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f4fbff]">

      <div className="flex flex-col items-center gap-4">

        <span className="loading loading-spinner loading-lg text-[#009dff]"></span>

        <p className="text-[#0f172a] font-medium text-lg">
          Loading...
        </p>

      </div>

    </div>
  );
};

export default Loadingspinner;