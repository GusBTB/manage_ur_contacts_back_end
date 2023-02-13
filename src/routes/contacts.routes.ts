import { Express } from "express";
import createContactController from "../controllers/contacts/createContact.controller";
import deleteContactController from "../controllers/contacts/deleteContact.controller";
import { editContactController } from "../controllers/contacts/editContact.controller";
import listContactsController from "../controllers/contacts/listContacts.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";

const contactsRoutes = (app: Express) => {
  app.post("/contacts", verifyAuthMiddleware, createContactController);
  app.patch(
    "/contacts/:contact_id",
    verifyAuthMiddleware,
    editContactController
  );
  app.delete(
    "/contacts/:contact_id",
    verifyAuthMiddleware,
    deleteContactController
  );
  app.get("/contacts", verifyAuthMiddleware, listContactsController);
};

export default contactsRoutes;
