import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

const GenerateJazzicon = ({ address, size = 100 }) => {
  return (
    <Jazzicon
      diameter={size}
      seed={jsNumberForAddress(address)}
    />
  );
};

export default GenerateJazzicon;
