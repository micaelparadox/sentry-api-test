import { Module } from '@nestjs/common';
import { ErrorLogSentryAdapter } from './adapters/error-log-sentry-adapter';
import { ErrorLogger } from './interfaces/error-logger.interface';


@Module({
    providers: [
        { provide: ErrorLogger, useClass: ErrorLogSentryAdapter }
    ],
    exports: [
        ErrorLogger
    ]
})
export class ErrorLogSentryModule {}
