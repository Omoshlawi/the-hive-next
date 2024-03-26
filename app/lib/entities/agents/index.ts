import { Entity } from "../../types/base";
import { UploadFile } from "../files";
import { Person } from "../users";

export interface Agent extends Entity {
  id: string;
  bio: string;
  person: Person
  memberShips: AgencyMembership[];
  image: UploadFile;
  coverImage?: UploadFile;
  specialties?: string[];
  licenseNumber?: string | null;
  city: string;
  country: string;
  state: string;
  zipCode?: string;
  achievements: AgentArchievement[];
  facebook?: string;
  linkedIn?: string;
  twitter?: string;
  instagram?: string;
}

export interface AgentArchievement extends Entity {
  id: string;
  agentId?: string;
  agent?: Agent;
  attachments: Record<string, any>;
  description: string;
}

export interface AgencyMembership extends Entity {
  id: string;
  agentId?: string;
  agent?: Agent;
  agency: string;
  note?: string;
}
