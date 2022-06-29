import { Repository } from 'typeorm';
import { User as UserEntity } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>
  ) {}

  async createUser(user: CreateUserDto): Promise<UserEntity> {
    try {
      const newUser = this.usersRepository.create(user);
      return await this.usersRepository.save(newUser)
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('Endereço de email já está em uso');
      } else {
        throw new InternalServerErrorException(
          'Erro ao salvar o usuário no banco de dados',
        );
      }
    }
  }

}