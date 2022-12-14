import axios from "axios";

export const getAllUrls = async () => {
  try {
    const result = await axios.get(`${import.meta.env.VITE_APP_API_URL}/mini`);
    return result.data;
  } catch (error) {
    console.log("🚀 ~ file: urlRequest.js:9 ~ getAllUrls ~ error", error);
  }
};

export const createUrl = async (urls) => {
  try {
    return await axios.post(`${import.meta.env.VITE_APP_API_URL}/mini`, urls);
  } catch (error) {
    console.log("🚀 ~ file: urlRequest.js:16 ~ createUrl ~ error", error);
  }
};
