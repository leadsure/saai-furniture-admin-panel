import { BlogCard } from "./BlogCard";
import { BlogBanner } from "./Banner";

interface SofaProps {
  location?: string;
}

export const blogObj: Array<{ imageUrl: string; title: string }> = [
  {
    imageUrl: "/blog/one.jpg",
    title: "3 benefit of choosing Recliner for your office",
  },
  {
    imageUrl: "/blog/one.jpg",
    title: "3 benefit of choosing Recliner for your office",
  },
  {
    imageUrl: "/blog/two.jpg",
    title: "3 benefit of choosing Recliner for your office",
  },
  {
    imageUrl: "/blog/two.jpg",
    title: "3 benefit of choosing Recliner for your office",
  },
];

export const BlogPage: React.FC<SofaProps> = ({ location }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center">
      <BlogBanner />
      <div className="w-screen flex flex-col items-center p-[20px] mobile:pt-[80px]">
        <div className="flex flex-col gap-[10px]">
          <h2 className="text-center text-[30px] font-[500]">Latest blogs</h2>
          <div className="w-[200px] h-[1px] bg-[#b19777ac]"></div>
        </div>
        <div className="mobile:w-[85vw] grid grid-cols-12 place-items-center gap-[100px] mobile:gap-[20px] mb-[100px]">
          {blogObj.map(({ imageUrl, title }, index) => {
            return (
              <BlogCard
                key={index}
                location={location}
                imageUrl={imageUrl}
                title={title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
