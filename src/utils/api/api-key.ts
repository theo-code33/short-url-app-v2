import axiosInstance from "../axios";

const createApiKey = async (userToken: string) => {
  try {
    const response = await axiosInstance.post("/api-key", undefined, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
  } catch (error) {}
};

const deleteApiKey = async (tokenId: string, userToken: string) => {
  try {
    const response = await axiosInstance.delete("/api-key", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      params: {
        tokenId,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { createApiKey, deleteApiKey };
