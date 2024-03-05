import { Entity } from "../../types/base";
import { UploadFile } from "../files";

export interface Agent extends Entity {
  id: string;
  firstName: string;
  lastName: string;
  bio: string;
  contacts: AgentContact[];
  memberShips: AgencyMembership[];
  user?: string;
  profilePic?: UploadFile;
  specialties?: string[];
  licenses?: Record<string, any>; //TODO make required in 2nd mvp
  achievements?: Record<string, any>;
  facebook?: string;
  linkedIn?: string;
  twitter?: string;
  instagram?: String;
}

export interface AgentContact extends Entity {
  agentId?: string;
  agent?: Agent;
  email: string;
  phoneNumber: string;
  address: string;
}

export interface AgencyMembership extends Entity {
  agentId?: string;
  agent?: Agent;
  agency: string;
  note?: string;
}
