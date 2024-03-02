import { Navbar } from "./ui";

export const Layout: React.FC<{ component: React.ReactNode }> = ({
  component,
}) => {
  return (
    <div className="flex flex-col w-screen">
      {/* navbar */}
      <div className="z-[2]">
        <Navbar />
      </div>
      {/* content */}
      <div>{component}</div>
      {/* footer */}
    </div>
  );
};
