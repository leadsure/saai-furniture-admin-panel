"use client";

import { BlogBanner } from "./Banner";

interface SofaProps {
  location?: string;
}

export const BlogPageDynamic: React.FC<SofaProps> = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center">
      <BlogBanner />
      <div className="w-screen flex flex-col items-center gap-[100px] p-[20px]">
        <div className="flex flex-col items-center  gap-[10px]">
          <h2 className="text-center text-[30px] font-[500]">
            3 Benefits Of Choosing Recliner Sofa Sets For Your Home
          </h2>
          <div className="w-[200px] h-[1px] bg-[#b19777ac]"></div>
        </div>
        <div className="w-screen flex flex-col items-center">
          <div>
            <img
              src={"/blog/one.jpg"}
              alt=""
              width={500}
              height={500}
              className="w-[600px] h-[600px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-[20px] mt-[20px]">
            <p className="w-[85%]">
              When it comes to furnishing your living space, comfort and style
              are paramount. In recent years, recliner sofa sets have emerged as
              popular choices for homeowners seeking to create cosy and inviting
              environments. Crafted with precision and care by Recliner Sofa Set
              Manufacturers in Delhi like Sai Furniture Art, these sets offer a
              range of benefits that go beyond mere relaxation. In this article,
              we explore three compelling reasons why choosing recliner sofa
              sets for your home is a wise investment in both comfort and style.
            </p>
            <div className="w-[85%] flex flex-col justify-center items-center">
              <h2 className="w-[100%] text-[20px] font-[500]">
                Ultimate Comfort: Unparalleled Relaxation and Support
              </h2>
              <p>
                One of the primary benefits of opting for recliner sofa sets is
                the unparalleled comfort they provide. Designed with ergonomic
                features such as padded armrests, lumbar support, and adjustable
                reclining mechanisms, these sets offer customised comfort
                tailored to your individual preferences.
              </p>
              <p>
                Whether you're unwinding after a long day at work or enjoying a
                movie night with family and friends, recliner sofa sets offer
                the perfect spot to kick back and relax. With their plush
                cushions and spacious seating areas, these sets cradle you in
                comfort, allowing you to fully unwind and rejuvenate your body
                and mind.
              </p>
              <p>
                Furthermore, it prioritises quality craftsmanship and attention
                to detail in every piece it produces. By choosing a recliner
                sofa set from this manufacturer, you can rest assured that
                you're investing in furniture that's built to last, providing
                years of comfort and enjoyment for you and your loved ones.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[20px] mt-[20px]">
            <p className="w-[85%]">
              When it comes to furnishing your living space, comfort and style
              are paramount. In recent years, recliner sofa sets have emerged as
              popular choices for homeowners seeking to create cosy and inviting
              environments. Crafted with precision and care by Recliner Sofa Set
              Manufacturers in Delhi like Sai Furniture Art, these sets offer a
              range of benefits that go beyond mere relaxation. In this article,
              we explore three compelling reasons why choosing recliner sofa
              sets for your home is a wise investment in both comfort and style.
            </p>
            <div className="w-[85%] flex flex-col justify-center items-center">
              <h2 className="w-[100%] text-[20px] font-[500]">
                Versatility and Functionality: Adaptable Furniture Solutions
              </h2>
              <p>
                In addition to their comfort-enhancing features, recliner sofa
                sets offer versatility and functionality that traditional sofas
                simply can't match. With their adjustable reclining mechanisms,
                these sets can easily transition from upright seating positions
                to fully reclined lounging positions, providing flexible options
                for relaxation and entertainment.
              </p>
              <p>
                Moreover, many recliner sofa sets also feature built-in sleeper
                sofa functionality, allowing them to double as comfortable beds
                for overnight guests. This added versatility makes recliner sofa
                sets ideal for homes with limited space or for anyone seeking
                multifunctional furniture solutions.
              </p>
              <p>
                As Sleeper Sofa Set Manufacturers in Delhi, Sai Furniture Art
                understands the importance of maximising space without
                compromising on comfort or style. By choosing a recliner sofa
                set from this manufacturer, you can enjoy the convenience of a
                sofa and bed combination without sacrificing quality or
                aesthetic appeal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
