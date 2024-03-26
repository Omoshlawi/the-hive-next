import { Entity } from "../../types/base";
import { Agent } from "../agents";
import { UploadFile } from "../files";

export interface Agency extends Entity {
  id: string;
  name: string;
  description?: string;
  memberShips: AgencyMembership[];
  website?: string;
  logo: UploadFile;
  coverImage?: UploadFile;
  specialties: string[];
  tags: string[];
  email: string;
  phoneNumber: string;
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
  agencyId?: string;
  agency?: Agency;
  attachments: Record<string, any>;
  description: string;
}

export interface AgencyMembership extends Entity {
  id: string;
  agencyId?: string;
  agency?: Agency;
  agent: Partial<Agent>;
  note?: string;
}
