import { ENDPOINTS, BASE_URL } from "./general";
import axios from "axios";

const getToken = () => {
  const landing = JSON.parse(localStorage.getItem("landing"));
  return landing.accessToken;
}

export const getLandings = async () => {
  const jwtToken = getToken();
  const response = await axios.get(
    `${BASE_URL}/${ENDPOINTS.LANDINGS}`,
    {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
  );
  return response.data;
};

export const getLanding = async (id) => {
  const jwtToken = getToken();
    const response = await axios.get(
      `${BASE_URL}/${ENDPOINTS.LANDINGS}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    return response.data;
  };

export const createLanding = async (data) => {
  const jwtToken = getToken();
  const response = await axios.post(
    `${BASE_URL}/${ENDPOINTS.LANDINGS}`,
    {
      template: JSON.stringify({ components: data.template }),
      title: data.title,
    },
    {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const updateLanding = async (id, data) => {
  const jwtToken = getToken();
  const response = await axios.patch(
    `${BASE_URL}/${ENDPOINTS.LANDINGS}/${id}`,
    {
      template: JSON.stringify({ components: data.components }),
      title: data.title,
    },
    {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
