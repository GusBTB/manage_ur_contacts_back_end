import { Request, Response } from "express";
import { userEditService } from "../../services/users/userEdit.service";
import { instanceToPlain } from "class-transformer";
import editContactService from "../../services/contacts/editContact.service";

export const editContactController = async (req: Request, res: Response) => {
  const { contact_id } = req.params;
  const { id } = req.user;

  const editedContact = await editContactService(contact_id, req.body, id);

  return res
    .status(200)
    .json(instanceToPlain({ user: editedContact, message: "Contact updated" }));
};
