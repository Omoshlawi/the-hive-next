import { Entity } from "../../types/base";
import { UploadFile } from "../files";

export interface Agent extends Entity {
  id: string;
  firstName: string;
  lastName: string;
  bio: string;
  memberShips: AgencyMembership[];
  user?: string;
  profilePic: UploadFile;
  specialties?: string[];
  licenseNumber?: string | null;
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
