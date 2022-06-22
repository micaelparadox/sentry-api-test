import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ErrorLogSentryModule } from 'src/errorLogs/error-logs.module';
// import { LogModule } from 'src/BetaWiserLog/log.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [ErrorLogSentryModule]
})
export class UserModule {}
