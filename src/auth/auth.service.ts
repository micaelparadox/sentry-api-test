import { HttpException, Injectable } from '@nestjs/common';
import { SentryLoggerAdapter } from 'src/errorLogs/adapters/error-log-sentry-adapter';
import { ErrorLogger } from 'src/errorLogs/error-logger';
import { LogData } from 'src/errorLogs/interfaces/log-data.interface'

@Injectable()
export class AuthService extends HttpException {
  constructor(private errorLog: ErrorLogger) {
    super('Unauthorized', 401);
  }

  users: any[] = [
    { name: 'John', password: '123145123' },
  ];

  async validateUser(userName: string, password: string): Promise<any> {
    const user = this.users.find(user => user.name === userName)
    if(user && user.password === password) {
      return user;
    }
    return null;
  }
}
