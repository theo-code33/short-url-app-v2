import { RegisterUserDto } from "../../types/types";
import axiosInstance from "../axios";

const findOneUserByEmail = async (email: string) => {
  try {
    const response = await axiosInstance.get(`/user/?email=${email}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
const updateUser = async (
  user: Partial<RegisterUserDto>,
  userToken: string
) => {
  try {
    const response = await axiosInstance.put("/user", user, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (userId: string, userToken: string) => {
  try {
    const response = await axiosInstance.delete(`/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { findOneUserByEmail, updateUser, deleteUser };
