export enum SeverityLevel {

    // SeverityLevel.KEY = "value";

    FATAL = "FATAL",
    ERROR = "ERROR",
    WARN = "WARN",
    INFO = "INFO",
    DEBUG = "DEBUG",
    TRACE = "TRACE",
}
export type SeverityLevels = keyof typeof SeverityLevel;