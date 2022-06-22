import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { ErrorLogSentryModule } from 'src/errorLogs/error-logs.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  imports: [ErrorLogSentryModule]
})
export class AuthModule { }
