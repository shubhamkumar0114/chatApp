import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {Link} from "react-router-dom"
import { handleResetPassword } from "../Api/api";
import { toast } from "react-hot-toast";
import Loading from "./Loading";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await handleResetPassword(password, token);
    navigate("/login");
    toast.success("Password reset successfully!");
    setLoading(false);
  };
  return (
    <div className="flex bg-white h-dvh justify-center  pt-40">
      <form onSubmit={handleSubmit} className=" p-2 w-[100%]">
        <h2 className="font-semibold text-[1.3rem] text-red-500 tracking-wide">
          {" "}
          <Link to={"/login"} >{"<-"}</Link> Reset Password
        </h2>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          className="bg-transparent"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "8px",
            width: "100%",
            borderRadius: "4px",
            border: "1px solid gray",
          }}
        />
        <button className="bg-blue-600 w-full  text-white  px-2 py-2 text-[1.1rem] tracking-wide mt-2 rounded-md  cursor-pointer" type="submit">
          {loading ? <Loading /> : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
