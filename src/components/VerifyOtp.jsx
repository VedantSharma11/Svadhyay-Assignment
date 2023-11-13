import React, { useState } from "react";
import { verifyOTP } from "../utils/api";
import styled from "styled-components";
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StyledForm = styled.form`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
`;

const StyledInput = styled.input`
  width: 100%;
  margin: 8px 0;
  padding: 8px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight:bold;
`;

const VerifyOtp = () => {
  const [otp, setEnteredOTP] = useState("");
  const [verificationResult, setVerificationResult] = useState("");
  const [email, setEmail] = useState("");
  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await verifyOTP({email, otp});
      console.log("OTP verification result:", response.data);
      setVerificationResult(response.data.message);
      toast.success("OTP verified successfully!");
    } catch (error) {
      console.error("Error verifying OTP:", error.message);
      toast.error("Error verifying OTP. Please check the entered OTP and try again.");
    }
  };

  return (
    <StyledForm>
      <h3 style={{marginTop:'0'}}>Verify OTP</h3>
      <label>
        Email:
        <StyledInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Enter OTP:
        <StyledInput
          type="text"
          value={otp}
          onChange={(e) => setEnteredOTP(e.target.value)}
        />
      </label>
      <StyledButton onClick={handleVerifyOTP}>Verify OTP</StyledButton>
      {verificationResult && <p>{verificationResult}</p>}
      <ToastContainer/>
    </StyledForm>
  );
};

export default VerifyOtp;
