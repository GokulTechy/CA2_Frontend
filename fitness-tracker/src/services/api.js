import axios from "axios";

const BASE_URL =
  "https://t4e-testserver.onrender.com/api";


export const getToken =
  async () => {

    const { data } =
      await axios.post(
        `${BASE_URL}/public/token`,
        {
          studentId: "E0123007",
          password: "903107",
          set: "B"
        }
      );

    return data.token;
};



export const getDataset =
  async (token) => {

    const { data } =
      await axios.get(
        `${BASE_URL}/private/data`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

    return data.data;
};