/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import DiscordIcon from "../../../components/global/icons/discord";
import TwitterIcon from "../../../components/global/icons/twitter";
import OpenseaIcon from "../../../components/global/icons/opensea";

import { Slide } from "react-reveal";

const Menu = ({ background }) => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="w-[100vw] left-0 top-0 z-20 ">
      <div
        className={`block w-full px-[20px]  ${
          background ? "bg-primary" : "bg-transparent"
        }  py-1`}
      >
        <div className="py-5 flex justify-between w-full">
          <Link href="/">
            <a>
              <img
                src="assets/gallery/icons/logo_gallery.svg"
                className="w-24 md:w-32"
              />
            </a>
          </Link>

          <div className="  flex  justify-end ">
            <div className="flex justify-items-center divider py-5 px-6 rounded-full items-center">
              <a
                href="https://opensea.io/collection/beingsnft"
                target="__blank"
                className=" text-white font-bold flex items-center hover:scale-105"
              >
                <OpenseaIcon fill="#fff" />
              </a>
              <a
                href="https://twitter.com/Beings_Official"
                target="__blank"
                className="mx-5 hover:scale-105"
              >
                <TwitterIcon fill="#fff" />
              </a>
              <a
                className="hover:scale-105"
                href="https://discord.gg/beingsnft"
                target="__blank"
              >
                <DiscordIcon fill="#fff" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
