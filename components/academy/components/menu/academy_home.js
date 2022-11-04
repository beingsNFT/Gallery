/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import BeingCard from "../being_card";
import { toast } from "react-toastify";
import OpenseaIcon from "../../../../components/global/icons/opensea";

import HomeIcon from "../../../../components/global/icons/home";
import RanksTable from "../rank/ranks";
import { Fade } from "react-reveal";

const AcademyHome = ({
  data,
  sendBeingsAcademy,
  outBeingsAcademy,
  account,
  setPage,
}) => {
  const isTable = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isLaptop = useMediaQuery({ query: "(max-width: 1536px)" });
  const isDesktop = useMediaQuery({ query: "(max-width: 1537px)" });

  const gaps = isMobile ? "gap-2" : isTable ? "gap-4" : "gap-6";
  const hp = isMobile ? "px-2" : isTable ? "px-3" : "px-6";

  const imagesName = [
    "L10",
    "L20",
    "L30",
    "L40",
    "L50",
    "L60",
    "L70",
    "L80",
    "L90",
    "L100",
  ];

  return (
    <>
      <div className="flex md:hidden mx-2 mb-4 items-center">
        <HomeIcon fill="#fff" className="mr-4" />
        <div className="text-white  text-sm font-semibold">Home</div>
      </div>

      <div className={"grid grid-cols-1 lg:grid-cols-8  h-full " + gaps}>
        <div
          className={"grid grid-cols-1 lg:grid-cols-8   lg:col-span-8 " + gaps}
        >
          <Fade cascade>
            <div
              className={
                "col-span-1 lg:col-span-3 flex flex-col rounded-2xl bg-secondary "
              }
            >
              <div
                className={
                  "  flex items-center h-14 md:h-20 border-b-2 border-primary " +
                  hp
                }
              >
                <h3 className="font-bold text-sm md:text-lg">Account</h3>
              </div>

              <div className={" py-4 " + hp}>
                <h5 className="font-semibold text-xs md:text-md mb-3 text-lightLila">
                  Statistics
                </h5>

                <div className="flex flex-wrap justify-items-center items-center w-full bg-primary rounded-2xl p-2 ">
                  <div className="flex flex-col mx-auto  items-center p-2">
                    <img
                      src={`/assets/academy/icons/${
                        imagesName[
                          imagesName.findIndex(
                            (level) =>
                              parseInt(level.split("L")[1]) > data.level
                          )
                        ]
                      }.png`}
                      className="h-12 md:h-16"
                      alt="Logo Beings Academy"
                    />
                    <h4 className="text-sm md:text-md font-bold ">{`LVL ${data.level}`}</h4>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between">
                      <h4 className=" text-sm md:text-md font-semibold">EXP</h4>
                      <h4 className=" text-sm md:text-md font-semibold">
                        {Math.round(data.exp)}
                        <span className="text-lightLila">/300</span>
                      </h4>
                    </div>
                    <div className="w-full mt-1 border-2  md:border-4 border-secondary rounded-full">
                      <div
                        className="h-3 md:h-5 rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, #FF5ECC 9.4%, #FF5ECC 9.41%, #FF5EFD 27.23%, #725EFF 47.89%, #5ED1FF 68.95%, #5EFFCB 87.18%)",
                          width: `${(Number(data.exp) * 100) / 300}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={" py-4 " + hp}>
                <h5 className="font-semibold mb-3 text-xs md:text-md text-lightLila">
                  Points Balance
                </h5>
                <div className="flex  w-full justify-between items-center bg-primary rounded-2xl pr-4">
                  <div className="flex justify-between items-center  ">
                    <img
                      src={`/assets/academy/icons/coin_balance.png`}
                      className="h-14 md:h-16"
                      alt="coin balance"
                    />
                    <div className="flex  p-2 justify-between items-center">
                      <h4 className="text-sm md:text-lg font-semibold">
                        {data.total_academy_points}
                      </h4>

                      <img
                        src={`/assets/academy/icons/being_coin.png`}
                        className="ml-1 md:ml-2 h-6"
                        alt="Being coin"
                      />
                    </div>
                  </div>

                  <button
                    disable
                    className="flex opacity-50  justify-between items-center border-2 border-lightBlue font-semibold text-xs  text-white button_gradient_primary px-1 md:px-2 py-2 rounded-full "
                  >
                    <span>Exchange</span>
                    <img
                      src={`/assets/global/icons/exchange.svg`}
                      className="ml-2 h-3 md:h-4"
                      alt="Logo Beings Academy"
                    />
                  </button>
                </div>
              </div>
            </div>
          </Fade>
          <div
            className={" col-span-1 lg:col-span-5  rounded-2xl bg-secondary "}
          >
            <RanksTable account={account} />
          </div>
        </div>

        <div className="  col-span-1  lg:col-span-8 rounded-2xl bg-secondary">
          <div className="px-2 md:px-3 lg:px-6 flex  items-center h-14 md:h-20 border-b-2 border-primary">
            <h3 className="font-bold text-md md:text-xl">My Beings</h3>
          </div>

          <div className="w-full px-2 md:px-3 lg:px-6 py-4">
            <Swiper
              slidesPerView={isMobile ? 2 : isTable ? 3 : 5}
              pagination={true}
              navigation={true}
              cssMode={true}
              modules={[Navigation, Pagination]}
            >
              {data.beings.length > 0 ? (
                data.beings.slice(0, 8).map((being, index) => {
                  return (
                    <SwiperSlide key={index} className="mx-2">
                      <BeingCard
                        being={being}
                        onClick={(e) =>
                          being.being_on_academy == "true"
                            ? outBeingsAcademy(e, [being.being_id])
                            : sendBeingsAcademy(e, [being.being_id])
                        }
                      />
                    </SwiperSlide>
                  );
                })
              ) : (
                <div className=" w-full flex flex-col justify-center items-center py-10">
                  <p className="text-lila font-semibold text-md text-center">
                    {`😓 You don't have beings in your wallet but don't worry you can `}
                    <br />
                    get one at :
                  </p>
                  <a
                    href="https://opensea.io/collection/beingsnft"
                    target="__blank"
                    className="mt-3 flex items-center rounded-full px-4 border-2 border-lightGray  py-4 bg-lightLila text-primary text-md font-semibold"
                  >
                    <OpenseaIcon fill="#2C2B58" className="mr-4" />
                    <span>Reclute Beings</span>
                  </a>
                </div>
              )}
            </Swiper>
            <button
              onClick={() => setPage("My Beings")}
              className="mt-2 ml-auto flex items-center font-bold text-md "
            >
              View all{" "}
              <img className="ml-2" src=" assets/academy/icons/view_all.svg" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademyHome;
