import { Injectable } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { ConsoleLoggerAdapter } from "./adapters/error-log-console-log.adapter";
import { SentryLoggerAdapter } from "./adapters/sentry-logger.adapter";
import { LogData } from "./interfaces/log-data.interface";

type AcceptbleLogServices = SentryLoggerAdapter | ConsoleLoggerAdapter

@Injectable()
export class ErrorLogger extends BaseExceptionFilter {
    constructor(private sentryLoggerAdapter: SentryLoggerAdapter, private consoleLoggerAdapter: ConsoleLoggerAdapter) {
        super()
    }

    private LogServices: AcceptbleLogServices[] = [this.sentryLoggerAdapter, this.consoleLoggerAdapter]
    sendLog(error: Error) {
        
        this.LogServices.forEach((LogService) => {
            LogService.log(this.convertToLogData(error));
        })
    }

    private convertToLogData(error: Error): LogData {
        return error
    }

}