import { MdLocationPin } from "react-icons/md";
import { useGetCity, useGetState } from "../../hooks";

export const MarketArea = () => {
  const { states } = useGetState();
  const { cities } = useGetCity();
  return (
    <div
      className="w-screen min-h-screen flex flex-col  items-center"
      id="market-area"
    >
      <div className="w-screen h-[30vh] flex justify-center items-center bg-[#00000098] gap-[20px]">
        <MdLocationPin className={"text-[100px] text-red-600"} />
        <h1 className="text-[40px] text-white font-bold">our locations</h1>
      </div>
      <div className="w-[90%] mt-[50px] flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[10px]">
          <h1 className="bg-[#424242ba] h-[30px] flex items-center pl-[10px] text-white text-[20px] font-bold rounded-md ">
            States
          </h1>
          <ul className="flex gap-[20px] items-center flex-wrap">
            {states?.map(({ name }) => {
              return (
                <li className=" h-[30px] flex justify-center items-center text-white font-bold bg-[#62626281] hover:bg-[#424242ba] rounded-md cursor-pointer box-content p-[6] pl-[10px] pr-[10px]">
                  {name}
                </li>
              );
            })}
          </ul>
        </div>

        {states?.map(({ name, citys }) => {
          return (
            <div className="flex flex-col gap-[10px]">
              <h1 className="bg-[#424242ba] h-[30px] flex items-center pl-[10px] text-white text-[20px] font-bold rounded-md ">
                {name}
              </h1>
              <ul className="flex gap-[20px] items-center">
                {citys.map(({ name }) => {
                  return (
                    <li className=" h-[30px] flex justify-center items-center text-white font-bold bg-[#62626281] hover:bg-[#424242ba] rounded-md cursor-pointer box-content p-[6] pl-[10px] pr-[10px]">
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        <div className="flex flex-col gap-[10px]">
          <h1 className="bg-[#424242ba] h-[30px] flex items-center pl-[10px] text-white text-[20px] font-bold rounded-md ">
            Cities
          </h1>
          <ul className="flex gap-[20px] items-center flex-wrap">
            {cities?.map(({ name }) => {
              return (
                <li className=" h-[30px] flex justify-center items-center text-white font-bold bg-[#62626281] hover:bg-[#424242ba] rounded-md cursor-pointer box-content p-[6] pl-[10px] pr-[10px]">
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
        {cities?.map(({ name, locations }) => {
          if (locations.length !== 0)
            return (
              <div className="flex flex-col gap-[10px]">
                <h1 className="bg-[#424242ba] h-[30px] flex items-center pl-[10px] text-white text-[20px] font-bold rounded-md ">
                  {name}
                </h1>
                <ul className="flex gap-[20px] items-center">
                  {locations.map(({ name }) => {
                    return (
                      <li className=" h-[30px] flex justify-center items-center text-white font-bold bg-[#62626281] hover:bg-[#424242ba] rounded-md cursor-pointer box-content p-[6] pl-[10px] pr-[10px]">
                        {name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          return <div></div>;
        })}
      </div>
    </div>
  );
};
