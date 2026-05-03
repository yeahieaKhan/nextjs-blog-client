const API_URL = process.env.BACKEND_API;

export const blogService = {
  getAllPost: async function () {
    try {
      const res = await fetch(`${API_URL}/post`);
      const data = await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something went worng" } };
    }
  },
};
