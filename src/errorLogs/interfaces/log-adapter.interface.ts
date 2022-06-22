import { LogData } from "./log-data.interface";

export interface LogAdapter {
    log(logData: LogData): Promise<void>;
}