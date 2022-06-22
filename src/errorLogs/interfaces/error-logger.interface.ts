import { LogData } from "./log-data.interface";

export abstract class ErrorLogger {
    
    abstract sendLog(logData: LogData): void;
}