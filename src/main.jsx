import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContext from "./contextApi/Context.jsx";
import { BrowserRouter } from "react-router-dom";
import UserAuthProvider from "./contextApi/useAuth.jsx";
import SocketsAuthProvider from "./contextApi/Sockets.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContext>
      <UserAuthProvider>
        <SocketsAuthProvider>
          <App />
        </SocketsAuthProvider>
      </UserAuthProvider>
    </UserContext>
  </BrowserRouter>
);
