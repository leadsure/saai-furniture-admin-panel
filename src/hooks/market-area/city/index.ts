import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { baseUrl } from "../../../constant";
import { City } from "../state";

export const useGetCity = () => {
  const query = useQuery({
    queryKey: ["get-city"],
    queryFn: async () => {
      const { data } = await axios.post(`${baseUrl}/market-area/city`);

      return data as {
        cities: City[];
      };
    },
  });
  return { ...query, cities: query.data?.cities };
};

export const useAddCity = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["adding-city"],
    mutationFn: async ({
      body,
      userType,
    }: {
      body: Object;
      userType: string;
    }) => {
      let token;
      if (userType === "admin") {
        token = localStorage.getItem("saai-admin-token");
      } else {
        token = localStorage.getItem("saai-sub-admin-token");
      }
      toast.loading("adding city", { id: "adding-city" });

      const { data } = await axios.post(
        `${baseUrl}/market-area/${userType}/city/add`,
        body,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-city"] });
      toast.success("added successfully", { id: "adding-city" });
    },
    onError: (error) => {
      // @ts-ignore
      const message = error.response.data.message;
      toast.error(message ? message : "error", { id: "adding-city" });
    },
  });
  return { cityMutation: mutation, city: mutation.data };
};

export const useDeleteCity = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["deleted-city"],
    mutationFn: async ({ id, userType }: { id: string; userType: string }) => {
      let token;
      if (userType === "admin") {
        token = localStorage.getItem("saai-admin-token");
      } else {
        token = localStorage.getItem("saai-sub-admin-token");
      }
      toast.loading("deleting city", { id: "deleting-city" });
      const data = (
        await axios.delete(`${baseUrl}/market-area/${userType}/city/delete`, {
          data: { id },
          headers: { Authorization: `Bearer ${token}` },
        })
      ).data;
      return data;
    },
    onSuccess: () => {
      toast.success("deleted successfully", { id: "deleting-city" });
      queryClient.invalidateQueries({ queryKey: ["get-city"] });
    },
    onError: () => {
      toast.error("Error", { id: "deleting-city" });
    },
  });
  return { deleteCityMutation: mutation };
};

export const useUpdateCity = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["update-city"],
    mutationFn: async ({
      id,
      body,
      userType,
    }: {
      id: string;
      body: object;
      userType: string;
    }) => {
      let token;
      if (userType === "admin") {
        token = localStorage.getItem("saai-admin-token");
      } else {
        token = localStorage.getItem("saai-sub-admin-token");
      }
      toast.loading("updating city", { id: "update-city" });
      const data = (
        await axios.put(
          `${baseUrl}/market-area/${userType}/city/update`,
          {
            id,
            ...body,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
      ).data;

      return data;
    },
    onSuccess: () => {
      toast.success("successfull", { id: "update-city" });
      queryClient.invalidateQueries({ queryKey: ["get-city"] });
    },
    onError: () => {
      toast.error("error", { id: "update-city" });
    },
  });

  return { updateCityMutaion: mutation };
};
