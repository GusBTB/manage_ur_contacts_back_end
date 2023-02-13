import { DataSource } from "typeorm";
import path from "path";
import "dotenv/config";
import { User } from "./entities/User.entity";
import { initial1676251513782 } from "./migrations/1676251513782-initial";
import { Contact } from "./entities/Contacts.entity";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/**.{js, ts}"],
      }
    : {
        type: "postgres",
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
        logging: true,
        synchronize: false,
        entities: [User, Contact],
        migrations: [initial1676251513782],
        // migrations: ["src/migrations/**.{js, ts}"],
      }
);

export default AppDataSource;
