import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  const inputValue = (e) => {
    setName(e.target.value);
  };

  const [random, setRandom] = useState(0);

  const [joke, setJoke] = useState("Get ready to read some serious Jokes...");

  const getJoke = () => {
    const randomNumber = Math.floor(Math.random() * 10);

    setRandom(randomNumber);

    const compas_ = [
      "महानगर पालिका बोलते रस्त्यावर नका थुंकू...भाऊ आमचे लाखो मुलींच्या माथ्याच़ कुंकू",

      "चेहेरा भोळा.. लफडे सोळा… तरी पण भाऊ थांबतोय कुठे अजुन पण पोरींचे नंबर करतोय गोळा",

      "पैराशूट से मिले बालों को पोषण ,...अन मुली म्हणतात ह्याच माया ऋतिक रोशन",

      "लॉक डाऊन मूळे संपत आहे घरातला दळण...भावाला ला पाहून पोरी घेतात रस्त्यावर लोळन",

      "पोरी म्हणता भाऊ ला शो मी युर पाउट...भाऊ म्हणतो पोरिना प्लीज गेट आउट !",

      "४ बाटल्या आणल्या, २ बाटल्या पडल्या,...भाऊ engage झाले ऐकल्यावर २०० पोरी रडल्या",

      "कोरोना पुढं झुकली इटली...भाऊचा फोटो बघून पोरी म्हणतात...मीच लावणार भाऊच्या नावाची टिकली",

      "काय ते नाक आणि काय ते भोळे डोळे,... भाऊ चालताना दिसले की मुलींच्या पोटात येतात गोळे",

      "डब्बे मे डब्बा, डब्बे मे दही..भाऊ...वो बुलाती हे… मगर जाणे का नही.",

      "मुली म्हणतात तुला पाहून चढते माझ्या गालावर लाली...अग बाई हाच माझा बाहुबली"
    ];

    setJoke(compas_[random]);
  };

  return (
    <>
      <div className="container mt-5 mb-3">
        <div className="row">
          <div className="col-11 col-sm-10 col-md-7 m-auto text-center">
            <div className="card shadow px-4 pt-4 border-0">
              <h4 className="font-weight-bold">
                भाऊ Jokes - Built with
                <img
                  width="60px"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                  alt="icon"
                />
                <hr />
              </h4>
              <h2>{joke}</h2>
              <br />

              <div>
                <button onClick={getJoke} className="mb-3 btn text-white">
                  Get a Joke
                </button>
                <br />
                <p className="font-weight-bold">
                  #funWithProgramming &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="ml-2"
                    fill="#1b6569"
                    class="bi bi-emoji-laughing"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z" />
                  </svg>
                  <br />
                  Follow Me on :
                  <a
                    className="ml-2"
                    href="https://www.instagram.com/swapnilcodes/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#1b6569"
                      class="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
