import React from "react";
import { FileText, Briefcase, SettingsCog, Folder, Mail, Monitor } from "pixelarticons/react";

const withSize = (Icon, defaultSize = 32) => ({ size }) => (
  <span style={{ color: "#FFF", display: "inline-flex" }}>
    <Icon width={size || defaultSize} height={size || defaultSize} />
  </span>
);

export const NoteIcon = withSize(FileText);
export const BriefcaseIcon = withSize(Briefcase);
export const GearIcon = withSize(SettingsCog);
export const FolderIcon = withSize(Folder);
export const MailIcon = withSize(Mail);
export const ComputerIcon = withSize(Monitor);

export default ({ name, size = 32 }) => {
  const icons = {
    note: NoteIcon,
    briefcase: BriefcaseIcon,
    gear: GearIcon,
    folder: FolderIcon,
    mail: MailIcon,
    computer: ComputerIcon,
  };
  const Icon = icons[name];
  return Icon ? <Icon size={size} /> : null;
};
