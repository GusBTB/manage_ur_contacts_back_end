import { Request, Response } from "express";
import { userEditService } from "../../services/users/userEdit.service";
import { instanceToPlain } from "class-transformer";

export const editUserController = async (req: Request, res: Response) => {
  const { user_id } = req.params;
  const { id } = req.user;

  const userEdited = await userEditService(user_id, req.body, id);

  return res
    .status(200)
    .json(instanceToPlain({ user: userEdited, message: "User updated" }));
};
