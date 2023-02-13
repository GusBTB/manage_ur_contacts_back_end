import AppDataSource from "../../data-source";
import { User } from "../../entities/User.entity";
import { IUser, IUserRequest } from "../../interfaces/users";
import { AppError } from "../../errors/appError";
import { hash } from "bcrypt";

const createUserService = async ({
  name,
  email,
  cellphone,
  password,
}: IUserRequest) => {
  const usersRepository = AppDataSource.getRepository(User);

  if (!(name && email && password)) {
    throw new AppError(400, "Request has wrong format");
  }

  typeof name === "string"
    ? null
    : () => {
        throw new AppError(
          400,
          "Name/Email/Passowrd/Cellphone must be a string"
        );
      };
  typeof email === "string"
    ? null
    : () => {
        throw new AppError(
          400,
          "Name/Email/Passowrd/Cellphone must be a string"
        );
      };
  typeof password === "string"
    ? null
    : () => {
        throw new AppError(
          400,
          "Name/Email/Passowrd/Cellphone must be a string"
        );
      };
  typeof cellphone === "string"
    ? null
    : () => {
        throw new AppError(
          400,
          "Name/Email/Passowrd/Cellphone must be a string"
        );
      };

  const emailAlreadyExists = await usersRepository.findOne({
    where: { email: email },
  });

  if (emailAlreadyExists)
    throw new AppError(400, "Em-mail is already being used");

  const user = new User();
  user.name = name;
  user.email = email;
  user.cellphone = cellphone;
  user.password = await hash(password, 10);

  const newUser: User = await usersRepository.save(user);

  const userReturn: IUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    cellphone: user.cellphone,
    createdAt: newUser.createdAt,
  };

  return userReturn;
};

export default createUserService;
