import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import axios from "axios";
import { baseUrl } from "../../constant";

// admion login query
export const useSubAdminLogin = (body: object) => {
  const query = useQuery({
    queryKey: ["admin-sub-login"],
    queryFn: async () => {
      toast.loading("login in", {
        id: "sub-admin-login",
      });
      const data = (await axios.post(`${baseUrl}/sub-admin/login`, body)).data;
      if (data && data.token) {
        localStorage.setItem("saai-sub-admin-token", data.token);
      }
      return data;
    },
    enabled: false,
  });

  return { query, subAdmin: query.data };
};

// get  admin if token is present
export const useGetSubAdmin = () => {
  const token = localStorage.getItem("saai-sub-admin-token");
  const query = useQuery({
    queryKey: ["get-sub-admin"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/sub-admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
  });

  return { getSubAdminQuery: query, subAdmin: query.data };
};

// add admin mutation
export const useUpdateSubAdmin = () => {
  const token = localStorage.getItem("saai-sub-admin-token");
  const mutation = useMutation({
    mutationKey: ["updating-sub-admin"],
    mutationFn: async (body: object) => {
      toast.loading("updating Admin", { id: "updating-sub-admin" });
      const data = await axios.post(`${baseUrl}/sub-admin/update`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
    onError: (error: any) => {
      // @ts-ignore
      const message = error.response.data.message;
      toast.error(message ? message : "error", { id: "updating-sub-admin" });
    },
    onSuccess: () => {
      toast.success("successfully updated", { id: "updating-sub-admin" });
    },
  });

  return { ...mutation, admin: mutation.data };
};
