"use client";

import { useEffect, useState } from "react";
import { useAddState, useGetAdmin, useGetSubAdmin } from "../../../hooks";
import toast from "react-hot-toast";

// input style
const inputStyle = `w-[90%] h-[55px] bg-transparent outline-none text-white text-[20px] border border-[#ffffff88] rounded-lg placeholder:text-white placeholder:text-[20px] p-[10px] `;

export const AddState = () => {
  const [name, setName] = useState("");
  const [userType, setUserType] = useState<"admin" | "sub-admin">();

  // checkbox refs
  const queryBody = {
    body: {
      name,
    },
    userType: userType!,
  };
  const { admin } = useGetAdmin();
  const { subAdmin } = useGetSubAdmin();
  const { addStateMutation } = useAddState();

  useEffect(() => {
    if (admin) {
      setUserType("admin");
    }
    if (subAdmin) {
      setUserType("sub-admin");
    }
  }, [admin, subAdmin]);
  return (
    <div className=" w-[350px] mobile:w-[500px] min-h-[250px] bg-[#999999] rounded-lg overflow-scroll z-[10]">
      <div className="w-[100%] h-[100%] flex flex-col items-center">
        <h1 className="text-white text-[25px] font-[500] mt-[20px]">
          Add State
        </h1>

        <div className="w-[100%]  flex flex-col items-center mt-[50px] gap-[30px]">
          <input
            type="text"
            placeholder="State Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className={inputStyle}
          />
        </div>
      </div>
      <div className="w-[100%] flex flex-col justify-center items-center mt-[20px] gap-[10px]">
        <button
          className="w-[90%] flex justify-center items-center text-white font-[500] bg-[#2F94C4] hover:bg-[#60b8e0] p-[10px] pl-[15px] pr-[15px] rounded-lg"
          onClick={() => {
            if (name === "") {
              return toast.error("title cannot be empty");
            }
            addStateMutation.mutate(queryBody);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};
