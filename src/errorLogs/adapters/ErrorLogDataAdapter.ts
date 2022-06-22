import { LogData } from "../interfaces/LogData";

export class ErrorLogDataAdapter implements LogData {

    constructor(public name: string, public message: string, public stack?: any) {
        this.name = name;
        this.message = message;
        this.stack = stack;
    }
}