import { Injectable } from "@nestjs/common";
import { ConsoleLoggerAdapter } from "./adapters/console-logger.adapter";
import { SentryLoggerAdapter } from "./adapters/sentry-logger.adapter";
import { LogData } from "./interfaces/log-data.interface";

type AcceptbleLogServices = SentryLoggerAdapter | ConsoleLoggerAdapter

@Injectable()
export class ErrorLoggerService {
    constructor(private sentryLoggerAdapter: SentryLoggerAdapter, private consoleLoggerAdapter: ConsoleLoggerAdapter) {
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