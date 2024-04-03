import { CookieSerializeOptions } from "cookie";

export const MEDIA_ROOT = "/media";
export const authCookieConfig = {
  name: "session-token",
  config: {
    MAX_AGE: 30 * 24 * 60 * 60,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  } as CookieSerializeOptions,
};
export const BASE_URL = "http://localhost:3000";

export const fileExtensionsColors: { [key: string]: string } = {
  // Images
  jpg: "#ff4081",
  jpeg: "#ff4081",
  png: "#ff4081",
  gif: "#ff4081",
  bmp: "#ff4081",
  svg: "#ff4081",
  tiff: "#ff4081",

  // Documents
  doc: "#4285f4",
  docx: "#4285f4",
  odt: "#4285f4",
  pdf: "#4285f4",
  xls: "#4285f4",
  xlsx: "#4285f4",
  ppt: "#4285f4",
  pptx: "#4285f4",
  txt: "#4285f4",

  // Audio
  mp3: "#03a9f4",
  ogg: "#03a9f4",
  wav: "#03a9f4",

  // Video
  mp4: "#ff5722",
  avi: "#ff5722",
  mkv: "#ff5722",
  mov: "#ff5722",

  // Code
  js: "#8bc34a",
  jsx: "#8bc34a",
  css: "#8bc34a",
  html: "#8bc34a",
  php: "#8bc34a",
  py: "#8bc34a",
  json: "#8bc34a",

  // Archive
  zip: "#e91e63",
  tar: "#e91e63",
  rar: "#e91e63",

  // Other
  xml: "#607d8b",
  sql: "#607d8b",
  exe: "#607d8b",
  default: "#9e9e9e", // Default color for unknown file types
};

export const amenities = [
  {
    id: "Free wifi",
    label: "Free wifi",
  },
  {
    id: "Secirity Camera",
    label: "Secirity Camera",
  },
  {
    id: "24 Hour Security",
    label: "24 Hour Security",
  },
  {
    id: "Swimming Pool",
    label: "Swimming Pool",
  },
  {
    id: "Conference Room",
    label: "Conference Room",
  },
  {
    id: "Tennis Court",
    label: "Tennis court",
  },
  {
    id: "Garadge",
    label: "Garadge",
  },
];

export const propertyTypes = [
  { id: "Apartment", label: "Apartment" },
  { id: "Mainsonet", label: "Mainsonet" },
  { id: "Vila", label: "Vila" },
  { id: "Bungalow", label: "Bungalow" },
  { id: "Mansion", label: "Mansion" },
  { id: "Studio", label: "Studio" },
];

export const propertyStatus = [
  { id: "on-rent", label: "On rent" },
  { id: "on-sale", label: "on Sale" },
];
