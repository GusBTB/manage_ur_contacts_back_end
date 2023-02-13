import { Express } from "express";
import createUserController from "../controllers/users/createUser.controller";
import { editUserController } from "../controllers/users/editUser.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";

const usersRoutes = (app: Express) => {
  app.post("/users", createUserController);
  app.patch("/users/:user_id", verifyAuthMiddleware, editUserController);
};

export default usersRoutes;
