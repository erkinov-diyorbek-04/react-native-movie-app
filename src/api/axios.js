import axios from "axios";

export const apiRequest = async (url, params) => {
  const options = { method: "GET", url: url, params: params ? params : {} };

  try {
    const { data } = await axios.request(options);
    console.log(data, "keldi");
    return data;
  } catch (error) {
    console.error(error, "error");
    return error;
  }
};
