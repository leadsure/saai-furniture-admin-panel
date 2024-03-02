import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { baseUrl } from "../../constant";

export const useUploadToAws = (
  setImageUrl: any,
  userType: "admin" | "sub-admin" | "client" | "sub-client" | undefined
) => {
  let token: string | null;
  if (userType === "admin") {
    token = localStorage.getItem("saai-admin-token");
  } else {
    token = localStorage.getItem("saai-sub-admin-token");
  }
  const mutation = useMutation({
    mutationKey: ["signed-url"],
    mutationFn: async (input: HTMLInputElement) => {
      toast.loading("uploading image", { id: "uploading-image" });
      const file: File | null | undefined = input.files?.item(0);
      if (!file) {
        return toast.error("please select a image", { id: "uploading-image" });
      }

      const { data } = await axios.post(
        `${baseUrl}/get-signed-url/${userType}`,
        {
          imageType: `${file?.type.split("/")[1]}`,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    },
    onSuccess: async (data, input) => {
      const file: File | null | undefined = input.files?.item(0);

      if (!file) {
        return toast.error("please select a image", { id: "uploading-image" });
      }
      const res = await axios.put(data.url, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      if (res.statusText === "OK") {
        toast.success("upload successfull", { id: "uploading-image" });
      }
      const url = new URL(data.url);
      const imagePath = `${url.origin}${url.pathname}`;
      setImageUrl(imagePath);
    },
    onError: () => {
      toast.error("error uploading image", { id: "uploading-image" });
    },
  });
  return { awsMutations: mutation, data: mutation.data };
};
