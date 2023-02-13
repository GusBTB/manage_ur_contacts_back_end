import { IUserUpdate } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/User.entity";
import { AppError } from "../../errors/appError";

export const userEditService = async (
  user_id: string,
  req: IUserUpdate,
  id: string
) => {
  const usersRepository = AppDataSource.getRepository(User);

  const userFind = await usersRepository.findOneBy({
    id: user_id,
  });

  if (!userFind) {
    throw new AppError(404, "User not exists");
  }

  if (user_id !== id) {
    throw new AppError(403, "You can only edit yourself");
  }

  const userReturn = await usersRepository.update(user_id, req);

  const userUpdated = await usersRepository.findOneBy({
    id: user_id,
  });

  // const { password, ...rest } = userFind;

  return userUpdated;
};
