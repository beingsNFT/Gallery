/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Switch from "../../components/global/switch";
import Img from "react-cool-img";
import Fade from "react-reveal/Fade";
import OpenseaIcon from "../../components/global/icons/opensea";
import metadata from "./data/newMetadata.json";
import Head from "next/head";

import Menu from "./components/menu";
import Modal from "../../components/global/modal";

import traitsBase from "./data/traits.json";

//dashboard

const urlBase =
  "https://opensea.mypinata.cloud/ipfs/QmYQ9B2BU1jbNDQKDRdXLuGfERhw5bWXUsDKiVde77LSh8/";
const totalSupply = 5615;

const Gallery = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(30);

  const [accordion, setAccordion] = useState();
  const [accordionOpen, setAccordionOpen] = useState(false);

  const [filters, setFilters] = useState([]);
  const [filterMetadata, setFilterMetadata] = useState([]);

  const [modal, setModal] = useState(false);

  const [tokenSelected, setTokenSelected] = useState({});

  const [rarityState, setRarityState] = useState();

  const [openFilter, setOpenFilter] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const modalCustomStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",

      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#ffffff",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "10px",
      position: "absolute",
      display: "flex",
      overflow: "auto",
    },
  };
  const baseIconsUri = "assets/gallery/icons/";
  const iconsTraits = {
    MOUTH: baseIconsUri + "mouth.png",
    EYES: baseIconsUri + "eyes.png",
    HAIR: baseIconsUri + "hair.png",
    BODY: baseIconsUri + "body.png",
    HEAD: baseIconsUri + "head.png",
    PIERCINGS: baseIconsUri + "piercings.png",
    BACKGROUND: baseIconsUri + "background_trait.png",
    CLOTHES: baseIconsUri + "clothes.png",
    FACE: baseIconsUri + "face.png",
    SUIT: baseIconsUri + "suit.png",
    BACKPACK: baseIconsUri + "RAINBOWNIZATOR.png",
    "Traits count": baseIconsUri + "number.png",
  };

  const HandleSwithRarity = () => {
    setRarityState(!rarityState);
  };

  const HandlePagination = () => {
    setPage(page + 1);
  };

  function handleScroll() {
    var isAtBottom =
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop <=
      document.documentElement.clientHeight;

    if (isAtBottom) {
      // Load next posts
      HandlePagination();
    }
  }

  const HandlerSearchSerial = async (serial) => {
    //search by edition

    const filter = await metadata.filter((item) =>
      item.edition.includes(serial)
    );
    if (serial.length > 0 || filter.length > 0) {
      setFilterMetadata(filter);
    } else {
      setFilterMetadata(metadata);
    }
  };

  const HandleSelectedToken = (e, item) => {
    e.preventDefault();
    if (modal) {
      setModal(false);
      setTokenSelected({});
    } else {
      setTokenSelected(item);
      setModal(true);
    }
  };

  const HandlerOpenFilters = (e) => {
    e.preventDefault();
    setOpenFilter(!openFilter);
  };

  const HandlerDeleteFilter = (e, item) => {
    e.preventDefault();
    const newFilters = filters.filter((filter) => filter !== item);
    setFilters(newFilters);
    setFilterMetadata(metadata);
  };

  const accordionState = (index) => {
    setAccordion(index);

    // if (accordion == index) {
    //   setAccordionOpen(false);
    //   setAccordion(null);
    // } else {
    //   setAccordionOpen(true);
    // }

    setAccordionOpen(!accordionOpen)
  };

  useEffect(() => {
    setFilterMetadata(metadata);
  }, []);
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  useEffect(() => {}, [tokenSelected]);

  const addFilterData = (e, filter) => {
    e.preventDefault();

    const _filter = filters;
    if (!filters.find((item) => item === filter)) {
      _filter.push(filter);
      setFilters(_filter);
    } else {
      _filter.splice(_filter.indexOf(filter), 1);
      setFilters(_filter);
    }
    if (filters.length > 0) {
      setFilterMetadata([]);
      const _clenMetadata = [];

      //search data in metadata
      filters.map((_filter) => {
        metadata.forEach((item) => {
          item.Attributes.forEach((attribute) => {
            if (attribute.value === _filter) {
              _clenMetadata.push(item);
            }
          });
        });
      });

      setFilterMetadata(_clenMetadata);
    } else {
      setFilterMetadata(metadata);
    }
  };

  return (
    <>
      <Head>
        <title>Beings - Gallery</title>
      </Head>

      <div className="container mx-auto px-4 md:p-auto ">
        <Menu background={true} />

        {/* FOR MOBILE */}

        <div className="flex w-full  md:hidden justify-between">
          <button
            onClick={HandleSwithRarity}
            className="flex rounded-lg justify-between  py-2 items-center"
          >
            <span className="items-center flex font-bold text-md text-white ">
              <img className="mr-1 w-12" src={baseIconsUri + "rarity.png"} />
            </span>
            <Switch
              height={20}
              width={48}
              onColor="#39ff71"
              checked={rarityState}
            />
          </button>

          <button onClick={HandlerOpenFilters}>
            <img className="w-6" src={baseIconsUri + "filter.svg"} />
          </button>
        </div>

        {/* FOR DESKTOP */}

        <div className="flex mx-auto">
          <div className={`md:w-2/6 hidden  md:block  `}>
            <div className="flex sticky top-36   overflow-auto  bg-white p-4 rounded-lg flex-col w-full">
              <div className="flex flex-col divide-y">
                <button
                  onClick={HandleSwithRarity}
                  className="hidden rounded-lg md:flex justify-between  py-2 items-center"
                >
                  <span className="items-center flex font-bold text-lg text-primary ">
                    <img
                      className="mr-2 w-12"
                      src={baseIconsUri + "rarity.png"}
                    />{" "}
                    RARITY RANKING
                  </span>
                  <Switch isOn={rarityState} onColor="#39ff71" />
                </button>
                {filters.length > 0 ? (
                  <div className="h-12 overflow-x-auto w-full  flex flex-wrap ">
                    {filters.map((item, index) => (
                      <button
                        key={index}
                        onClick={(e) => HandlerDeleteFilter(e, item)}
                        className="flex justify-between mr-1 my-1 items-center bg-lightGray p-1 rounded-full"
                      >
                        <small className="text-primary lowercase font-bold flex items-center">
                          {item}
                        </small>
                        <img
                          src={baseIconsUri + "close.svg"}
                          className="ml-2 w-4"
                        />
                      </button>
                    ))}
                  </div>
                ) : null}
                <button className="md:hidden" onClick={HandlerOpenFilters}>
                  <img className="w-8" src={baseIconsUri + "back.svg"} />
                </button>
                <h2 className="font-bold text-lg text-primary mt-2 pt-2  ">
                  FILTER
                </h2>
                <div className="flex   text-sm bg-primary rounded-r-full mt-2 box-border w-full border-none py-0 md:py-2 px-4 text-white font-semibold">
                  <img src={baseIconsUri + "search.svg"} className="w-5 mr-3" />
                  <input
                    onChange={(e) => HandlerSearchSerial(e.target.value)}
                    type="number"
                    maxLength="4"
                    max="4"
                    className="bg-primary w-full border-none "
                    placeholder="Sort by serial..."
                  />
                </div>
              </div>
              <div className="flex flex-col divide-y mt-4 box-border py-4">
                {traitsBase.map((attribute, index) => {
                  return (
                    <div key={index} className="flex flex-col  py-2">
                      <button
                        onClick={() => accordionState(index)}
                        className="flex justify-between font-bold items-center hover:scale-105 hover:shadow-lg transition-all"
                      >
                        <div className="flex">
                          <img
                            src={iconsTraits[attribute.trait_type]}
                            className="w-8 mr-2"
                          ></img>
                          <span className="text-primary font-bold text-md">
                            {attribute.trait_type}
                          </span>
                        </div>
                        <img src={baseIconsUri + "arrowDown.svg"} />
                      </button>

                      <div
                        className={`bg-lightGray shadow-sm rounded-b-lg ${
                          accordionOpen && index === accordion
                            ? "flex"
                            : "hidden"
                        } flex-col h-44 overflow-auto `}
                      >
                        {traitsBase
                          .find(
                            (element) =>
                              element.trait_type === attribute.trait_type
                          )
                          .values.map((item, index) => {
                            return (
                              <Fade key={index} bottom cascada>
                                <div className="flex items-center p-1">
                                  <button
                                    className="flex text-primary text-sm items-center"
                                    onClick={(e) =>
                                      addFilterData(e, item.name, index)
                                    }
                                  >
                                    <div
                                      className={`block w-4 h-4 rounded-sm mr-2 ${
                                        filters.find(
                                          (filter) => filter === item.name
                                        )
                                          ? "bg-success"
                                          : "bg-primary"
                                      }  `}
                                    ></div>

                                    {item.name + " (" + item.cant + ")"}
                                  </button>
                                </div>
                              </Fade>
                            );
                          })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className={`  ${
              openFilter ? "block fixed h-screen z-50 inset-0" : "hidden"
            }  `}
          >
            <div className="flex h-screen  overflow-auto  bg-white p-4 rounded-lg flex-col w-full">
              <div className="flex flex-col divide-y">
                <button
                  onClick={HandleSwithRarity}
                  className="hidden rounded-lg md:flex justify-between  py-2 items-center"
                >
                  <span className="items-center flex font-bold text-lg text-primary ">
                    <img
                      className="mr-2 w-12"
                      src={baseIconsUri + "rarity.png"}
                    />{" "}
                    RARITY RANKING
                  </span>
                  <Switch isOn={rarityState} onColor="#39ff71" />
                </button>
                {filters.length > 0 ? (
                  <div className="h-12 overflow-x-auto w-full  flex flex-wrap ">
                    {filters.map((item, index) => (
                      <button
                        key={index}
                        onClick={(e) => HandlerDeleteFilter(e, item)}
                        className="flex justify-between mr-1 my-1 items-center bg-lightGray p-1 rounded-full"
                      >
                        <small className="text-primary lowercase font-bold flex items-center">
                          {item}
                        </small>
                        <img
                          src={baseIconsUri + "close.svg"}
                          className="ml-2 w-4"
                        />
                      </button>
                    ))}
                  </div>
                ) : null}
                <button className="md:hidden" onClick={HandlerOpenFilters}>
                  <img className="w-8" src={baseIconsUri + "back.svg"} />
                </button>
                <h2 className="font-bold text-lg text-primary mt-2 pt-2  ">
                  FILTER
                </h2>
                <div className="flex   text-sm bg-primary rounded-r-full mt-2 box-border w-full border-none py-0 md:py-2 px-4 text-white font-semibold">
                  <img src={baseIconsUri + "search.svg"} className="w-5 mr-3" />
                  <input
                    onChange={(e) => HandlerSearchSerial(e.target.value)}
                    type="number"
                    maxLength="4"
                    max="4"
                    className="bg-primary w-full border-none "
                    placeholder="Sort by serial..."
                  />
                </div>
              </div>
              <div className="flex flex-col divide-y mt-4 box-border py-4">
                {traitsBase.map((attribute, index) => {
                  return (
                    <div key={index} className="flex flex-col  py-2">
                      <button
                        onClick={() => accordionState(index)}
                        className="flex justify-between font-bold items-center hover:scale-105 hover:shadow-lg transition-all"
                      >
                        <div className="flex">
                          <img
                            src={iconsTraits[attribute.trait_type]}
                            className="w-8 mr-2"
                          ></img>
                          <span className="text-primary font-bold text-md">
                            {attribute.trait_type}
                          </span>
                        </div>
                        <img src={baseIconsUri + "arrowDown.svg"} />
                      </button>

                      <div
                        className={`bg-lightGray shadow-sm rounded-b-lg ${
                          accordionOpen && index === accordion
                            ? "flex"
                            : "hidden"
                        } flex-col h-44 overflow-auto `}
                      >
                        {traitsBase
                          .find(
                            (element) =>
                              element.trait_type === attribute.trait_type
                          )
                          .values.map((item, index) => {
                            return (
                              <Fade key={index} bottom cascada>
                                <div className="flex items-center p-1">
                                  <button
                                    className="flex text-primary text-sm items-center"
                                    onClick={(e) =>
                                      addFilterData(e, item.name, index)
                                    }
                                  >
                                    <div
                                      className={`block w-4 h-4 rounded-sm mr-2 ${
                                        filters.find(
                                          (filter) => filter === item.name
                                        )
                                          ? "bg-success"
                                          : "bg-primary"
                                      }  `}
                                    ></div>

                                    {item.name + " (" + item.cant + ")"}
                                  </button>
                                </div>
                              </Fade>
                            );
                          })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex-1  md:pl-4">
            {rarityState ? (
              <div className="overflow-x-auto relative rounded-lg mt-4">
                <table className="w-full text-sm text-left bg-white  ">
                  <thead className="text-xs text-primary uppercase ">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Token
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Score
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Rank #
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filterMetadata
                      .sort((a, b) => a.rank - b.rank)
                      .slice(0, page * perPage)
                      .map((item, index) => {
                        return (
                          <Fade key={index} bottom cascade>
                            <tr
                              onClick={(e) => HandleSelectedToken(e, item)}
                              className="bg-white transition-all hover:bg-lightGray hover:scale-105 cursor-pointer "
                            >
                              <td className="px-6 py-4 whitespace-no-wrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10">
                                    <img
                                      className="  rounded-md"
                                      src={item.image}
                                      alt={item.edition}
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm leading-5 font-medium text-primary">
                                      {item.edition}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap">
                                <div className="text-sm leading-5 text-primary">
                                  {Math.round(item.score)}
                                </div>
                              </td>

                              <td className="px-6 py-4 whitespace-no-wrap">
                                <div className="text-sm leading-5 text-primary">
                                  {Math.round(item.rank)}
                                </div>
                              </td>
                            </tr>
                          </Fade>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className=" mt-4 grid-cols-2  grid md:grid-cols-3  lg:grid-cols-5 gap-4">
                {
                  //return images from metadata per page
                  filterMetadata
                    .sort((a, b) => a.edition - b.edition)
                    .slice(0, page * perPage)
                    .map((item, index) => {
                      return (
                        <Fade key={index} bottom cascade>
                          <button
                            key={index}
                            onClick={(e) => HandleSelectedToken(e, item)}
                            className=" flex flex-col hover:scale-110 transition-all  items-center"
                          >
                            <Img
                              width={300}
                              height={300}
                              className="rounded-lg"
                              placeholder="assets/gallery/images/notRevealed.gif"
                              src={item.image}
                              error="assets/gallery/images/errorLoadedNFT.png"
                              alt="being"
                            />
                            <span className="text-white text-sm text-center">{`No ${item.edition}.`}</span>
                          </button>
                        </Fade>
                      );
                    })
                }
              </div>
            )}
          </div>
        </div>

        <Modal openState={modal} background="bg-white">
          <div className="grid grid-cols-1 md:grid-flow-col auto-cols-max gap-4 overflow-auto">
            <div className="flex flex-col justify-between">
              <div>
                <img src={tokenSelected.image} className="w-96 rounded-lg" />
                <h2 className="text-primary font-bold text-2xl mt-2">
                  Beings No. {tokenSelected.edition}
                </h2>
                <span className="text-primary mt-2">
                  Bringing colors back to the DOT🌈
                </span>
              </div>

              <div className="flex col-span-2  mt-4 justify-between">
                <a
                  href={`https://opensea.io/assets/ethereum/0x1193af965786fc46a63cb4d92c33a48219d1c8b6/${
                    tokenSelected.edition - 1
                  }`}
                  target="__blank"
                  className="divider text-white flex items-center rounded-lg justify-center w-full  py-3 font-bold"
                >
                  <OpenseaIcon fill="white" className="mr-2" /> OPENSEA
                </a>
                <button
                  className="p-3 ml-2 bg-danger rounded-lg text-white font-black"
                  onClick={(e) => HandleSelectedToken(e)}
                >
                  {" "}
                  X
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <h2 className="text-primary font-bold text-2xl">
                Rarity Score : {Math.round(tokenSelected.score)}
              </h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-3 overflow-auto ">
                {tokenSelected.image
                  ? tokenSelected.Attributes.map((item, index) => {
                      return (
                        <div key={index} className="flex py-2 items-center">
                          <img
                            src={iconsTraits[item.trait_type]}
                            className="w-10 mr-2"
                          ></img>
                          <div className="flex flex-col">
                            <small className="font-bold text-primary">
                              {item.trait_type.toUpperCase()}
                            </small>
                            <span className="text-primary  text-md">
                              {item.value ?? "N/A"}
                            </span>
                            <small className="text-primary">
                              Score : {Math.round(item.score)}
                            </small>
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};
export default Gallery;
