import { Module } from '@nestjs/common';
import { SentryModule } from '@ntegral/nestjs-sentry';
import { ConsoleLoggerAdapter } from './adapters/error-log-console-log.adapter';
import { SentryLoggerAdapter } from './adapters/error-log-sentry-adapter';
import { ErrorLogger } from './error-logger';


@Module({
    imports: [SentryModule],
    providers: [
        //qualquer outra Classe que tiver usando errorlogger, favor usar o ErrorLogSentryAdapter
        
        ErrorLogger, SentryLoggerAdapter, ConsoleLoggerAdapter
        // { provide: ErrorLogger, useClass: ConsoleLoggerAdapter }
        // { provide: ErrorLogger, useClass: ErrorLoggerElasticSearchAdapter } ## Opcional para respectivo serviço.
    ],
    exports: [
        ErrorLogger
    ]
})
export class ErrorLogSentryModule {}
