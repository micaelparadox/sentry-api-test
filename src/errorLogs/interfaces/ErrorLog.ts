import { HttpException } from "@nestjs/common";

export abstract class ErrorLog {
    
    abstract sendLog(): void;
}