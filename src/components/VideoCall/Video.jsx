import React from "react";
import { MdCallEnd } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const Video = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    async function openCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error("Camera access denied", error);
      }
    }
    openCamera();
  }, []);
  return (
    <div>
      <section className="w-full p-1 h-dvh border relative">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-30 h-40 m-2 border border-white absolute top-0 right-0"
        />
        <div className="w-[100%] h-[100%] bg-black">
          {/* video screen */}
          <video
            className="h-screen"
            ref={videoRef}
            autoPlay
            playsInline
            muted
          />

          <div className="text-black flex justify-between items-center fixed bottom-10 left-20 h-14 right-20 ">
            <button className="text-[2.2rem] text-white bg-zinc-900 p-2 rounded-full">
              <MdOutlineFlipCameraAndroid />
            </button>
            <button className="text-[2.1rem] rounded-full text-white bg-zinc-800 p-2">
              <HiOutlineSpeakerWave />
            </button>
            <button className="text-[2.1rem] p-2 rounded-full text-white bg-red-600">
              <Link to={"/rightchat"}>
                <MdCallEnd />
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Video;
