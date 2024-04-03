import { Entity } from "../../types/base";
import { Agent } from "../agents";
import { UploadFile } from "../files";
import { Person } from "../users";

export interface Agency extends Entity {
  id: string;
  name: string;
  description?: string;
  person: Person;
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
  archievements: AgentArchievement[];
  facebook?: string;
  linkedIn?: string;
  twitter?: string;
  instagram?: string;
}

export interface AgentArchievement extends Entity {
  id: string;
  agencyId?: string;
  agency?: Agency;
  attachments: UploadFile[];
  description: string;
}

export interface AgencyMembership extends Entity {
  id: string;
  agencyId?: string;
  agency?: Agency;
  agent: Partial<Agent>;
  note?: string;
}
