import { ExceptionFilter, Catch, ArgumentsHost, HttpException, BadRequestException, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorLogger } from '../interfaces/error-logger.interface';
// import { ErrorLog } from '../interfaces/ErrorLog'

enum UserResponse {
    notFound = 404,
    UnAuthorized = 401,
  }
  @Injectable()
  @Catch(Error, HttpException, BadRequestException)
  export class HttpExceptionFilter implements ExceptionFilter 
  {
    constructor(private errorLog: ErrorLogger){

    }
  catch(exception: HttpException, host: ArgumentsHost) {
    
    // console.log('na root')
    const ctx = host.switchToHttp();

    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    console.log(exception)

    this.errorLog.sendLog(exception)
    if (exception.getStatus() === UserResponse.UnAuthorized || exception.getStatus() === UserResponse.notFound) {
      console.log("entrou gostoso")
      return response
        .status(status)
        .json({
          statusCode: status,
          timestamp: new Date().toISOString(),
          path: request.url,
        });
    }
  }
}