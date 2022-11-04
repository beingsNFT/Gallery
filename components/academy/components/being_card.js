/* eslint-disable @next/next/no-img-element */

const BeingCard = ({ being, onClick, modeSelected, props }) => {
  return (
    <div
      className=" p-2 md:p-4 flex w-full  flex-col rounded-2xl bg-primary"
      {...props}
    >
      <div
        className={`${
          being.being_on_academy == "true" ? "opacity-100" : "opacity-30"
        }`}
      >
        <img
          src={`https://opensea.mypinata.cloud/ipfs/QmYQ9B2BU1jbNDQKDRdXLuGfERhw5bWXUsDKiVde77LSh8/${
            parseInt(being.being_id) + 1
          }.png`}
          alt="Being coin"
          className="rounded-2xl w-full"
        />

        <h4 className="text-left text-xxs md:text-md mt-4 font-semibold text-lightPink">{`#${
          parseInt(being.being_id) + 1
        }`}</h4>
        <div className="flex my-2 justify-between items-center">
          <span className="text-xxs md:text-xs font-semibold text-lightPink">
            Points Earned
          </span>
          <div className="flex justify-between items-center">
            <h4 className=" text-xxs md:text-sm font-semibold">
              {being.being_academy_points_earned}
            </h4>

            <img
              src={`/assets/academy/icons/being_coin.png`}
              className="ml-1 h-4 md:h-6"
              alt="Being coin"
            />
          </div>
        </div>
      </div>

      <button
        disabled={modeSelected}
        onClick={onClick}
        className={`flex justify-between items-center ${
          modeSelected ? "opacity-40" : "opacity-100"
        } transition-all border-2  px-1 py-1 md:px-2 md:py-2 rounded-full font-semibold text-xxs md:text-sm ${
          being.being_on_academy == "true"
            ? " bg-darkGray border-lightGray"
            : "button_gradient_primary border-lightBlue"
        }  `}
      >
        {being.being_on_academy == "true" ? "Stop Training" : "Start Training"}
        <img
          src={`/assets/academy/icons/${
            being.being_on_academy == "true" ? "exit.png" : "ship.png"
          }`}
          className="ml-1 h-3 md:h-6"
          alt="ship Beings Academy"
        />
      </button>
    </div>
  );
};

export default BeingCard;
