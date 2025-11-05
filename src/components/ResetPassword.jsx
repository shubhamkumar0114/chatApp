import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {Link} from "react-router-dom"
import { handleResetPassword } from "../Api/api";
import { toast } from "react-toastify";
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
    <div style={{ maxWidth: "300px", margin: "50px auto" }}>
      <form onSubmit={handleSubmit}>
        <h2>
          {" "}
          <Link to={"/login"}>{"<-"}</Link> Reset Password
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
        <button className="bg-white px-2 py-1  cursor-pointer" type="submit">
          {loading ? <Loading /> : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
