import TwitterIcon from "../../components/global/icons/twitter";
import OpenseaIcon from "../../components/global/icons/opensea";
import DiscordIcon from "../../components/global/icons/discord";
import Link from "next/link";
const termsofUse = () => {
  return (
    <div className="container mx-auto py-8 ">
      <Link href="/academy">
        <a>
          <img
            className="w-40 block mx-auto"
            src="Home/images/logo-beings.png"
          />
        </a>
      </Link>
      <h3 className="text-xl font-semibold  ">Connecting your wallet</h3>
      <p className="text-md my-4 ">
        In order to access and use the Services, including engaging in a
        Transaction on the Services, you must connect your account to your
        digital wallet supported on MetaMask, WalletConnect or other wallet
        extensions or gateways as allowed on the Services. Such digital wallets
        allow you to purchase, store, and engage in transactions using the
        native Ethereum cryptocurrency, ETH. When you link your cryptocurrency
        wallet, you understand and agree that you are solely responsible for
        maintaining the security of your wallet and your control over any
        wallet-related authentication credentials, private or public
        cryptocurrency keys, non-fungible tokens or cryptocurrencies that are
        stored in or are accessible through your wallet. Any unauthorized access
        to your cryptocurrency wallet by third parties could result in the loss
        or theft of Beings NFTs and/or funds held in your wallet and any
        associated wallets, including any linked financial information such as
        bank account(s) or credit card(s). BeingsNFT is not responsible for
        managing and maintaining the security of your cryptocurrency wallet.
        BeingsNFT has no responsibility or liability to you for any unauthorized
        access to or use of your cryptocurrency wallet or if you are unable to
        locate your credentials. If you notice any unauthorized or suspicious
        activity in your cryptocurrency wallet that seems to be related to the
        Services, please notify us immediately.
      </p>

      <h3 className="text-xl font-semibold  ">Connecting your wallet</h3>
      <p className="text-md my-4 ">
        BeingsNFT reserves the right to modify or discontinue, temporarily or
        permanently, the Services (or any part thereof) with or without notice.
        You agree that BeingsNFT will not be liable to you or to any third party
        for any modification, suspension, or discontinuance of the Services,
        including in relation to any Beings NFT.
      </p>
      <h3 className="text-xl font-semibold  ">Taxes</h3>
      <p className="text-md my-4 ">
        You are responsible for any and all sales, use, value-added and other
        taxes, duties, and assessments now or hereafter claimed or imposed by
        any governmental authority, associated with your use of the Services,
        Perks or Beings NFTs (including, without limitation, any taxes that may
        become payable as the result of your ownership, transfer, purchase, or
        sale of a Beings NFT).
      </p>
      <h3 className="text-xl font-semibold  ">Training Terms of Service</h3>

      <p className="text-md my-4 ">
        Training will transfer your Being from your wallet to Beings Academy
        contract. You can Stop Training it at any time and once you do, it will
        be returned to your wallet.
      </p>

      <p className="text-md my-4 ">
        Training your Being is at your own risk, we accept no responsibility for
        smart contract risk.
      </p>

      <p className="text-md my-4 ">
        Training / Stop Training can only happen on beingsnft.art
      </p>
      <p className="text-md my-4 ">
        We are not responsible for attacks or transfers that occur when using
        3rd party Training or other staking websites. You are aware that you are
        using this website and the beingsnft.art platform fully at your own
        risk.
      </p>
      <p className="text-md my-4 ">
        The nature of digital assets may lead to an increased risk of fraud or
        cyberattacks and any losses due to fraudulent or accidental transactions
        will likely not be recoverable.
      </p>
      <p className="text-md my-4 ">
        We will only offer rewards for Training that is initiated and occurs
        through beingsnft.art. beings will only support training rewards earned
        through beingsnft.art and undertakes no responsibility to support or
        honor rewards that may be earned on or through other sites or service
        providers.
      </p>
      <p className="text-md my-4 ">
        We may be forced to suspend, discontinue, terminate or change aspects of
        Training in any jurisdiction, without notice, if demanded by regulatory
        or applicable law or for whatever other reason. In such case, your Being
        could be frozen for an indefinite period of time until the matter is
        resolved or we may terminate any such features or eliminate certain
        rewards.
      </p>
      <p>
        If you want to sell your Being, please come back to this website
        (beingsnft.art) to Stop Training it at any time - there is no lockup
        period. Once you Stop Training, it will be free to sell.
      </p>
      <p className="text-md my-4 ">
        This section is not exhaustive and does not disclose all the risks
        associated with Training your Beings.
      </p>
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
  );
};

export default termsofUse;
