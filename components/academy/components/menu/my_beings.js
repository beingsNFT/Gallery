/* eslint-disable @next/next/no-img-element */
import UserIcon from "../../../../components/global/icons/user";
import BeingCard from "../being_card";
import { useEffect, useState } from "react";
import CheckIcon from "../../../../components/global/icons/check";
import OpenseaIcon from "../../../../components/global/icons/opensea";
import { Fade } from "react-reveal";

const MyBeings = ({ beings, sendBeingsAcademy, outBeingsAcademy }) => {
  const [beingsSelected, setBeingsSelected] = useState([]);
  const [modeSelected, setModeSelected] = useState(false);
  const [typeSelected, setTypeSelected] = useState(0); //1 :training or 0:exit training

  const handleSelect = (e, typeSelected) => {
    e.preventDefault();
    setTypeSelected(typeSelected);
    setModeSelected(!modeSelected);
  };

  useEffect(() => {}, [beingsSelected]);

  const handleSelectBeings = (e, being_id) => {
    e.preventDefault();
    if (modeSelected === true) {
      if (!beingsSelected.find((being) => being === being_id)) {
        setBeingsSelected([...beingsSelected, being_id.toString()]);
      } else {
        setBeingsSelected(beingsSelected.filter((being) => being !== being_id));
      }
    }
  };

  const handleSelectBeingsAll = (e) => {
    e.preventDefault();
    if (modeSelected === true) {
      if (beingsSelected.length < beings.length) {
        if (typeSelected == 1) {
          setBeingsSelected(
            beings
              .filter((being) => being.being_on_academy == "true")
              .map((being) => being.being_id)
          );
        } else if (typeSelected == 2) {
          setBeingsSelected(
            beings
              .filter((being) => being.being_on_academy == "false")
              .map((being) => being.being_id)
          );
        }
      }
    } else {
      setBeingsSelected([]);
    }
  };

  const handleUnselectBeingsAll = (e) => {
    e.preventDefault();
    setBeingsSelected([]);
  };

  const handleCancelSelect = (e) => {
    e.preventDefault();
    setBeingsSelected([]);
    setTypeSelected(0);
    setModeSelected(false);
  };
  return (
    <>
      <div className="flex md:hidden mx-2 mb-4 items-center">
        <UserIcon fill="#fff" className="mr-4" />
        <div className="text-white  text-sm font-semibold">My Beings</div>
      </div>
      <div className="w-full bg-secondary rounded-2xl pb-4   ">
        <div className="flex justify-between  px-4 py-4 ">
          <div className="flex  w-full md:w-auto  flex-col">
            <span className="text-sm text-lightLila font-semibold ml-3 mb-1">
              View
            </span>
            <div className="flex justify-center p-2 md:p-4 bg-primary rounded-full">
              <button className="text-xxs md:text-sm font-semibold">
                All {beings.length}
              </button>
              <button className="text-xxs md:text-sm mx-4 font-semibold">
                Training
                <span className=" text-lightLila ml-1">
                  {
                    beings.filter((being) => being.being_on_academy == "true")
                      .length
                  }
                </span>
              </button>
              <button className="text-xxs md:text-sm font-semibold">
                Not Training
                <span className=" text-darkGray ml-1">
                  {
                    beings.filter((being) => being.being_on_academy != "true")
                      .length
                  }
                </span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row justify-between px-2 md:px-4  py-1 md:py-2 border-primary">
            {!modeSelected && (
              <button
                disabled={
                  typeSelected === 2 || typeSelected === 0 ? false : true
                }
                onClick={(e) => handleSelect(e, 2)}
                className={` ${
                  typeSelected === 2 || typeSelected === 0
                    ? "opacity-100"
                    : "opacity-20"
                } flex justify-between items-center border-2  font-semibold text-sm  
               button_gradient_primary border-lightBlue
              px-4 md:px-6 py-1 md:py-2 rounded-full my-2 hover:scale-105 transition-all `}
              >
                <img
                  src={`/assets/academy/icons/ship_onAcademy.gif
                `}
                  className="h-6 md:h-8"
                  alt="ship Beings Academy"
                />
                <div className="mx-2">
                  <span className="block text-xxs md:text-sm  text-white font-semibold text-left">
                    Start Training Multiple Beings
                  </span>
                  <small className="block text-xxs2 md:text-sm  text-lila font-semibold text-left">
                    Save on gas fees start training multiple
                    <br />
                    beings grouped in one transaction
                  </small>
                </div>

                <img
                  src={`/assets/global/icons/rounded_arrow_right_l.svg
                `}
                  className="h-6 md:h-8"
                  alt="arrow right"
                />
              </button>
            )}

            {!modeSelected && (
              <button
                disabled={
                  typeSelected === 1 || typeSelected === 0 ? false : true
                }
                onClick={(e) => handleSelect(e, 1)}
                className={`flex  ${
                  typeSelected === 1 || typeSelected === 0
                    ? "opacity-100"
                    : "opacity-20"
                } justify-between items-center border-2 my-2 md:mt-0 font-semibold text-sm  
                bg-darkGray border-lightGray
                px-4 md:px-6 py-1 md:py-2 rounded-full hover:scale-105 transition-all  `}
              >
                <img
                  src={`/assets/academy/icons/exit.png
                 `}
                  className="h-6 md:h-8"
                  alt="ship Beings Academy"
                />
                <div className="mx-2">
                  <span className="block text-xxs md:text-sm  text-white font-semibold text-left">
                    Stop Training Multiple Beings
                  </span>
                  <small className="block text-xxs2 md:text-sm  text-lightGray font-semibold text-left">
                    Save on gas fees stop training multiple
                    <br />
                    beings grouped in one transaction
                  </small>
                </div>

                <img
                  src={`/assets/global/icons/rounded_arrow_right_d.svg
                 `}
                  className="h-6 md:h-8"
                  alt="arrow right"
                />
              </button>
            )}

            {modeSelected && (
              <div className="flex items-center w-full md:w-auto">
                <button
                  onClick={handleCancelSelect}
                  className="flex  justify-between mr-1 items-center border-2  font-semibold text-xxs md:text-sm  
               bg-darkGray border-lightGray
              px-6 py-2 rounded-l-full hover:scale-105 transition-all  "
                >
                  <img
                    src={`/assets/global/icons/cancel.svg
                `}
                    className="h-6 md:h-10 mr-1"
                    alt="arrow right"
                  />
                  Cancel
                </button>

                <button
                  onClick={(e) =>
                    typeSelected === 2
                      ? sendBeingsAcademy(e, beingsSelected)
                      : outBeingsAcademy(e, beingsSelected)
                  }
                  className={`flex w-full md:w-auto justify-between ${
                    typeSelected === 2
                      ? "button_gradient_primary"
                      : "bg-darkGray"
                  } items-center border-2  font-semibold text-xxs md:text-sm
                border-lightGray
              px-3 py-2 rounded-r-full hover:scale-105 transition-all `}
                >
                  <span>
                    {typeSelected === 2
                      ? `Start training ${beingsSelected.length} Being`
                      : ` Stop training ${beingsSelected.length}  Being`}{" "}
                  </span>
                  <img
                    src={`/assets/global/icons/rounded_arrow_right_l.svg  
                `}
                    className="h-6 md:h-10 ml-1"
                    alt="arrow right"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
        {modeSelected && (
          <div className="flex items-center px-2 mt-2 md:px-6">
            <button
              onClick={handleUnselectBeingsAll}
              className="flex mx-1 justify-between hover:scale-105 transition-all items-center border-r-2 border-primary pr-2 font-semibold text-sm md:text-md  
                 "
            >
              Unselect all
            </button>
            <button
              onClick={handleSelectBeingsAll}
              className="flex mx-1 justify-between items-center  hover:scale-105 transition-all font-semibold text-sm md:text-md  
                 "
            >
              Select all
            </button>
          </div>
        )}

        {modeSelected && (
          <p className="text-sm transition-all text-lightLila font-semibold text-center my-4 md:mt-4 md:mb-10">
            Please select your Beings ...
          </p>
        )}
        <div className="w-full border-b-2 mb-5 mt-2 border-primary"></div>
        {beings.length > 0 ? (
          <div className="grid px-2 md:px-6 grid-cols-2  gap-2  md:gap-6 md:grid-cols-3 lg:grid-cols-5 relative">
            {beings.map((being, index) => {
              return (
                <Fade cascade bottom key={index}>
                  <div
                    key={index}
                    className={` ${
                      being.being_on_academy == "false" && typeSelected == 1
                        ? "hidden"
                        : " block"
                    }   ${
                      being.being_on_academy == "true" && typeSelected == 2
                        ? "hidden"
                        : " block"
                    } relative`}
                  >
                    <div
                      className={`rounded-full absolute flex justify-center transition-all items-center -top-4 -left-2 z-30  ${
                        modeSelected == true
                          ? "border-4 w-8 h-8 block"
                          : "border-0 hidden"
                      } ${
                        beingsSelected.filter((b) => b == being.being_id)
                          .length > 0
                          ? " border-blue bg-primary "
                          : " border-darkGray bg-secondary "
                      }}`}
                    >
                      <CheckIcon
                        className={`transition-all ${
                          beingsSelected.filter((b) => b == being.being_id)
                            .length > 0
                            ? "block"
                            : "hidden"
                        }`}
                        fill={` ${
                          beingsSelected.filter((b) => b == being.being_id)
                            .length > 0
                            ? "#6589FF"
                            : "#A5A5A5"
                        }`}
                      />
                    </div>

                    <button
                      onClick={(e) => handleSelectBeings(e, being.being_id)}
                      className={`${
                        modeSelected == true ? "border-4" : "border-0"
                      } ${
                        beingsSelected.filter((b) => b == being.being_id)
                          .length > 0
                          ? " border-blue"
                          : " border-darkGray"
                      } rounded-2xl hover:border-blue transition-all`}
                    >
                      <BeingCard
                        being={being}
                        modeSelected={modeSelected}
                        className="mx-auto"
                        onClick={(e) =>
                          being.being_on_academy == "true"
                            ? outBeingsAcademy(e, [being.being_id])
                            : sendBeingsAcademy(e, [being.being_id])
                        }
                      />
                    </button>
                  </div>
                </Fade>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center py-10">
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
              <span>Recruit Beings</span>
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default MyBeings;
