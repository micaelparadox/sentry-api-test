import { Module } from '@nestjs/common';
import { ErrorLogSentryAdapter } from './adapters/error-log-sentry-adapter';
import { ErrorLogger } from './interfaces/error-logger.interface';


@Module({
    providers: [
        //qualquer outra Classe que tiver usando errorlogger, favor usar o ErrorLogSentryAdapter
        
        { provide: ErrorLogger, useClass: ErrorLogSentryAdapter }
        // { provide: ErrorLogger, useClass: ErrorLoggerElasticSearchAdapter } ## Opcional para respectivo serviço.
    ],
    exports: [
        ErrorLogger
    ]
})
export class ErrorLogSentryModule {}
