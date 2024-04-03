import axios from "axios";
const axiosInstance = axios.create({ baseUrl: "https://api.unsplash.com" });
const ACCESS_KEY_API = "SzIqucdVyqmxQ4M3MQf_ovhFjZ25_uCrQJMH_iUE9m4";
// axiosInstance.defaults.headers = {
//   Authorization: ACCESS_KEY_API,
// };

export default async function getGalleryByQuery(imageName) {
  const data = axiosInstance.get(
    `https://api.unsplash.com/search/collections?page=1&query=${imageName}&client_id=${ACCESS_KEY_API}`
  );
  return data;
}
