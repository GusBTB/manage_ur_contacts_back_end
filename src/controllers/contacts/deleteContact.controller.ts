import { Request, Response } from "express";
import deleteContactService from "../../services/contacts/deleteContact.service";

const deleteContactController = async (req: Request, res: Response) => {
  const { contact_id } = req.params;
  await deleteContactService(contact_id);
  return res.status(200).json({ message: "Contact deleted" });
};

export default deleteContactController;
