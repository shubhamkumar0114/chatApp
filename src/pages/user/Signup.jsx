import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../Api/api.js";
import Loading from "../../components/Loading.jsx";

export default function Signup() {
  const defaultImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuEiaDNDqRo6K0Zn_NlRJjAde-B1zommEhIg&s";
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [imgPrev, setImagePrev] = useState(defaultImg);

  const [loading, setLoading] = useState(false);

  const onChangeImage = (e) => {
    const file = e.target?.files[0];
    setImage(file);
    if (file) {
      setImagePrev(URL.createObjectURL(file));
    } else {
      setImagePrev(null);
    }
  };

  const navigate = useNavigate();

  const userInfo = {
    name,
    username,
    email,
    password,
    image,
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (userInfo) {
        await register(userInfo);
      }
      navigate("/login");
      toast.success("Signup Successful ✅");
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("Invalid credentials ❌");
    }
  };

  return (
    <div
      className=" p-4 h-screen rounded-md bg-white sm:w-full"
      style={{ maxWidth: "300px", margin: "0px auto" }}
    >
      <h2 className="text-center font-semibold pb-4">Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-transparent  border border-red-200 outline-none"
          style={{
            display: "block",
            margin: "10px 0",
            padding: "8px",
            width: "100%",
            borderRadius: "4px",
          }}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="bg-transparent border border-red-200 outline-none"
          style={{
            display: "block",
            margin: "10px 0",
            padding: "8px",
            width: "100%",
            borderRadius: "4px",
          }}
        />
        <input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          className="bg-white border border-red-200 outline-none"
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            display: "block",
            margin: "10px 0",
            padding: "8px",
            width: "100%",
            borderRadius: "4px",
          }}
        />
        <input
          type="password"
          placeholder="password"
          className="bg-white border border-red-200 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          style={{
            display: "block",
            margin: "10px 0",
            padding: "8px",
            width: "100%",
            borderRadius: "4px",
          }}
        />
        <small className="text-[0.7rem] mt-[-16] text-red-400 leading-[-10]">
          Eight or more characters, with at least one lowercase and one
          uppercase letter.
        </small>
        <input
          accept="image/*"
          type="file"
          placeholder="image"
          onChange={onChangeImage}
          className="bg-transparent border border-red-200 outline-none"
          style={{
            display: "block",
            margin: "10px 0",
            padding: "8px",
            width: "100%",
            borderRadius: "4px",
          }}
        />

        <div className="border w-10 h-10 rounded-md border-gray-400">
          <img src={imgPrev} className="w-full h-full" alt="previmage" />
        </div>

        <div className="flex justify-between items-center py-2 px-1">
          <Link to={"/login"}>
            <p className="text-blue-600 text-sm cursor-pointer">
              already have account.?
            </p>
          </Link>
          <Link to={"/login"} className="text-gray-800 cursor-pointer">
            Login
          </Link>
        </div>
        <div className="flex justify-center items-center bg-blue-600 rounded-md text-white cursor-pointer">
          <button type="submit" style={{ padding: "8px 16px" }}>
            {loading ? <Loading /> : "Signup"}
          </button>
        </div>
      </form>
    </div>
  );
}
