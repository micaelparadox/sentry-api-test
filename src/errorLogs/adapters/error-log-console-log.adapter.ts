import { Injectable } from "@nestjs/common";
import { LogAdapter } from "../interfaces/log-adapter.interface";
import { LogData } from "../interfaces/log-data.interface";


@Injectable()
export class ConsoleLoggerAdapter implements LogAdapter {
    async log(logData: LogData){
        console.log("opa", logData.message);
    }
}
