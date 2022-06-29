import { Injectable } from "@nestjs/common";
import * as Sentry from "@sentry/node"
import { LogAdapter } from "../interfaces/log-adapter.interface";
import { LogData } from "../interfaces/log-data.interface";

@Injectable()
export class SentryLoggerAdapter implements LogAdapter {

    constructor() {
      //inicializando dentro do construtor um objeto de inicização do Sentry.
      Sentry.init({
        dsn: "https://98c19bb3d26c42f998a97c49809d418b@o61672.ingest.sentry.io/6505638",
        debug: true,
        environment: 'localhost',
        release: 'Testando Wiser'
      })
    } 

    
    async log(logData: LogData) {
        Sentry.captureEvent({
            message: logData.message,
            tags: {
              platform: process.platform
            },
            extra: {
              'Causa:': logData.stack ? logData.stack : logData.message,
              'stacktrace:': logData.stack,
            },
            level: Sentry.Severity.Error,
            release: '3.28',
            timestamp: new Date().getTime()
          });
    }
}



        //   this.sentry.error(logData.message);
        //   this.sentry.warn(logData.message);
        //   this.sentry.log(logData.name, logData.message);
        //   this.sentry.debug(logData.message);
        //   this.sentry.verbose(logData.message);
        // this.sentry.instance().captureMessage(logData.message, () => scope);
        // this.sentry.instance().captureException(logData.message)
        // const scope = new Scope();
        // scope.setTag("localhost", "sentry");
        // scope.captureEvent(logData.message)