import { Request, Response } from "express";
import { findByLogin as findUser } from "../services/user.service";
import { findByLogin as findRepositories } from "../services/repository.service";

export const find = async (req: Request, res: Response) => {
  try {
    const { login } = req.params;
    const user = await findUser(login);
    const repositories = await findRepositories(login);

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
