import { Injectable } from "@nestjs/common";
import { ErrorLogger } from "../interfaces/error-logger.interface";
import { LogData } from "../interfaces/log-data.interface";


@Injectable()
export class ErrorLogConsoleLogAdapter implements ErrorLogger {
    sendLog(logData: LogData): void {
        console.log(logData)
    }
}
