"use client";

export class ValidationError extends Error {
  constructor(public errors: Record<string, string | string[]>) {
    super("Validation failed");
    this.name = "ValidationError";
    Error.captureStackTrace(this, ValidationError);
  }
}
