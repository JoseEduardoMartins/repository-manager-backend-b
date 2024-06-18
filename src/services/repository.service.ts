import { http } from "../config";

type repository = {
  id: number;
  name: string;
  owner: object;
};

export const findByLogin = async (login: string) => {
  try {
    const { data } = await http.get(`/users/${login}/repos`);
    return data?.map(({ owner, ...rest }: repository) => rest);
  } catch (error) {
    throw error;
  }
};
