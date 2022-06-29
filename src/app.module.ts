import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { UsersModule } from './users/users.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './errorLogs/exceptions/http-error-exception.filter';
import { ErrorLoggerModule } from './errorLogs/error-logs.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,

    // A unica dependencia na Raiz do projeto que é exatamente o Modulo do ErrorLogger.
    ErrorLoggerModule
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  }],
})
export class AppModule { }
