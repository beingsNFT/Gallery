/**
 * It checks if the user has a web3 provider (like Metamask) installed, and if so, it returns the
 * user's address
 * @returns The address of the user's wallet.
 */
import { ethers } from "ethers";
const checkAccountConnection = async () => {
  try {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const addresses = await provider.listAccounts();

      if (addresses.length) {
        //alert(addresses[0]);
        return addresses[0];
      } 
    } else {
      throw new Error("No provider ethereum found");
    }
  } catch (e) {
    throw e;
  }
};

export default checkAccountConnection;
