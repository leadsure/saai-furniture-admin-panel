import { useGetCategory } from "../../../hooks";
import { SofaCard } from "../../ui/SofaCard";
import { Link } from "react-router-dom";

export const Sofa = () => {
  const { categories } = useGetCategory();
  return (
    <div className="w-screen min-h-screen flex flex-col  items-center">
      <div
        className="relative w-screen h-[40vh] flex flex-col justify-center items-center bg-[#0000006e] bg-blend-multiply bg-cover bg-no-repeat bg-center gap-[10px]"
        style={{
          backgroundImage: "url('/sofa/banner-bg.jpeg')",
        }}
      >
        <h1 className="text-[35px] font-bold text-white box-content p-[6px] pl-[100px] pr-[100px] bg-[#00000085]">
          Sofa Set
        </h1>
      </div>
      {/* intro */}
      <div className="w-screen flex justify-center">
        <div className="w-screen   mobile:w-[80vw] flex flex-wrap justify-center  mt-[50px] mb-[50px] text-[18px] gap-[30px]">
          {categories?.map(({ id, title, imageUrl }) => {
            const link = title.split(" ").join("-");
            return (
              <Link key={id} to={`/sofa/${link}`}>
                <SofaCard title={title} imageUrl={imageUrl} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
