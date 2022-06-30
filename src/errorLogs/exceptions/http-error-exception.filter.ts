import { ExceptionFilter, Catch, ArgumentsHost, HttpException, BadRequestException, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorLogger } from '../error-logger';

enum UserResponse {
    notFound = 404,
    UnAuthorized = 401,
  }
  @Injectable()
  @Catch(Error, HttpException, BadRequestException)
  export class HttpExceptionFilter implements ExceptionFilter

  {
    constructor(private errorLogger: ErrorLogger){
      //estou injetando a dependencia do errorlogger usando this.errorLogger.sendLog(exception) que é de fato a exception em sí.
    }
    
  catch(exception: HttpException, host: ArgumentsHost) {
    
    // console.log('na root')
    const ctx = host.switchToHttp();
    
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    console.debug(exception)
    const status = exception.getStatus();
    
    if (exception.getStatus() != UserResponse.UnAuthorized && exception.getStatus() != UserResponse.notFound) {
      this.errorLogger.sendLog(exception)
     
    }
    // console.log(exception.getStatus())
    // console.log("entrou no if irmão")
    // // console.log(response)
    return response
    .status(status)
    // .json({
    //     statusCode: status,
    //     timestamp: new Date().toISOString(),
    //     path: request.url,
    //   });
    
    
    
    
  }
}