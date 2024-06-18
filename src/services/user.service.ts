import { http } from "../config";

export const findByLogin = async (login: string) => {
  try {
    const { data } = await http.get(`/users/${login}`);
    return data;
  } catch (error) {
    throw error;
  }
};
