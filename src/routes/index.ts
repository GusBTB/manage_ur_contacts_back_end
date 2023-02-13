import { Express } from "express";

import usersRoutes from "./users.routes";
import loginRoutes from "./login.routes";
import contactsRoutes from "./contacts.routes";

const routes = (app: Express) => {
  usersRoutes(app);
  loginRoutes(app);
  contactsRoutes(app);
};

export { routes };
