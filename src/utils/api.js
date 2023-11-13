import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_KEY;

export const generateOTP = async (otpType, organization, email) => {
  return axios.post(`${API_BASE_URL}/api/otp/generate`, {
    organization: organization,
    type: otpType,
    name: "Vedant Sharma",
    email: email,
  });
};

export const verifyOTP = async (payload) => {
  console.log(payload)
  return axios.post(`${API_BASE_URL}/api/otp/verify`, payload);
};
