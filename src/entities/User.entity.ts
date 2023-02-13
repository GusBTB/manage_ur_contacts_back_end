import {
  Entity,
  Column,
  CreateDateColumn,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import "reflect-metadata";
import { Exclude } from "class-transformer";
import { Contact } from "./Contacts.entity";
import { v4 as uuid } from "uuid";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ length: 128 })
  name: string;

  @Column({ length: 128, unique: true })
  email: string;

  @Column({ length: 128 })
  cellphone: string;

  @Column({ length: 128 })
  @Exclude()
  password: string;

  @OneToMany((type) => Contact, (contact) => contact.user)
  contacts: Contact[];

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
