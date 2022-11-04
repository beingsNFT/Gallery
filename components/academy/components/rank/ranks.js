import userRanks from "../../../../services/beings_api/query/users_rank";
import GenerateJazzicon from "../../../../components/global/icons/jazzicon";
import { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { toast } from "react-toastify";
const RanksTable = ({ account }) => {
  const [ranks, setRanks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userRank, setUserRank] = useState("");

  useEffect(() => {
    if (account.length > 0) {
      userRanks()
        .then((res) => {
          setRanks(res);
          setUserRank(
            res.find((r) =>
              r.account.includes(
                account.toString().substring(account.toString().length - 5)
              )
            ).rank || "-"
          );
          setLoading(false);
        })
        .catch((err) => {
         
          setLoading(false);

        });
    }
  }, []);

  return (
    <div div className="relative pb-4 ">
      <div className="px-2 md:px-3 lg:px-6  flex justify-between  items-center h-14 md:h-20 border-b-2 border-primary">
        <h3 className="font-bold text-md md:text-xl">Ranking</h3>
        <div className="flex ">
          <img
            className="h-8 md:h-14 mr-4"
            src="/assets/academy/icons/rank_position.png"
          />
          <div className="flex flex-col">
            <h4 className="text-lightBlue font-semibold text-xxs md:text-sm  ">
              Position
            </h4>
            <h4 className="text-white font-semibold text-lg md:text-2xl ">
              {userRank}
            </h4>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto ranking overflow-y-auto  px-2 md:px-3 lg:px-6 relative rounded-lg mt-4 ">
        <table className="w-full text-sm text-left bg-secondary  rounded-2xl ">
          <thead className="text-xs md:text-sm text-lightLila font-semibold ">
            <tr>
              <th scope="col" className=" py-1 md:py-3 ">
                User
              </th>
              <th scope="col" className="py-1  md:py-3 ">
                Level
              </th>
              <th scope="col" className="py-1  md:py-3 ">
                Points
              </th>
              <th scope="col" className="py-1 md:py-3 ">
                Rank
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr className="bg-primary  ">
                <td colSpan="4">
                  <div className="flex justify-center py-4 items-center w-full">
                    <svg
                      className="block text-center animate-spin h-5  w-5 rounded-md bg-white"
                      viewBox="0 0 24 24"
                    ></svg>
                  </div>
                </td>
              </tr>
            ) : (
              ranks &&
              ranks.map((rank, index) => (
                <Fade cascade bottom key={index}>
                  <tr className="bg-primary rounded-full ">
                    <td className="  p-2 ">
                      <div className="flex items-center">
                        <GenerateJazzicon size={30} address={rank.account} />

                        <div className="ml-4">
                          <div className="text-sm leading-5 font-medium text-gray-900 dark:text-gray-100">
                            {`${rank.account
                              .toString()
                              .substring(0, 5)}...${rank.account
                              .toString()
                              .substring(rank.account.toString().length - 3)} `}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-sm leading-5 text-white">
                        {rank.level}
                      </div>
                    </td>

                    <td>
                      <div className="text-sm leading-5 text-white">
                        {rank.total_academy_points}
                      </div>
                    </td>
                    <td>
                      <div className="text-sm flex items-center leading-5 text-white">
                        {rank.rank}
                        {rank.rank == 1 && (
                          <img
                            className="w-8"
                            src="assets/gallery/icons/rarity.png"
                          />
                        )}
                      </div>
                    </td>
                  </tr>
                </Fade>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RanksTable;
