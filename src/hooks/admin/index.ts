import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import axios from "axios";
import { baseUrl } from "../../constant";

export const useDefaultAdmin = () => {
  const query = useQuery({
    queryKey: ["default-login"],
    queryFn: async () => {
      const data = (await axios.get(`${baseUrl}/admin/default`)).data;
      return data;
    },
  });

  return { ...query, data: query.data };
};

// admion login query
export const useAdminLogin = (body: object) => {
  const query = useQuery({
    queryKey: ["admin-login"],
    queryFn: async () => {
      toast.loading("login in", {
        id: "admin-login",
      });
      const data = (await axios.post(`${baseUrl}/admin/login`, body)).data;
      if (data && data.token) {
        localStorage.setItem("saai-admin-token", data.token);
      }
      return data;
    },
    enabled: false,
  });

  return { ...query, admin: query.data };
};

// get  admin if token is present
export const useGetAdmin = () => {
  const query = useQuery({
    queryKey: ["get-admin"],
    queryFn: async () => {
      const token = localStorage.getItem("saai-admin-token");
      const { data } = await axios.get(`${baseUrl}/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
  });

  return { getAdminQuery: query, admin: query.data };
};

// add admin mutation
export const useAddAdmin = () => {
  const mutation = useMutation({
    mutationKey: ["adding-admin"],
    mutationFn: async (body: object) => {
      const token = localStorage.getItem("saai-admin-token");
      toast.loading("Creating Admin", { id: "creating-admin" });
      const data = await axios.post(`${baseUrl}/admin/signup`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
    onError: (error: any) => {
      // @ts-ignore
      const message = error.response.data.message;
      toast.error(message ? message : "error", { id: "creating-admin" });
    },
    onSuccess: () => {
      toast.success("successfully created", { id: "creating-admin" });
    },
  });

  return { addAdminMutation: mutation, admin: mutation.data };
};
// add admin mutation
export const useUpdateAdmin = () => {
  const mutation = useMutation({
    mutationKey: ["updating-admin"],
    mutationFn: async (body: object) => {
      const token = localStorage.getItem("saai-admin-token");
      toast.loading("Creating Admin", { id: "updating-admin" });
      const data = await axios.post(`${baseUrl}/admin/update`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
    onError: (error: any) => {
      // @ts-ignore
      const message = error.response.data.message;
      toast.error(message ? message : "error", { id: "updating-admin" });
    },
    onSuccess: () => {
      toast.success("successfully created", { id: "updating-admin" });
    },
  });

  return { ...mutation, admin: mutation.data };
};

export const useAddSubAdmin = () => {
  const mutation = useMutation({
    mutationKey: ["adding-admin"],
    mutationFn: async (body: object) => {
      const token = localStorage.getItem("saai-admin-token");
      toast.loading("Creating Admin", { id: "adding-sub-admin" });
      const data = await axios.post(`${baseUrl}/admin/add-sub-admin`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
    onError: (error: any) => {
      // @ts-ignore
      const message = error.response.data.message;
      toast.error(message ? message : "error", { id: "adding-sub-admin" });
    },
    onSuccess: () => {
      toast.success("successfully created", { id: "adding-sub-admin" });
    },
  });

  return { subAdminMutation: mutation, admin: mutation.data };
};
