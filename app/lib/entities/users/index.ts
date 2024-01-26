import { Entity } from "../../types/base";

export interface Account extends Entity {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
}

export interface User extends Entity {
  id: string;
  name?: string;
  email?: string;
  username?: string;
  phoneNumber?: string;
  gender?: "MALE" | "FEMALE" | "UNKNOWN";
  accountVerified?: Date;
  image?: string;
  password?: string;
  lastLogin?: Date;
  active: boolean;
  accounts: Account[];
}
