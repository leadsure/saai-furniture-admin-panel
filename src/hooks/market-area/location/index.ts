import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { baseUrl } from "../../../constant";
import { Location } from "../state";

export const useGetlocation = (body: { cityId: string }) => {
  const query = useQuery({
    queryKey: ["get-location"],
    queryFn: async () => {
      const { data } = await axios.post(
        `${baseUrl}/market-area/location`,
        body
      );

      return data as {
        locations: Location[];
      };
    },
  });
  return { ...query, data: query.data };
};

export const useAddLocation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["adding-location"],
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
      toast.loading("adding location", { id: "adding-location" });

      const { data } = await axios.post(
        `${baseUrl}/market-area/${userType}/location/add`,
        body,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-location"] });
      toast.success("added successfully", { id: "adding-location" });
    },
    onError: (error) => {
      // @ts-ignore
      const message = error.response.data.message;
      toast.error(message ? message : "error", { id: "adding-location" });
    },
  });
  return { addLocationMutation: mutation };
};

export const useDeleteLocation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["deleted-location"],
    mutationFn: async ({ id, userType }: { id: string; userType: string }) => {
      let token;
      if (userType === "admin") {
        token = localStorage.getItem("saai-admin-token");
      } else {
        token = localStorage.getItem("saai-sub-admin-token");
      }
      toast.loading("deleting location", { id: "deleting-location" });
      const data = (
        await axios.delete(
          `${baseUrl}/market-area/${userType}/location/delete`,
          {
            data: { id },
            headers: { Authorization: `Bearer ${token}` },
          }
        )
      ).data;
      return data;
    },
    onSuccess: () => {
      toast.success("deleted successfully", { id: "deleting-location" });
      queryClient.invalidateQueries({ queryKey: ["get-location"] });
    },
    onError: () => {
      toast.error("Error", { id: "deleting-location" });
    },
  });
  return { deleteLocationMutation: mutation };
};

export const useUpdatelocation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["update-location"],
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
      toast.loading("updating location", { id: "update-location" });
      const data = (
        await axios.put(
          `${baseUrl}/market-area/${userType}/location/update`,
          {
            id,
            ...body,
          },
          {
            headers: {
              Authorization: `Bearere ${token}`,
            },
          }
        )
      ).data;

      return data;
    },
    onSuccess: () => {
      toast.success("successfull", { id: "update-location" });
      queryClient.invalidateQueries({ queryKey: ["get-location"] });
    },
    onError: () => {
      toast.error("error", { id: "update-location" });
    },
  });

  return { updateCityMutaion: mutation };
};
