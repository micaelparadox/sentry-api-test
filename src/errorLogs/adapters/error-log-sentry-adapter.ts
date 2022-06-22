import { ErrorLogger } from "../interfaces/error-logger.interface";

export class ErrorLogSentryAdapter implements ErrorLogger {
    
    sendLog(): void {

        // adicionar o Agente do Sentry || Elarstic criaria outro adapter implementando do ErrorLogger. 
        // implementar a logica de como eu devo enviar o log do error para o sentry
    }
}