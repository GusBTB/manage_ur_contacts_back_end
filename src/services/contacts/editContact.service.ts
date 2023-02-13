import { IUserUpdate } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/User.entity";
import { AppError } from "../../errors/appError";
import { IContactUpdate } from "../../interfaces/users/contacts";
import { Contact } from "../../entities/Contacts.entity";

export const editContactService = async (
  contact_id: string,
  req: IContactUpdate,
  id: string
) => {
  const usersRepository = AppDataSource.getRepository(User);
  const contactsRepository = AppDataSource.getRepository(Contact);

  const userFind = await usersRepository.findOneBy({
    id: id,
  });
  const contactFind = await contactsRepository.findOneBy({ id: contact_id });

  if (!contactFind) {
    throw new AppError(404, "Contact not found");
  }

  if (contactFind.user.id !== userFind?.id) {
    throw new AppError(403, "Can't edit this contact");
  }

  await contactsRepository.update(contactFind.id, req);

  const contactFond = await contactsRepository.findOneBy({ id: contact_id });

  // const { password, ...rest } = userFind;

  return contactFond;
};

export default editContactService;
