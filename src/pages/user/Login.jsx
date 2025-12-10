import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { handleSendOtp, login } from "../../Api/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [number, setNumber] = useState("");

  const navigate = useNavigate();

  const userInfo = {
    email,
    password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(userInfo);
      navigate("/");
      window.location.href = `${window.location.origin}/`;
      localStorage.setItem("user", JSON.stringify(res?.data?.user));
      localStorage.setItem("token", res?.data?.token); // token ko localStorage me store karo

      toast.success(res.data.user.error || "Login Successful ✅");
    } catch (err) {
      toast.error(err.message || "Invalid credentials ❌");
    }
  };

  const handleFormLogin = (e) => {
    setFormOpen(!formOpen);
  };

  const handleSumbitByNo = async (e) => {
    e.preventDefault();
    try {
      if (typeof number === "number" && !NaN(number)) {
        alert("only enter number");
      }
      if (number.length !== 10) {
        toast.error("please enter 10 digits number");
        return;
      }
      const res = await handleSendOtp(number);

      setTimeout(() => {
        toast.success(res?.otp);
        clearTimeout(setTimeout);
      }, 6000);
      if (res?.otp) {
        toast.success("Send otp");
        navigate("/verifyotp");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" p-4 w-full  md:flex flex-row-reverse gap-8 justify-center items-center rounded-md bg-emerald-200  text-black h-screen">
      <div className="flex flex-row-reverse login move bg-white rounded-lg py-8">
        <div className=" p-4">
          <h2 className="text-center text-[1.5rem] font-semibold login-heading">
            Login
          </h2>
          {formOpen ? (
            <form onSubmit={handleSubmit} className="form-rotate">
              <div className="flex flex-col gap-y-6 ">
                <label className="input w-full login-input outline-none validator bg-transparent border border-zinc-300">
                  <svg
                    className="h-[1em] text-black opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mail@site.com"
                    required
                    className="bg-transparent w-full"
                  />
                </label>
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>

                <label className="input w-full login-input outline-none validator bg-transparent border border-zinc-300">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                      <circle
                        cx="16.5"
                        cy="7.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>
                  <input
                    type="password"
                    required
                    className=" bg-transparent outline-none w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  />
                </label>
                <p className="validator-hint hidden">
                  Must be more than 8 characters, including
                  <br />
                  At least one number <br />
                  At least one lowercase letter <br />
                  At least one uppercase letter
                </p>
              </div>
              <small className="text-[0.7rem] text-red-400 leading-[-10]">
                Eight or more characters, with at least one lowercase and one
                uppercase letter.
              </small>
              <div className="flex justify-between items-center py-2">
                <Link to={"/forgetpassword"}>
                  <p className="text-blue-600 cursor-pointer">
                    ForgetPassword?
                  </p>
                </Link>
                <Link to={"/signup"} className="text-gray-700 cursor-pointer">
                  Signup
                </Link>
              </div>
              <div className="flex justify-center items-center bg-blue-600 rounded-md text-white cursor-pointer">
                <button
                  type="submit"
                  style={{ padding: "8px 16px", cursor: "pointer" }}
                >
                  Login
                </button>
              </div>
              <div className="mt-1 text-blue-600 hover:underline">
                <Link onClick={handleFormLogin}>Login with Mobile</Link>
              </div>
            </form>
          ) : (
            <div className="w-98">
              <form onSubmit={handleSumbitByNo}>
                <div className="flex flex-col gap-4">
                  <label className="input login-input w-full outline-none validator bg-transparent border border-zinc-300">
                    <div>
                      <span className="font-semibold text-[1rem] text-gray-500">
                        91+
                      </span>
                    </div>
                    <input
                      type="number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      placeholder="enter mobile no"
                      maxLength="10"
                      required
                    />
                  </label>
                  <div className="flex justify-center items-center bg-blue-600 rounded-md text-white cursor-pointer">
                    <button
                      type="submit"
                      style={{ padding: "8px 16px", cursor: "pointer" }}
                    >
                      Send otp
                    </button>
                  </div>
                </div>
              </form>
              <Link
                onClick={handleFormLogin}
                className="text-blue-600 hover:underline"
              >
                Login with Email
              </Link>
            </div>
          )}
        </div>
        <div>
          <div>
            <img src="../public/login_img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
