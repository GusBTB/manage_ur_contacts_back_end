import { Contact } from "../../entities/Contacts.entity";
import { IContactRequest } from "../../interfaces/users/contacts";
import AppDataSource from "../../data-source";
import { User } from "../../entities/User.entity";

const createContactService = async ({
  name,
  email,
  cellphone,
  id,
}: IContactRequest) => {
  const contactsRepository = AppDataSource.getRepository(Contact);
  const usersRepository = AppDataSource.getRepository(User);

  const userFind = await usersRepository.findOneBy({ id: id });

  const contact = new Contact();
  contact.name = name;
  contact.email = email;
  contact.cellphone = cellphone;
  contact.user = userFind!;

  const newContact: Contact = await contactsRepository.save(contact);

  return newContact;
};

export default createContactService;
