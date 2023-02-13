import {
  Entity,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { User } from "./User.entity";
import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";

@Entity()
export class Contact {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ length: 128 })
  name: string;

  @Column({ length: 128, unique: true })
  email: string;

  @Column({ length: 128 })
  cellphone: string;

  @ManyToOne((type) => User, (user) => user.contacts, {
    onDelete: "CASCADE",
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: "user" })
  @Exclude()
  user: User;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
