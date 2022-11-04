/* eslint-disable @next/next/no-img-element */
import AcademyLogo from "../../../../components/academy/AcademyLogo";

import { toast } from "react-toastify";
//icons components
import TwitterIcon from "../../../../components/global/icons/twitter";
import OpenseaIcon from "../../../../components/global/icons/opensea";
import DiscordIcon from "../../../../components/global/icons/discord";
import authValidateAccount from "../../../../services/beings_api/query/auth_validate_account";
import login from "../../../../services/beings_api/mutation/login";
import register from "../../../../services/beings_api/mutation/register";
import { useState, useEffect } from "react";
import { const_token } from "../../../../utils/contants";
import { useMetamask } from "@thirdweb-dev/react";
import Link from "next/link";
const AuthAcademy = ({ setIsLogin }) => {
  const [loading, setLoading] = useState(false);

  const connectWithMetamask = useMetamask();

  const Login = async (account) => {
    const _login = await login(account);

    localStorage.setItem(const_token, _login.token);
    toast.success("Welcome we are going to paint you in many colors");
    setLoading(false);
    setIsLogin(true);
  };

  const connectAccount = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      connectWithMetamask()
        .then(async ({ data }) => {
          const account = data.account.toString().toLowerCase();
          if (data) {
            const validateAccount = await authValidateAccount(account);

            if (validateAccount == true) {
              await Login(account);
            } else {
              const _register = await register(account);

              if (_register == "202") {
                await Login(account);
              }
            }
          } else {
            toast.error("No account found");
            setLoading(false);
          }
        })
        .catch((err) => {
          toast.error(err.message);
          setLoading(false);
        });
    } catch (e) {
      
      toast.error(e.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="background_beings_image h-screen w-full block absolute -z-20 opacity-5" />
      <div className="flex flex-col justify-between items-center h-screen  mx-auto  container p-4 md:p-auto">
        <AcademyLogo />

        <div className="flex flex-col">
          <div className="mb-12">
            <h1 className="font-semibold text-3xl text-center">Welcome</h1>
            <p className="font-semibold mt-10 text-xl text-center">
              Connect your wallet to access the Academy
            </p>
          </div>
          <div className="button_gradient_primary p-1 rounded-full hover:scale-105 hover:shadow-xl transition-all">
            <button
              onClick={(e) => connectAccount(e)}
              className="bg-secondary w-full flex items-center text-xl justify-between text-white font-semibold py-4 px-6 rounded-full"
            >
              {loading ? (
                <svg
                  className="block mx-auto  animate-spin h-5 w-5  rounded-md bg-white"
                  viewBox="0 0 24 24"
                ></svg>
              ) : (
                <>
                  <img
                    src="/assets/global/icons/metamask_logo.svg"
                    className=" w-6 "
                    alt="Metamask logo"
                  />
                  <span className="mx-4">Connect Metamask</span>
                  <img
                    src="/assets/global/icons/arrow_right.svg"
                    className=" w-4"
                    alt="arrow right icon"
                  />
                </>
              )}
            </button>
          </div>

          <div className="flex mt-4 justify-center text-sm font-semibold items-center">
            <img
              src="/assets/global/icons/info.svg"
              className="w-3"
              alt="info icon"
            />
            <span className="mx-1"> By continuing, you agree to our</span>
            <Link href="/terms">
              <a className="text-blue  transition-all">Terms of Use</a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col  justify-center items-center">
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
          <div className="flex mt-4 justify-center text-sm font-semibold items-center">
            <span className="mr-2">© Beings</span>
            <Link href="/terms">
              <a className="text-blue  transition-all">Terms of Use</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthAcademy;
