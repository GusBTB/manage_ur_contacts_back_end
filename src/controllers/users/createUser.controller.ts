import { Request, Response } from "express";
import createUsersService from "../../services/users/createUser.service";
import { IUserRequest } from "../../interfaces/users/index";

const createUserController = async (req: Request, res: Response) => {
  const { name, email, cellphone, password }: IUserRequest = req.body;

  const newUser = await createUsersService({
    name,
    email,
    cellphone,
    password,
  });

  return res.status(201).json(newUser);
};

export default createUserController;
