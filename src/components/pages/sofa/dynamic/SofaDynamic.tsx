import { useGetCategory, useGetCategoryById } from "../../../../hooks";
import { SofaCard } from "../../../ui";
import { SofaBanner } from "./Banner";
import { useParams } from "react-router-dom";

interface SofaProps {
  location?: string;
  title?: string;
}

export const SofaDynamicPage: React.FC<SofaProps> = () => {
  const { categoryName } = useParams();
  const createdTitle = categoryName?.split("-").join(" ").trim();

  const { categories } = useGetCategory();
  const { category } = useGetCategoryById({ title: createdTitle });
  return (
    <div className="w-screen min-h-screen flex flex-col  items-center">
      <SofaBanner title={category?.title} />

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-[10px]">
          <h1 className="text-[25px] mobile:text-[30px] font-bold  capitalize">
            {createdTitle}
          </h1>
          <div className="w-[100px] h-[3px] bg-[#B19777]"></div>
        </div>
        <div className="w-[90%] flex flex-wrap justify-center items-center gap-[40px] mt-[30px] mb-[50px]">
          {categories
            ?.filter(({ title }) => title.toLowerCase() !== "dining set")
            .map((data) => {
              return (
                <SofaCard
                  key={data.id}
                  title={data.title}
                  imageUrl={data.imageUrl}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
