
import { ChainId, ThirdwebProvider, useContract,useContractCall } from "@thirdweb-dev/react";
import Head from "next/head";
 import AcademyComponent from "../../components/academy/components/academy";
const Academy = () => {
  
  return (
    <>
      <Head>
        <title>Beings - Academy</title>
      </Head>
      <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
      <AcademyComponent />

      </ThirdwebProvider>
    </>
    )

}

export default Academy;