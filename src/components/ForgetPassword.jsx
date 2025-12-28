import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { handleForgetPassword } from "../Api/api";
import { toast } from "react-hot-toast";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await handleForgetPassword(email);
      toast.success("Check your email for reset link!");
      setLoading(false);
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <div className="flex justify-center bg-white h-dvh pt-20">
      <form onSubmit={handleSubmit} className=" w-[100vw] px-4 md:w-full rounded-lg">
        <Link className="text-4xl font-semibold" to={"/login"}>
          <IoIosArrowRoundBack />
        </Link>
        <h2 className="text-blue-800 text-lg tracking-wide font-medium mb-4">Forgot Password</h2>
        <label className="flex gap-2 items-center validator rounded-md px-2  border border-gray-400 bg-white ">
          <svg
            className="h-[1.4em]"
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
            className="bg-transparent border-none outline-none h-12 w-full text-[1.3rem] tracking-wide"
          />
        </label>
        <button
          type="submit"
          className=" bg-blue-600 w-full rounded-md text-[1.1rem] mt-6 py-3 border-none text-white"
        >
          {loading ? <Loading /> : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
