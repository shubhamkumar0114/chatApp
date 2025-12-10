import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { handleForgetPassword } from "../Api/api";
import { toast } from "react-toastify";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await handleForgetPassword(email);
      toast.success("Check your email for reset link!");
      setLoading(false);
    } catch (error) {
      toast.error(error?.message);
    }
  };
  // style={{ maxWidth: "300px", margin: "50px auto" }}
  return (
    <div className="flex justify-center bg-emerald-200 items-center pt-30">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg">
        <Link className="text-xl font-semibold" to={"/login"}>
          <IoIosArrowRoundBack />
        </Link>
        <h2 className="text-blue-800 font-medium">Forgot Password</h2>
        <label className="input validator border border-gray-400 bg-white mt-4 mb-4">
          <svg
            className="h-[1em]"
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
            className="bg-transparent "
          />
        </label>
        <button
          type="submit"
          className="btn bg-white border-none text-blue-800"
        >
          {loading ? <Loading /> : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
