import axiosInstance from "../axios";

const register = async (
  email: string,
  password: string,
  firstname: string,
  lastname: string
) => {
  try {
    const response = await axiosInstance.post("/auth/register", {
      email,
      password,
      firstname,
      lastname,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const login = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { register, login };
