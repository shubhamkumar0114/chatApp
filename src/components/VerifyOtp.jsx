import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(()=> new Array(4).fill(""));
  const navigate = useNavigate();
  const refArr = useRef([]);
  const finalOtp = Array.isArray(otp) ? otp.join("") : "";
  const [loading , setLoading] = useState(false);
  
  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleChangeInput = (value, index) => {
    if (isNaN(value)) return;
    const newValue = value.trim();
    const newArr = [...otp];
    newArr[index] = newValue.slice(-1);
    setOtp(newArr);
    newValue && refArr.current[index + 1]?.focus();
  };

  const handleOnKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      !e.target.value && refArr.current[index - 1]?.focus();
    }
  };



  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const verifyOtp = async () => {
        const res = await axios.post(
          "https://chat-backend-api-r9xu.onrender.com/api/user/verifyotp",
          { otp: finalOtp },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        navigate("/");
        localStorage.setItem("user", JSON.stringify(res?.data?.user));
        localStorage.setItem("token", res?.data?.token);
      };
      verifyOtp();
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="verify-otp  h-screen">
      <div className="">
        <h1 className="mb-2 font-semibold text-[1.3rem]">Otp verify</h1>
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={handleVerifyOtp}
        >
          <p className="text-gray-700 text-md font-sans">
            Enter the 4 digits code send to sms
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-10 justify-center items-center">
              {Array.isArray(otp) && otp.map((input, index) => (
                <input
                  type="text"
                  key={index}
                  ref={(input) => (refArr.current[index] = input)}
                  value={otp[index]}
                  className="w-12 h-12 pl-4 border border-zinc-800 text-center text-[1.4rem] font-semibold  text-gray-600 outline-none  rounded-md"
                  onChange={(e) => handleChangeInput(e.target.value, index)}
                  onKeyDown={(e) => handleOnKeyDown(e, index)}
                />
              ))}
            </div>
            <button
              type="submit"
              className="bg-blue-600 py-2 rounded-md tracking-wide text-[1.2rem] text-white"
            >
              {loading ? <Loading /> : " Verify OTP"}
            </button>
          </div>
          <button className="">
            Don't recive code? <span>Resend OTP</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
