import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useGetAdmin, useGetSubAdmin } from "../hooks";
import { useRecoilValue } from "recoil";
import { isAdmin } from "../store";

export const Protected: React.FC<{ component: ReactNode }> = ({
  component,
}) => {
  const { admin } = useGetAdmin();
  const { subAdmin } = useGetSubAdmin();
  const is_admin = useRecoilValue(isAdmin);
  if (admin || subAdmin || is_admin) return <div>{component}</div>;
  return <Navigate to={"/login"} />;
};
