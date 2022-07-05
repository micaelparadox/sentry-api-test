import { Injectable } from "@nestjs/common";
import { SeverityLevels } from "@sentry/types";
import { ConsoleLoggerAdapter } from "./adapters/console-logger.adapter";
import { SentryLoggerAdapter } from "./adapters/sentry-logger.adapter";
import { BaseException } from "./base-exception";
import { SeverityLevel } from "./severity-level";

type AcceptbleLogServices = SentryLoggerAdapter | ConsoleLoggerAdapter

@Injectable()
export class ErrorLoggerService {
    constructor(private sentryLoggerAdapter: SentryLoggerAdapter) {
    }

    private LogServices: AcceptbleLogServices[] = [this.sentryLoggerAdapter]
    sendLog(error: Error) {

        this.LogServices.forEach((LogService) => {
            LogService.log(this.convertToBaseException(error));
        })
    }

    private convertToBaseException(error: Error): BaseException {
        console.log(SeverityLevel.ERROR)
        return new BaseException(error.message, SeverityLevel.ERROR)
    }

}