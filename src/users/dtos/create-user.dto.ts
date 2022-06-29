import { UserRole } from "../user-roles.enum";

export class CreateUserDto {
    email: string;
    name: string;
    password: string;
    salt: string;
    role: UserRole;
  }