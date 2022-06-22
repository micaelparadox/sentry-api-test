import { Injectable } from '@nestjs/common';
import { InjectSentry, SentryService } from '@ntegral/nestjs-sentry';
import { Scope } from '@sentry/node';
import { ErrorLogSentryAdapter } from 'src/errorLogs/adapters/error-log-sentry-adapter';
import { ErrorLogger } from 'src/errorLogs/interfaces/error-logger.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UserService {
  constructor(
    @InjectSentry() private readonly sentry: SentryService,
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