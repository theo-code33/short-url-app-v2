import axiosInstance from "../axios";

const createUrl = async (baseUrl: string, user: number, userToken: string) => {
  try {
    const response = await axiosInstance.post(
      "/url",
      {
        baseUrl,
        user,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getUrl = async (slug: string, userToken: string) => {
  try {
    const response = await axiosInstance.get("/url", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      params: {
        slug,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getBaseUrl = async (slug: string, userToken: string) => {
  try {
    const response = await axiosInstance.get(`/url/${slug}/baseUrl`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateUrl = async (slug: string, baseUrl: string, userToken: string) => {
  try {
    const response = await axiosInstance.put(
      "/url",
      {
        baseUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        params: {
          slug,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteUrl = async (slug: string, userToken: string) => {
  try {
    const response = await axiosInstance.delete("/url", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      params: {
        slug,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { createUrl, getUrl, getBaseUrl, updateUrl, deleteUrl };
