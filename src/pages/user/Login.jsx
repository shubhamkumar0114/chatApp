import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ToastMsg from "../../components/ToastMsg";
import { toast } from "react-toastify";
import { login } from "../../Api/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

      toast.success("Login Successful ✅");
    } catch (err) {
      toast.error(err.message || "Invalid credentials ❌");
    }
  };

  return (
    <div
      className=" p-4 sm:w-full rounded-md bg-white h-screen"
      style={{ maxWidth: "300px", margin: "0px auto" }}
    >
      <h2 className="text-center font-semibold pb-4">Login</h2>
      <form onSubmit={handleSubmit} className="">
        <div className="flex flex-col gap-y-6 ">
          <label className="input validator bg-white border border-red-400">
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
              className="bg-transparent"
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>

          <label className="input validator bg-white border border-red-400">
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
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              className="bg-transparent "
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
            <p className="text-blue-500 cursor-pointer">ForgetPassword?</p>
          </Link>
          <Link to={"/signup"} className="text-gray-800 cursor-pointer">
            Signup
          </Link>
        </div>
        <div className="flex justify-center items-center bg-blue-600 rounded-md text-white cursor-pointer">
          <button type="submit" style={{ padding: "8px 16px" }}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
