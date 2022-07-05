import { BaseException } from "../base-exception";

export interface LogAdapter {
    log(baseException: BaseException): Promise<void>;
}