import { Injectable } from "@nestjs/common";
import { ConsoleLoggerAdapter } from "./adapters/error-log-console-log.adapter";
import { SentryLoggerAdapter } from "./adapters/error-log-sentry-adapter";
import { LogData } from "./interfaces/log-data.interface";

type AcceptbleLogServices = SentryLoggerAdapter | ConsoleLoggerAdapter

@Injectable()
export class ErrorLogger {
    constructor(private sentryLoggerAdapter: SentryLoggerAdapter, private consoleLoggerAdapter: ConsoleLoggerAdapter){

    }
    private LogServices: AcceptbleLogServices [] = [this.sentryLoggerAdapter, this.consoleLoggerAdapter]
    async sendLog(error: Error){
        await Promise.all(this.LogServices.map(async (LogService) => {
            return LogService.log(this.convertToLogData(error));
        }))
    }
    private convertToLogData(error: Error): LogData {
        return error
    }
}