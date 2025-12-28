import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { register } from "../../Api/api.js";
import Loading from "../../components/Loading.jsx";

export default function Signup() {
  const defaultImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuEiaDNDqRo6K0Zn_NlRJjAde-B1zommEhIg&s";
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
    phone,
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
    <div className=" bg-emerald-200 h-dvh md:flex flex-row-reverse gap-8 justify-center items-center w-full  rounded-md  text-gray-300 sm:w-full">
      <div className="flex flex-row-reverse login move bg-white  rounded-lg items-center">
        <div className=" h-screen rounded-md pt-2">
          <h2 className="text-center tracking-wide text-2xl text-gray-600 font-semibold mb-4">
            Signup
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-transparent text-gray-600 placeholder:text-gray-600  w-full shadow-gray-400 shadow border-none outline-none"
              style={{
                display: "block",
                padding: "12px",
                width: "100%",
                borderRadius: "6px",
              }}
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="bg-transparent text-gray-600 placeholder:text-gray-600 w-full shadow-gray-400 shadow border-none outline-none"
              style={{
                display: "block",
                padding: "12px",
                width: "100%",
                borderRadius: "6px",
              }}
            />
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              className="bg-transparent text-gray-600 placeholder:text-gray-600 w-full shadow-gray-400 shadow border-none outline-none"
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                display: "block",
                padding: "12px",
                width: "100%",
                borderRadius: "6px",
              }}
            />
            <input
              type="number"
              placeholder="phone"
              value={phone}
              className="bg-transparent text-gray-600 placeholder:text-gray-600  w-full shadow-gray-400 shadow border-none outline-none"
              onChange={(e) => setPhone(e.target.value)}
              required
              style={{
                display: "block",
                padding: "12px",
                width: "100%",
                borderRadius: "6px",
              }}
            />
            <input
              type="password"
              placeholder="password"
              className="bg-transparent text-gray-600 placeholder:text-gray-600  w-full shadow-gray-400 shadow border-none outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              style={{
                display: "block",
                padding: "12px",
                width: "100%",
                borderRadius: "6px",
              }}
            />
            <small className="text-[0.7rem] mt-[-16] text-gray-700 leading-[-10]">
              Eight or more characters, with at least one lowercase and one
              uppercase letter.
            </small>
            <input
              accept="image/*"
              type="file"
              placeholder="image"
              onChange={onChangeImage}
              className="bg-transparent text-gray-700 w-full shadow-gray-400 shadow border-none outline-none"
              style={{
                display: "block",
                padding: "12px",
                width: "100%",
                borderRadius: "6px",
              }}
            />

            <div className="border w-10 h-10 rounded-md border-gray-300">
              <img
                src={imgPrev}
                className="w-full h-full bg-center opacity-70"
                alt="previmage"
              />
            </div>

            <div className="flex justify-between items-center py-2 px-1">
              <Link to={"/login"}>
                <p className="text-blue-600 text-md cursor-pointer">
                  already have account.?
                </p>
              </Link>
              <Link
                to={"/login"}
                className="text-gray-600 text-[21px] font-semibold cursor-pointer"
              >
                Login
              </Link>
            </div>
            <div className="flex justify-center items-center bg-blue-600 rounded-md text-white cursor-pointer">
              <button type="submit" style={{ padding: "8px 16px", fontSize: "19px"}}>
                {loading ? <Loading /> : "Signup"}
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className="hidden md:block">
            <img src="../public/login_img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
