import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import listContactsService from "../../services/contacts/listContacts.service";

const listContactsController = async (req: Request, res: Response) => {
  const { id } = req.user;
  const contacts = await listContactsService(id);
  res.status(200).json(instanceToPlain(contacts));
};

export default listContactsController;
