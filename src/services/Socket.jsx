import { io } from "socket.io-client";

// const socket = io("https://backend-chat-app-seven.vercel.app");
const socket = io("http://localhost:4001");

export default socket;
 