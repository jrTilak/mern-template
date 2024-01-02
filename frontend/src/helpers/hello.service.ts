import axios from "axios";
export const fetchHello = async () => {
  const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/hello`);
  return res.data;
};
