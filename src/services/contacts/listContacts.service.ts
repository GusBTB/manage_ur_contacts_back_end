import AppDataSource from "../../data-source";
import { Contact } from "../../entities/Contacts.entity";
import { User } from "../../entities/User.entity";

const listContactsService = async (id: string) => {
  const contactsRepository = AppDataSource.getRepository(Contact);

  const contactsFind = contactsRepository.find({ where: { user: { id: id } } });

  return contactsFind;
};
export default listContactsService;
