import { Module } from '@nestjs/common';
import { ConsoleLoggerAdapter } from './adapters/console-logger.adapter';
import { SentryLoggerAdapter } from './adapters/sentry-logger.adapter';
import { ErrorLoggerService } from './error-logger.service';


@Module({
    imports: [],
    providers: [
        ErrorLoggerService, SentryLoggerAdapter, ConsoleLoggerAdapter 
    ],
    exports: [
        ErrorLoggerService
    ]
})

export class ErrorLoggerModule {}
