import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { baseUrl } from "../../constant";

export interface CategoryDesign {
  id: string;
  title: string;
  description: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  para1: string;
  para2: string;
  para3: string;
  para4: string;
  imageUrl: string;
}

export interface CategoryProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const useGetCategory = () => {
  const query = useQuery({
    queryKey: ["get-category"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/category`);

      return data as {
        categories: CategoryProps[];
      };
    },
  });
  return { ...query, categories: query.data?.categories };
};

export const useGetCategoryById = (body: object) => {
  const query = useQuery({
    queryKey: ["get-category-by-id"],
    queryFn: async () => {
      const data = (await axios.post(`${baseUrl}/category/title`, body)).data;

      console.log(data);
      return data as { category: CategoryProps };
    },
  });

  return { ...query, category: query.data?.category };
};

export const useAddCategory = (resetStates: any) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["adding-category"],
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
      toast.loading("adding project", { id: "adding-category" });

      const { data } = await axios.post(
        `${baseUrl}/category/${userType}/create`,
        body,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-category"] });
      toast.success("added successfully", { id: "adding-category" });
      resetStates();
    },
    onError: (error) => {
      // @ts-ignore
      const message = error.response.data.message;
      toast.error(message ? message : "error", { id: "adding-category" });
    },
  });
  return { addCategoryMutation: mutation, projectData: mutation.data };
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["deleted-category"],
    mutationFn: async ({ id, userType }: { id: string; userType: string }) => {
      let token;
      if (userType === "admin") {
        token = localStorage.getItem("saai-admin-token");
      } else {
        token = localStorage.getItem("saai-sub-admin-token");
      }

      toast.loading("deleting category", { id: "deleting-category" });
      const data = (
        await axios.delete(`${baseUrl}/category/${userType}/delete`, {
          data: { id },
          headers: { Authorization: `Bearer ${token}` },
        })
      ).data;
      return data;
    },
    onSuccess: () => {
      toast.success("deleted successfully", { id: "deleting-category" });
      queryClient.invalidateQueries({ queryKey: ["get-category"] });
    },
    onError: () => {
      toast.error("Error", { id: "deleting-category" });
    },
  });
  return { categoryDeleteMutation: mutation, data: mutation.data };
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["update-category"],
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
      toast.loading("updating project", { id: "update-category" });
      const data = (
        await axios.put(
          `${baseUrl}/category/${userType}/update`,
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
      toast.success("successfull", { id: "update-category" });
      queryClient.invalidateQueries({ queryKey: ["get-category"] });
    },
    onError: () => {
      toast.error("error", { id: "update-category" });
    },
  });

  return { mutation };
};
