import { Module } from '@nestjs/common';
import { ErrorLogSentryAdapter } from './adapters/ErrorLogSentryAdapter';
import { ErrorLog } from './interfaces/ErrorLog';


@Module({
    providers: [
        { provide: ErrorLog, useClass: ErrorLogSentryAdapter }
    ],
    exports: [
        ErrorLog
    ]
})
export class ErrorLogSentryModule {}
