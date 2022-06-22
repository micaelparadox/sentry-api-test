import { LogLevel, Module } from '@nestjs/common';
import { SentryModule } from '@ntegral/nestjs-sentry';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Severity } from '@sentry/types';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { UsersModule } from './users/users.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './errorLogs/exceptions/http-error-exception.filter';
import { ErrorLogSentryModule } from './errorLogs/error-logs.module';

@Module({
  imports: [
    SentryModule.forRoot({
      dsn: "https://98c19bb3d26c42f998a97c49809d418b@o61672.ingest.sentry.io/6505638",
      debug: true,
      environment: 'localhost',
      release: 'Testando Wiser',
      logLevels: [
        Severity.Fatal,
        Severity.Critical,
        Severity.Error,
        Severity.Warning,
      ] as LogLevel[],

    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    AuthModule,
    UsersModule,
    ErrorLogSentryModule,
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  }],
})
export class AppModule { }
