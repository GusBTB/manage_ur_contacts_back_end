import { Request, Response } from "express";
import createContactService from "../../services/contacts/createContact.service";
import { IContactRequest } from "../../interfaces/users/contacts";

const createContactController = async (req: Request, res: Response) => {
  const { name, email, cellphone }: IContactRequest = req.body;
  const { id } = req.user;
  await createContactService({
    name,
    email,
    cellphone,
    id,
  });
  return res.status(201).json({ message: "Contact created" });
};

export default createContactController;
