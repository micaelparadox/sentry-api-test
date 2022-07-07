import { SeverityLevel, SeverityLevels } from "./severity-level";

export class BaseException extends Error {
  readonly severity: SeverityLevels;

  constructor(message: string, severity: keyof typeof SeverityLevel) {
    super(message);
    this.severity = severity;
  }
}
