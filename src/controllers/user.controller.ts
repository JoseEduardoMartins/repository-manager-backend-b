import { Request, Response } from "express";
import { http } from "../config";

export const find = async (req: Request, res: Response) => {
  try {
    const { login } = req.params;
    const { data: user } = await http.get(`/users/${login}`);
    const { data: repositories } = await http.get(`/users/${login}/repos`);

    res.status(200).json({
      ...user,
      repositories,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export default {
  find,
};
