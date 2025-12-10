import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContext from "./contextApi/Context.jsx";
import { BrowserRouter } from "react-router-dom";
import UserAuthProvider from "./contextApi/useAuth.jsx";
import SocketsAuthProvider from "./contextApi/Sockets.jsx";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import ThemeContexts from "./contextApi/Theme.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="853220337075-3ntevrri9ko2bkg6sd5oobi6ev6m3juc.apps.googleusercontent.com">
      <UserContext>
        <UserAuthProvider>
          <SocketsAuthProvider>
            <ThemeContexts>
              <App />
            </ThemeContexts>
          </SocketsAuthProvider>
        </UserAuthProvider>
      </UserContext>
    </GoogleOAuthProvider>
  </BrowserRouter>
);
