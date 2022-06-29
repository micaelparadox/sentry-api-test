import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { CreateAdminUserRequestDto } from './dtos/create-admin-user-request.dto';
import { UserRole } from './user-roles.enum';

@Injectable()
export class UsersService {
  constructor(
    private userRepository: UsersRepository,
  ) {}
  
  async createAdminUser(user: CreateAdminUserRequestDto): Promise<User> {
    if(user.password != user.passwordConfirmation) {
      throw new UnprocessableEntityException('Senhas não conferem');
    }
    return await this.userRepository.createUser({  
      name: user.name,
      email: user.email,
      password: bcrypt.hashSync(user.password, 10),
      salt: '10',
      role: UserRole.ADMIN,
    })
    // return user
  }
}