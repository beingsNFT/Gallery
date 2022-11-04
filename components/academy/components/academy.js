/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import MenuLeft from "./MenuLeft";
import AppContext from "../../global/context/AppContext";
import userAcademyData from "../../../services/beings_api/query/user_academy_data";
import { toast } from "react-toastify";
import AcademyHome from "./menu/academy_home";
import {
  const_beings,
  const_beings_academy,
  const_token,
} from "../../../utils/contants";
import MyBeings from "./menu/my_beings";
import AuthAcademy from "./auth/auth_academy";
import Modal from "../../global/modal";
import { Fade } from "react-reveal";
import {
  useContract,
  useContractCall,
  useAddress,
  useNFTDrop,
  useNetworkMismatch,
  useNetwork,
  ChainId,
} from "@thirdweb-dev/react";
import sendBeingToAcademy from "../../../services/beings_api/mutation/send_being_to_academy";
import outBeingFromAcademy from "../../../services/beings_api/mutation/out_being_from_academy";
const AcademyComponent = () => {
  const [userProfile, setUserProfile] = useState({});
  const [page, setPage] = useState("Home");
  const [loadingTransaction, setLoadingTransaction] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [, switchNetwork] = useNetwork();
  const beingsAcademyContract = "0xdc6745F598A084027F0c4e9d75C23c5De2e8873F";
  const beingsNftContract = "0x1193af965786Fc46A63CB4D92C33A48219D1c8B6";
  const { contract } = useContract(beingsAcademyContract);
  const address = useAddress();

  const _beingsNftContract = useNFTDrop(beingsNftContract);
  const isMismatched = useNetworkMismatch();
  const { mutateAsync: beingEnterAcademy } = useContractCall(
    contract,
    "beingEnterAcademy"
  );

  const { mutateAsync: beingOutAcademy } = useContractCall(
    contract,
    "beingOutAcademy"
  );

  useEffect(() => {
    if (isLogin == false) {
      setIsLogin(localStorage.getItem(const_token));
    }
  }, [isLogin]);

  useEffect(() => {

    if (isMismatched) {
      toast.error("Please change your network to Mainnet");
      switchNetwork(ChainId.Mainnet); 
    }

    if (address && isLogin) {
      getUserData();
    }
  }, [address, isLogin]);

  const getUserData = () => {
    if (address.length > 0) {
      userAcademyData()
        .then((res) => {
          setUserProfile(res);
        })
        .catch((err) => {
          toast.error("Error getting user data");
        });
    }
  };

  const sendBeingsAcademy = async (e, tokensId) => {
    e.preventDefault();

    if (tokensId.length > 0) {
      setLoadingTransaction(true);
      const isApproved = await _beingsNftContract.isApproved(
        address,
        beingsAcademyContract
      );
      if (!isApproved) {
        toast.info("Please approve the contract to send beings");
        await _beingsNftContract.setApprovalForAll(beingsAcademyContract, true);
        toast.success("Contract approved");
      }
      beingEnterAcademy([tokensId])
        .then(async () => {
          await sendBeingToAcademy(tokensId)
            .then(() => {
              getUserData();
              setLoadingTransaction(false);
              toast.success("Being(s) sent to academy");
            })
            .catch((err) => {
              toast.error("Error sending being(s) to academy");
              setLoadingTransaction(false);
            });
        })
        .catch((err) => {
          setLoadingTransaction(false);
     
          toast.error("Error sending being(s) to academy");
        });
    } else {
      toast.error("Please select at least one being");
    }
  };

  const outBeingsAcademy = async (e, tokensId) => {
    e.preventDefault();

    if (tokensId.length > 0) {
      setLoadingTransaction(true);

      beingOutAcademy([tokensId])
        .then(async () => {
          await outBeingFromAcademy(tokensId)
            .then((res) => {
              getUserData();
              setLoadingTransaction(false);
            })
            .catch((err) => {
              toast.error(err.message);
              setLoadingTransaction(false);
            });

          toast.success("Being exit in academy :(");
        })
        .catch((err) => {
          setLoadingTransaction(false);
          toast.error(err.message);
        });
    } else {
      toast.error("Please select at least one being");
    }
  };

  return (
    <>
      {address && isLogin && !isMismatched ? (
        <div className=" box-border  w-full ">
          {!userProfile.beings ? (
            <div className=" flex flex-col justify-center items-center absolute h-screen w-screen bg-primary z-50">
              <img
                className="w-52"
                src="assets/academy/icons/logo_academy.png"
                alt="logo"
              />
              {
                <svg
                  className="animate-spin h-5 mt-6 w-5 rounded-md bg-white"
                  viewBox="0 0 24 24"
                ></svg>
              }
            </div>
          ) : (
            <>
              <MenuLeft account={address} setPage={setPage} page={page} />
              <div className="ml-0 md:ml-72 px-2 md:pl-6 pt-28  md:pr-6 h-screen  overflow-auto">
                <div className=" flex  flex-col   col-span-8 rounded-2xl">
                  {page === "Home" ? (
                    <AcademyHome
                      data={userProfile}
                      contract={contract}
                      account={address}
                      sendBeingsAcademy={sendBeingsAcademy}
                      outBeingsAcademy={outBeingsAcademy}
                      setPage={setPage}
                      setLoadingTransaction={setLoadingTransaction}
                    />
                  ) : page === "My Beings" ? (
                    <MyBeings
                      beings={userProfile.beings}
                      sendBeingsAcademy={sendBeingsAcademy}
                      outBeingsAcademy={outBeingsAcademy}
                      setLoadingTransaction={setLoadingTransaction}
                    ></MyBeings>
                  ) : null}
                </div>
              </div>

              <Modal openState={loadingTransaction} background="bg-primary">
                <div className="p-10 flex flex-col justify-center items-center">
                  <Fade>
                    <h3 className="text-white text-center font-semibold">
                      Wait a minute, your beings are doing little <br />
                      things about the academy. 🧐
                    </h3>
                  </Fade>
                  <svg
                    className="animate-spin h-5 mt-6 w-5 rounded-md bg-white"
                    viewBox="0 0 24 24"
                  ></svg>
                </div>
              </Modal>
            </>
          )}
        </div>
      ) : (
        <>
          <AuthAcademy setIsLogin={setIsLogin} />
        </>
      )}
    </>
  );
};
export default AcademyComponent;
