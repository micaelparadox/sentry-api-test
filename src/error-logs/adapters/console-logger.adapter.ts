import { Injectable } from "@nestjs/common";
import { LogAdapter } from "../interfaces/log-adapter.interface";
import { BaseException } from "../base-exception";


@Injectable()
export class ConsoleLoggerAdapter implements LogAdapter {
    async log(baseException: BaseException){
        console.log(baseException);
    }
}
