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

export const getStoreTypeFilter = async (type: string) => {
  try {
    const response = await axiosInstance.get(
      `/store/search?category=${type}&pageSize=40`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    return null;
  }
};
