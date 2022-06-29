import { Injectable } from '@nestjs/common';
// import { InjectSentry, SentryService } from '@ntegral/nestjs-sentry';
import { Scope } from '@sentry/node';
import { SentryLoggerAdapter } from 'src/errorLogs/adapters/sentry-logger.adapter';
import { ErrorLogger } from 'src/errorLogs/error-logger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UserService {
  constructor(
    private readonly errorLog: ErrorLogger
  ) { }

  create(createUserDto: CreateUserDto) {
    if (createUserDto.name) {
      return createUserDto.name;
    }


  }

  findAll() {
    return `Retorno de todos os com Sucesso.`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
