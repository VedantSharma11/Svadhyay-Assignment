import React, { useState } from "react";
import { generateOTP } from "../utils/api";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StyledForm = styled.form`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

const GenerateOtp = () => {
  const [otpType, setOTPType] = useState("numeric");
  const [subject, setSubject] = useState("");
  const [eemail, setEmail] = useState("");

  const handleGenerateOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await generateOTP(otpType, subject, eemail);
      console.log("OTP generated:", response.data);

      toast.success("OTP generated successfully!");
    } catch (error) {
      console.error("Error generating OTP:", error.message);
      toast.error("Error generating OTP. Please try again.");
    }
  };

  return (
    <StyledForm>
      <h3 style={{marginTop:'0'}}>Generate OTP</h3>
      <label style={{ display: "block", marginBottom: "15px" }}>
        OTP Type:
        <select
          className="main-select"
          value={otpType}
          onChange={(e) => setOTPType(e.target.value)}
        >
          <option value="numeric">Numeric</option>
          <option value="alphanumeric">Alphanumeric</option>
          <option value="alphabet">Alphabet-based</option>
        </select>
      </label>
      <label>
        Email:
        <StyledInput
          type="email"
          value={eemail}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Subject:
        <StyledInput
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </label>

      <StyledButton onClick={handleGenerateOTP}>Generate OTP</StyledButton>
      <ToastContainer />
    </StyledForm>
  );
};

export default GenerateOtp;
