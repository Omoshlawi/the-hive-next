import { Entity } from "../../types/base";

export interface UploadFile extends Entity {
  path: string;
  type?: "remote" | "local";
}
