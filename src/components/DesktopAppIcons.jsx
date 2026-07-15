import React from "react";
import {
  FileText, Briefcase, Settings, Folder, Mail, Monitor,
} from "lucide-react";

const withSize = (Icon, defaultSize = 32) => ({ size }) => (
  <Icon size={size || defaultSize} />
);

export const NoteIcon = withSize(FileText);
export const BriefcaseIcon = withSize(Briefcase);
export const GearIcon = withSize(Settings);
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
