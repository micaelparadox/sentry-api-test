import { Injectable } from "@nestjs/common";
import { captureEvent, Severity } from "@sentry/node"
import { LogAdapter } from "../interfaces/log-adapter.interface";
import { LogData } from "../interfaces/log-data.interface";
import { InjectSentry, SentryService } from "@ntegral/nestjs-sentry";
@Injectable()
export class SentryLoggerAdapter implements LogAdapter {

    constructor(@InjectSentry() private readonly sentry: SentryService) {
    }
    async log(logData: LogData) {
        // const scope = new Scope();
        // scope.setTag("localhost", "sentry");
        // scope.captureEvent(logData.message)
        captureEvent({
            message: logData.message,
            tags: {
              platform: process.platform
            },
            extra: {
              'Causa:': logData.stack ? logData.stack : logData.message,
              'stacktrace:': logData.stack,
            },
            level: Severity.Error,
            // release: '3.28',
            timestamp: new Date().getTime()
          });
        // this.sentry.instance().captureMessage(logData.message, () => scope);
        // this.sentry.instance().captureException(logData.message)

    }
}