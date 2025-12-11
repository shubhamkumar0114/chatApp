import { io } from "socket.io-client";

const socket = io("https://chat-backend-api-r9xu.onrender.com");
// const socket = io("http://localhost:4001");

export default socket;
 