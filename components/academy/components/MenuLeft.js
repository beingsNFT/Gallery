import { useState } from "react";

import GenerateJazzicon from "../../global/icons/jazzicon";
import TwitterIcon from "../../global/icons/twitter";
import OpenseaIcon from "../../global/icons/opensea";
import DiscordIcon from "../../global/icons/discord";
import HomeIcon from "../../global/icons/home";
import UserIcon from "../../global/icons/user";
import MarketplaceIcon from "../../global/icons/marketplace";
import { const_token } from "../../../utils/contants";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

import { Slide } from "react-reveal";

const MenuLeft = ({ account, setPage, page }) => {
  const [openMenu, setOpenMenu] = useState();
  const isTable = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isLaptop = useMediaQuery({ query: "(max-width: 1536px)" });
  const isDesktop = useMediaQuery({ query: "(max-width: 1537px)" });

  const menu = [
    {
      name: "Home",
      icon: HomeIcon,
      selected: page === "Home",
      disabled: false,
    },
    {
      name: "My Beings",
      icon: UserIcon,
      selected: page === "My Beings",
      disabled: false,
    },
    {
      name: "Marketplace",
      icon: MarketplaceIcon,
      selected: page === "Marketplace",
      disabled: true,
    },
  ];

  const handleMenu = (e, index) => {
    e.preventDefault();
    setOpenMenu(!openMenu);
    setPage(menu[index].name);
  };

  const LogOut = async () => {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
        params: [
          {
            eth_accounts: {},
          },
        ],
      })
      .then(() => {
        localStorage.removeItem(const_token);
        window.location.reload();
      });
  };

  return (
    <div className="fixed flex w-full z-30">
      <Slide left>
        <div
          className={`md:flex  ${
            openMenu ? "flex" : "hidden"
          } w-full md:w-auto flex-col bottom-0 top-0 fixed  justify-between py-4 px-6  col-span-2  bg-secondary`}
        >
          <div>
            <button
              className="md:hidden mx-auto w-full "
              onClick={() => setOpenMenu(!openMenu)}
            >
              <img
                className="h-9 block mx-auto"
                src="/assets/academy/icons/close_menu.svg"
                alt="close"
              />
            </button>
            <Link href="/">
              <a>
                <img
                  src="/assets/academy/icons/logo_academy.png "
                  className=" mx-auto hidden md:block w-32 mb-12 "
                  alt="Logo Beings Academy"
                />
              </a>
            </Link>

            <ul className="w-full px-6">
              {menu.map((item, index) => (
                <li key={index} className="my-6 ">
                  <button
                    disabled={item.disabled}
                    onClick={(e) => handleMenu(e, index)}
                    className={` ${
                      item.selected
                        ? "bg-primary text-white"
                        : "bg-secondary text-lightLila"
                    }  w-full rounded-full px-4 py-4 flex items-center hover:scale-105 transition-all  text-md font-semibold`}
                  >
                    <item.icon
                      className="mr-4"
                      fill={`${item.selected ? "#fff" : ""}`}
                    />
                    <span>
                      {item.name}{" "}
                      {item.name === "Marketplace" ? (
                        <small className="block text-yellow  w-full text-xxs text-left">
                          Coming Soon
                        </small>
                      ) : null}
                    </span>
                  </button>
                </li>
              ))}

              <li className="my-6">
                <a
                  href="https://opensea.io/collection/beingsnft"
                  target="__blank"
                  className="w-full  hover:scale-105 transition-all  flex items-center rounded-full px-4 border-2 border-lightGray  py-4 bg-lightLila text-primary text-md font-semibold"
                >
                  <OpenseaIcon fill="#2C2B58" className="mr-4" />
                  <span>Recruit Beings</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex justify-center mt-4 items-center">
            <a
              className="hover:scale-105 transition-all "
              href="https://discord.com/invite/beingsnft"
              target="__blank"
            >
              <DiscordIcon />
            </a>
            <a
              href="https://opensea.io/collection/beingsnft"
              className="mx-4 hover:scale-105 transition-all"
              target="__blank"
            >
              <OpenseaIcon />
            </a>
            <a
              className="hover:scale-105 transition-all "
              href="https://twitter.com/Beings_Official"
              target="__blank"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </Slide>

      <div className="w-full flex px-2 md:px-4 shadow-lg justify-between items-center ml-0 md:ml-72 py-4 border-l-2 border-primary  bg-secondary mb-8">
        <h1 className=" hidden md:block text-xl font-semibold md ">{page}</h1>

        <div className="flex ">
          <button className="md:hidden " onClick={() => setOpenMenu(!openMenu)}>
            <img className="h-9" src="/assets/academy/icons/menu.svg" />
          </button>

          <img
            src="/assets/academy/icons/logo_academy.png "
            className="ml-2 w-16 md:hidden"
            alt="Logo Beings Academy"
          />
        </div>
        <div className="flex">
          <button
            className="flex mr-2 items-center text-yellow justify-center text-xs md:text-sm font-bold border-yellow border-4 rounded-full px-2 md:px-3 py-2 "
            style={{
              background:
                "linear-gradient(94.29deg, #4F4E8E 57.88%, #E674E5 96.07%)",
            }}
          >
            <div>
              PLAY GAME
              <small className="block text-yellow  w-full text-xxs3 md:text-xxs2 text-left">
                Coming Soon
              </small>
            </div>

            <img
              className="ml-1 md:ml-2 w-8 "
              src="/assets/academy/icons/key.png "
            />
          </button>

          <button
            onClick={LogOut}
            className="flex items-center  bg-lightLila rounded-full p-1 md:p-2"
          >
            <div className="hidden md:block">
              <GenerateJazzicon
                size={isMobile ? 20 : isTable ? 30 : 34}
                address={account}
              />
            </div>

            <span className="mx-2 text-xs md:text-sm text-primary font-semibold hidden md:block  ">{`${account
              .toString()
              .substring(0, 3)}...${account
              .toString()
              .substring(account.toString().length - 3)} `}</span>
            <img
              src="/assets/academy/icons/logout.svg"
              className="h-5 ml-1 md:ml-0 "
              alt="arrow down icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuLeft;
