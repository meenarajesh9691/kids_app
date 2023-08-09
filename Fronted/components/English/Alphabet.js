import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const Alphabets = () => {
  const [video, setVideo] = useState(null);
  console.log(video);
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const alphabetToVideoUrl = {
    A: "https://youtu.be/I_3mbra4dHU",
    B: "https://youtu.be/rS5IGQ1nnr0",
    C: "https://youtu.be/Gdt4IleVyA4",
  };

  const handleAlphabetClick = (alphabet) => {
    console.log(alphabet);
    const videoUrl = alphabetToVideoUrl[alphabet];
    // let video_url = $("#videoPlayer").attr("url", videoUrl);
    // setVideo(video_url);

    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = videoUrl;
    // videoPlayer.play();
    setVideo(videoPlayer);
  };

  return (
    <>
      <div className="alphabet_container">
        <Navbar />
        <div className="container   rounded-2 mt-5 ">
          <div className="row " id="alphabet_row">
            <div className="col-xl-6 p-4 ">
              {alphabets.map((alphabet) => (
                <button
                  className=" alphabet_btn "
                  key={alphabet}
                  onClick={() => handleAlphabetClick(alphabet)}
                >
                  {alphabet}
                </button>
              ))}
            </div>
            <div className="col-xl-6 p-4 align-self-center">
              <video id="videoPlayer" src={video} controls></video>

              {/* <ReactPlayer id="videoPlayer" url='https://youtu.be/I_3mbra4dHU' controls={true} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alphabets;
