import { Module } from '@nestjs/common';
import { ConsoleLoggerAdapter } from './adapters/error-log-console-log.adapter';
import { SentryLoggerAdapter } from './adapters/sentry-logger.adapter';
import { ErrorLogger } from './error-logger';


@Module({
    imports: [],
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

export class ErrorLoggerModule {}
