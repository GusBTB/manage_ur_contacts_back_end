import { Contact } from "../../entities/Contacts.entity";
import { IContactRequest } from "../../interfaces/users/contacts";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";

const deleteContactService = async (contact_id: string) => {
  const contactsRepository = AppDataSource.getRepository(Contact);

  const contactFind = await contactsRepository.findOneBy({ id: contact_id });

  if (!contactFind) {
    throw new AppError(404, "Contact not found");
  }

  await contactsRepository.delete({ id: contact_id });

  return { message: "Contact deleted" };
};

export default deleteContactService;
