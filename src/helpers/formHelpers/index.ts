import { MutableRefObject } from "react";
import toast from "react-hot-toast";

export const pushToCheckbox = (
  e: HTMLInputElement | null,
  checkbox: MutableRefObject<HTMLInputElement[]>
) => {
  checkbox.current.push(e!);
};

export const selectOnlyCheckBox = (
  checkedInput: HTMLInputElement | null,
  checkbox: MutableRefObject<HTMLInputElement[]>
) => {
  checkbox.current &&
    checkbox.current.map((checkbox) => {
      if (checkbox) {
        checkbox.checked = false;
      }
    });
  checkedInput!.checked = true;
};

export const resetAddAdminForm = (
  setName: any,
  setEmail: any,
  setPassword: any,
  setConfirmPassword: any,
  setPasswordType: any,
  setConfirmPasswordType: any,
  setUserType: any
) => {
  setName("");
  setEmail("");
  setPassword("");
  setConfirmPassword("");
  setPasswordType("");
  setConfirmPasswordType("");
  setUserType("");
};

export const handleImgInput = async (mutate: any) => {
  const imgInput = document.createElement("input");
  imgInput.setAttribute("type", "file"),
    imgInput.setAttribute("accept", "image/*");
  imgInput.addEventListener("change", () => {
    mutate(imgInput);
  });
  imgInput.click();
};

export const handleDescriptionLenght = (
  descriptionLenght: number,
  setDescriptionLetterLength: any
) => {
  if (descriptionLenght <= 500) {
    setDescriptionLetterLength(descriptionLenght);
  } else {
    toast.error("description should be less than 500 letter");
  }
};
