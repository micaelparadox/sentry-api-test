import { ArgumentsHost, BadRequestException, Catch, HttpException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { ErrorLoggerService } from '../error-logger.service';
import { BaseExceptionFilter } from "@nestjs/core";

@Injectable()
@Catch(Error, HttpException, BadRequestException)
export class CustomExceptionFilter extends BaseExceptionFilter {
  constructor(private errorLogger: ErrorLoggerService) {
    super();
  }

  catch(exception: HttpException, host: ArgumentsHost) {
    if (!(exception instanceof UnauthorizedException || exception instanceof NotFoundException)) {
      this.errorLogger.sendLog(exception)
    }
    super.catch(exception, host);
  }
}