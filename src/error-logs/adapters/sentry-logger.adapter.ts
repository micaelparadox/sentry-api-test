import { Injectable } from "@nestjs/common";
import * as Sentry from "@sentry/node" 
import { LogAdapter } from "../interfaces/log-adapter.interface";
import { BaseException } from "../base-exception";

@Injectable()
export class SentryLoggerAdapter implements LogAdapter {

    constructor() {
      /**
       * Referencia na Documentação: https://docs.sentry.io/platforms/node/ 
       * Inicializando dentro do construtor um objeto de inicializaçao do Sentry.
       * */

      Sentry.init({
        dsn: "https://98c19bb3d26c42f998a97c49809d418b@o61672.ingest.sentry.io/6505638",
        debug: true,
        environment: 'localhost',
        release: 'Testando Wiser'
      })
    } 

    
    async log(baseException: BaseException) {
        Sentry.captureEvent({
            message: baseException.message,
            tags: {
              platform: process.platform
            },
            extra: {
              'stacktrace:': baseException.stack,
            },
            level: Sentry.Severity.Error,
            release: '3.28' // Capturar automaticamente do package.json
          });
    }
}



//   this.sentry.error(baseException.message);
//   this.sentry.warn(baseException.message);
//   this.sentry.log(baseException.name, baseException.message);
//   this.sentry.debug(baseException.message);
//   this.sentry.verbose(baseException.message);
// this.sentry.instance().captureMessage(baseException.message, () => scope);
// this.sentry.instance().captureException(baseException.message)
// const scope = new Scope();
// scope.setTag("localhost", "sentry");
// scope.captureEvent(baseException.message)