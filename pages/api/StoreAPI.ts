import { axiosInstance } from "@/pages/api/axiosInstance";
import axios from "axios";

export const getStoreBase = async () => {
  try {
    const response = await axiosInstance.get(`/store/search?pageSize=40`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};

export interface FilterProps {
  isPicked: boolean;
  name: string;
  category: "NONE" | "FOOD" | "CAFE" | "BEAUTY" | "CULTURE" | "ETC";
  pageNumber: number;
}

export const getStoreWithFilter = async ({
  isPicked = false,
  name = "",
  category = "NONE",
  pageNumber = 0,
}: FilterProps) => {
  try {
    const response = await axiosInstance.get(
      `/store/search?isPicked=${isPicked}${"&name=" + name}${
        "&category=" + category
      }&pageSize=40${"&pageNumber=" + pageNumber}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};
