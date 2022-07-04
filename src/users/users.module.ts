import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ErrorLoggerModule } from 'src/error-logs/error-logger.module';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';

@Module({
  imports: [ErrorLoggerModule, TypeOrmModule.forFeature([User])],
  providers: [UsersService, UsersRepository],
  controllers: [UsersController],
})
export class UsersModule {}