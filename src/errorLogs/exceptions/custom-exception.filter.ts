import { ArgumentsHost, BadRequestException, Catch, HttpException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { ErrorLogger } from '../error-logger';
import { BaseExceptionFilter } from "@nestjs/core";

enum UserResponse {
  notFound = 404,
  UnAuthorized = 401,
}

@Injectable()
@Catch(Error, HttpException, BadRequestException)
export class CustomExceptionFilter extends BaseExceptionFilter {
  constructor(private errorLogger: ErrorLogger) {
    super();
  }

  catch(exception: HttpException, host: ArgumentsHost) {
    if (!(exception instanceof UnauthorizedException || exception instanceof NotFoundException)) {
      this.errorLogger.sendLog(exception)
    }
    super.catch(exception, host);
  }
}