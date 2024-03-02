import React from "react";

interface SofaCardProp {
  imageUrl: string;
  title: string;
}

export const SofaCard: React.FC<SofaCardProp> = ({ imageUrl, title }) => {
  return (
    <div className="w-[300px] mobile:w-[400px] flex flex-col  items-center bg-white border border-gray-400 shadowww rounded-lg  p-[10px] cursor-pointer hover:scale-[1.1] transition-all duration-500">
      <img src={imageUrl} alt="sofa-img" className="w-[300px] h-[300px]" />
      <div className="w-[100%] flex flex-col justify-center gap-[20px]">
        <div className="w-[95%] h-[1px] bg-[#2e2e2e7b]"></div>
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <h3 className="text-center text-[20px] font-bold capitalize">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};
