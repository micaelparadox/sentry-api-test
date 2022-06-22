import { HttpException, Injectable } from '@nestjs/common';
import { ErrorLogSentryAdapter } from 'src/errorLogs/adapters/ErrorLogSentryAdapter';
import { ErrorLog } from 'src/errorLogs/interfaces/ErrorLog';
import { LogData } from 'src/errorLogs/interfaces/LogData'

@Injectable()
export class AuthService extends HttpException {
  constructor(private errorLog: ErrorLog) {
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
