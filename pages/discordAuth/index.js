/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import randomizeArray from "randomize-array";
import discordUser from "../../services/beings_api/query/discord_user";
import { toast } from "react-toastify";
import addDiscordUserRole from "../../services/beings_api/mutation/add_discord_user_role";
import sha1 from "sha1";
import Head from "next/head";
import Link from "next/link";

const DiscordAuth = () => {
  const [gameStatus, setGameStatus] = useState(0);
  const [countCard, setCountCard] = useState(1);
  const [discordUserName, setDiscordUserName] = useState("");
  const [discordUserData, setDiscordUserData] = useState({});
  const [puzzleArray, setPuzzleArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const salt = "$2a$10$T1cNXCbKWDYvrcHGi3bqIe";

  useEffect(() => {
    randomizeCards();
  }, []);

  const randomizeCards = () => {
    setPuzzleArray(
      randomizeArray([
        {
          i: 1,
          img: "assets/discordAuth/images/puzzle1.png",
          activated: false,
          selectedPosition: 0,
        },
        {
          i: 2,
          img: "assets/discordAuth/images/puzzle2.png",
          activated: false,
          selectedPosition: 0,
        },
        {
          i: 3,
          img: "assets/discordAuth/images/puzzle3.png",
          activated: false,
          selectedPosition: 0,
        },
        {
          i: 4,
          img: "assets/discordAuth/images/puzzle4.png",
          activated: false,
          selectedPosition: 0,
        },
      ])
    );
  };

  const activateCard = (index) => {
    setCountCard(countCard + 1);
    puzzleArray[index].activated = true;
    puzzleArray[index].selectedPosition = countCard;
    if (countCard === 4) {
      validateGame();
    }
  };

  const resetGame = () => {
    setGameStatus(1);
    setCountCard(1);
    randomizeCards();
  };

  const validateGame = () => {
    let count = 0;

    puzzleArray.map((item) => {
      if (item.i === item.selectedPosition) {
        count++;
      }
    });

    if (count === 4) {
      setRolDiscordUser();
    } else {
      toast.error(
        "😥 Oooh! you missed a little color 🌈, come on you can do it, let's start again!"
      );
      setGameStatus(3);
    }
  };

  const getDiscordUser = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (discordUserName != "" && discordUserName.includes("#")) {
      discordUser(discordUserName)
        .then((res) => {
          setDiscordUserData(res);

          setGameStatus(1);
          setLoading(false);
        })
        .catch((err) => {
          setError("Oooh! User no found, please try again");
          setLoading(false);
         
        });
    } else {
      setLoading(false);
      setError("Please enter a valid Discord user name");
    }
  };

  const setRolDiscordUser = () => {
    setLoading(true);
    addDiscordUserRole(
      discordUserName,
      sha1(salt + discordUserName.split("#")[1])
    )
      .then(() => {
        setGameStatus(2);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Ooops! error, please try again");
        setError("Ooops! error, please try again");
        setLoading(false);
      });
  };

  return (
    <>
      <Head>
        <title>Beings - Verify</title>
      </Head>

      <div className="h-screen flex flex-col justify-center items-center">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div
            className={`flex w-full ${
              discordUserData.img ? "justify-between" : "justify-center"
            } items-center`}
          >
            <Link href="/">
              <a>
                <img
                  src="assets/discordAuth/icons/logo_d.svg"
                  className="w-24 md:w-32 block "
                />
              </a>
            </Link>

            {discordUserData.img ? (
              <div className="flex  justify-center items-center ">
                <span className="font-bold mr-3 hidden md:block text-md text-center text-primary">
                  {discordUserData.name}
                </span>
                <img
                  src={discordUserData.img}
                  className="w-10   rounded-full"
                  alt="userPhoto"
                />
              </div>
            ) : null}
          </div>

          {gameStatus === 0 ? (
            <Fade bottom cascade>
              <p className="text-center text-primary font-medium my-10">
                You have what this boring world <br /> needs to give it color,
                come on!
              </p>
              <form className="flex flex-col mt-5  ">
                <span className="font-bold text-sm md:text-md text-center text-primary">
                  DISCORD USERNAME
                </span>
                <input
                  onChange={(e) => setDiscordUserName(e.target.value)}
                  className=" block mx-auto text-sm bg-primary rounded-full mt-2 box-border w-11/12 border-none py-4 px-4 text-white font-semibold"
                  placeholder="Enter discord username"
                />

                <button
                  onClick={(e) => getDiscordUser(e)}
                  className=" text-white button_gradient_primary rounded-full py-2 font-semibold flex mx-auto justify-center items-center w-11/12  mt-5 text-sm md:text-md  btn  "
                >
                  {!loading ? (
                    <>
                      <img
                        src="assets/discordAuth/icons/hand.svg"
                        className="w-4 md:w-6 mr-2"
                        alt="hand"
                      />
                      ENTER
                    </>
                  ) : (
                    <svg
                      className="animate-spin h-5  w-5 rounded-md bg-white"
                      viewBox="0 0 24 24"
                    ></svg>
                  )}
                </button>
              </form>
              <span
                className={`${
                  error.length > 0 ? "block" : "hidden"
                } text-center text-danger mt-5 font-semibold text-md`}
              >
                {error}
              </span>
            </Fade>
          ) : gameStatus === 1 || gameStatus === 3 ? (
            <>
              <p className="text-center text-sm md:text-xl text-primary font-medium my-4 md:my-6">
                Select the correct order
              </p>
              {loading ? (
                <>
                  {" "}
                  <svg
                    className="animate-spin h-6 mt-6 block mx-auto w-6 rounded-md bg-primary"
                    viewBox="0 0 24 24"
                  ></svg>
                </>
              ) : (
                <></>
              )}

              <Fade bottom cascade>
                <div className="flex justify-center items-center">
                  <button
                    onClick={resetGame}
                    className=" block  my-2  text-white font-bold text-lg"
                  >
                    <img
                      className="w-8 md:w-10"
                      src="assets/discordAuth/icons/reset.svg"
                      alt="reset game button"
                    />
                  </button>
                </div>
              </Fade>
              <Fade bottom cascade>
                <img
                  src="assets/discordAuth/images/tip.png"
                  alt="tip img"
                  className="w-full  md:w-1/2 block mx-auto h-auto"
                />
                <div className="grid grid-cols-4 mt-1 gap-x-1 md:gap-x-5">
                  {puzzleArray.map((puzzle, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center hover:scale-105 transition"
                    >
                      <div className="block  w-6 h-6 md:w-10 md:h-10 mb-2">
                        <Fade bottom>
                          <div
                            className={`${
                              puzzle.activated ? "block" : "hidden"
                            } flex   items-center transition justify-center bg-primary w-6 h-6 md:w-10 md:h-10 rounded-full  text-white text-md md:text-2xl font-bold `}
                          >
                            {puzzle.selectedPosition}
                          </div>
                        </Fade>
                      </div>

                      <button
                        disabled={puzzle.activated}
                        key={i}
                        onClick={() => {
                          activateCard(i);
                        }}
                        className=""
                      >
                        <img
                          src={puzzle.img}
                          className={`w-auto mx-auto transition  ${
                            puzzle.activated ? "grayscale-0" : "grayscale"
                          }  hover:grayscale-0 `}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </Fade>
            </>
          ) : (
            <>
              <p className="text-center text-md md:text-xl text-primary font-bold mt-10">
                Welcome to the community you are <br /> now verified
              </p>
              <img
                src="assets/discordAuth/icons/check.svg"
                className="w-14 my-4 block mx-auto"
              />
              <p className="text-center text-primary text-md my-4">
                {" "}
                you can now login to discord
              </p>
              <a
                onClick={() => {
                  setGameStatus(0);
                  setDiscordUserData({});
                  setDiscordUserName("");
                  setError("");
                }}
                href="https://discord.gg/beingsnft"
                className="block mx-auto text-center text-sm gradient-social text-primary font-bold w-7/12"
                target="__blank"
              >
                <img
                  src="assets/discordAuth/icons/discord.svg"
                  className="w-6 md:w-8 block mx-auto"
                  alt="discord  logo"
                />
                DISCORD
              </a>
              <Link  href="/">
                <a
                 
                  onClick={() => {
                    setGameStatus(0);
                    setDiscordUserData({});
                    setDiscordUserName("");
                    setError("");
                    router
                    discordValidate();
                  }}
                  className=" block mx-auto  mt-10 text-white font-bold text-lg"
                >
                  <img
                    className="w-8 md:w-18 mx-auto"
                    src="assets/discordAuth/icons/close.svg"
                    alt="close game button"
                  />
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DiscordAuth;
