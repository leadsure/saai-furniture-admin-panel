import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { baseUrl } from "../../../constant";

export interface Location {
  id: string;
  name: string;
}

export interface City {
  id: string;
  name: string;
  locations: Location[];
}

export interface State {
  id: string;
  name: string;
  citys: City[];
}

export const useGetState = () => {
  const query = useQuery({
    queryKey: ["get-state"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/market-area/state`);

      return data as {
        states: State[];
      };
    },
  });
  return { ...query, states: query.data?.states };
};

export const useAddState = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["adding-state"],
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
      toast.loading("adding state", { id: "adding-state" });

      const { data } = await axios.post(
        `${baseUrl}/market-area/${userType}/state/add`,
        body,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-state"] });
      toast.success("added successfully", { id: "adding-state" });
    },
    onError: (error) => {
      // @ts-ignore
      const message = error.response.data.message;
      toast.error(message ? message : "error", { id: "adding-state" });
    },
  });
  return { addStateMutation: mutation, state: mutation.data };
};

export const useDeleteState = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["deleted-state"],
    mutationFn: async ({ id, userType }: { id: string; userType: string }) => {
      let token;
      if (userType === "admin") {
        token = localStorage.getItem("saai-admin-token");
      } else {
        token = localStorage.getItem("saai-sub-admin-token");
      }
      toast.loading("deleting state", { id: "deleting-state" });
      const data = (
        await axios.delete(`${baseUrl}/${userType}/state/delete`, {
          data: { id },
          headers: { Authorization: `Bearer ${token}` },
        })
      ).data;
      return data;
    },
    onSuccess: () => {
      toast.success("deleted successfully", { id: "deleting-state" });
      queryClient.invalidateQueries({ queryKey: ["get-state"] });
    },
    onError: () => {
      toast.error("Error", { id: "deleting-state" });
    },
  });
  return { deleteStateMutation: mutation };
};

export const useUpdateState = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["update-state"],
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
      toast.loading("updating state", { id: "update-state" });
      const data = (
        await axios.put(
          `${baseUrl}/market-area/${userType}/state/update`,
          {
            id,
            ...body,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
      ).data;

      return data;
    },
    onSuccess: () => {
      toast.success("successfull", { id: "update-state" });
      queryClient.invalidateQueries({ queryKey: ["get-state"] });
    },
    onError: () => {
      toast.error("error", { id: "update-state" });
    },
  });

  return { updateStateMutaion: mutation };
};
