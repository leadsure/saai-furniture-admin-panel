import React from "react";

interface IntroProp {
  location?: string;
}
const h2Style = "text-[20px] font-[500]";
const locationStyle = "font-bold capitalize";

export const Intro: React.FC<IntroProp> = ({ location }) => {
  return (
    <div className="mobile:w-[80%] flex  justify-center mt-[50px] text-[18px] max-mobile:p-[20px]">
      <div className="flex justify-center max-mobile:flex-col-reverse gap-[50px]">
        <div className="mobile:w-[60%] flex flex-col gap-[10px]">
          <p>
            Discover exquisite craftsmanship and timeless elegance with our
            Carved Sofa Sets in{" "}
            <span className={`${locationStyle}`}>
              {location && <span>, {location}</span>}
            </span>
            . These intricately designed pieces in
            <span className={`${locationStyle}`}>
              {location && <span>, {location}</span>}
            </span>{" "}
            are a testament to our dedication to quality and artistry. Elevate
            your living space in{" "}
            <span className={`${locationStyle}`}>
              {location && <span>, {location}</span>}
            </span>{" "}
            with our finely carved sofa sets, blending comfort with aesthetic
            allure
          </p>
          <h2 className={`${h2Style}`}>
            Wooden Carved Sofa Set Manufacturers{" "}
            <span className={`${locationStyle}`}>
              {location && <span>{location}</span>}
            </span>
          </h2>
          <p>
            Our skilled artisans in{" "}
            <span className={`${locationStyle}`}>
              {location && <span>, {location}</span>}
            </span>{" "}
            meticulously carve each sofa set, ensuring both beauty and
            durability. As leading Wooden Carved Sofa Set Manufacturers in{" "}
            <span className={`${locationStyle}`}>
              {location && <span>, {location}</span>}
            </span>
            , we take pride in creating pieces that exude sophistication and
            craftsmanship. Explore our range to find the perfect blend of style
            and functionality for your space in{" "}
            <span className={`${locationStyle}`}>
              {location && <span>, {location}</span>}
            </span>
            .
          </p>
          <h2 className={`${h2Style}`}>
            Wooden Carved Sofa Set Suppliers in{" "}
            <span className={`${locationStyle}`}>
              {location && <span>, {location}</span>}
            </span>
          </h2>
          <p>
            Our dedicated team ensures that you receive nothing but the finest
            pieces in{" "}
            <span className={`${locationStyle}`}>
              {location && <span>, {location}</span>}
            </span>
            . Elevate your living space with our beautifully crafted sofa sets,
            showcasing the rich tradition of woodworking in
            <span className={`${locationStyle}`}>
              {location && <span>, {location}</span>}
            </span>
            . We are one of the leading Wooden Carved Sofa Set Suppliers in{" "}
            <span className={`${locationStyle}`}>
              {location && <span>, {location}</span>}
            </span>
            .{" "}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <img
            src="/sofa/intro.jpeg"
            alt="sofa"
            className="w-[300px] h-[400px] rounded-md shadowww"
          />
        </div>
      </div>
    </div>
  );
};
