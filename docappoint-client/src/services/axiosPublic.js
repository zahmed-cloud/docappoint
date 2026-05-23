import axios from "axios";

const axiosPublic = axios.create({
  baseURL:
    "https://doctor-appointment-server-seven.vercel.app",
});

export default axiosPublic;