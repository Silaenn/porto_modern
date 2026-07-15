import React from "react";

const SvgIcon = ({ children, size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" style={{imageRendering: "pixelated"}}>
    {children}
  </svg>
);

export const FolderIcon = ({ size }) => (
  <SvgIcon size={size}>
    <rect x="4" y="8" width="24" height="20" fill="#FFD700" rx="1" />
    <rect x="4" y="8" width="24" height="4" fill="#FFA500" rx="1" />
    <rect x="8" y="4" width="12" height="5" fill="#FFD700" rx="1" />
    <rect x="8" y="4" width="12" height="3" fill="#FFA500" rx="1" />
    <rect x="7" y="12" width="18" height="2" fill="#E6C200" />
    <rect x="7" y="16" width="14" height="2" fill="#E6C200" />
    <rect x="7" y="20" width="16" height="2" fill="#E6C200" />
  </SvgIcon>
);

export const NoteIcon = ({ size }) => (
  <SvgIcon size={size}>
    <rect x="6" y="2" width="20" height="26" fill="#FFF" rx="1" stroke="#808080" strokeWidth="1" />
    <rect x="6" y="2" width="20" height="4" fill="#000080" rx="1" />
    <rect x="9" y="10" width="14" height="1.5" fill="#C0C0C0" />
    <rect x="9" y="14" width="10" height="1.5" fill="#C0C0C0" />
    <rect x="9" y="18" width="13" height="1.5" fill="#C0C0C0" />
    <rect x="9" y="22" width="8" height="1.5" fill="#C0C0C0" />
  </SvgIcon>
);

export const BriefcaseIcon = ({ size }) => (
  <SvgIcon size={size}>
    <rect x="6" y="10" width="20" height="18" fill="#8B4513" rx="2" />
    <rect x="6" y="10" width="20" height="4" fill="#A0522D" rx="1" />
    <rect x="10" y="4" width="12" height="8" fill="#8B4513" rx="2" />
    <rect x="10" y="4" width="12" height="3" fill="#A0522D" rx="1" />
    <rect x="14" y="16" width="4" height="6" fill="#6B3410" rx="1" />
    <rect x="13" y="16" width="6" height="2" fill="#6B3410" />
  </SvgIcon>
);

export const GearIcon = ({ size }) => (
  <SvgIcon size={size}>
    <circle cx="16" cy="16" r="6" fill="#808080" />
    <circle cx="16" cy="16" r="4" fill="#C0C0C0" />
    <rect x="14" y="6" width="4" height="6" fill="#808080" rx="1" />
    <rect x="14" y="20" width="4" height="6" fill="#808080" rx="1" />
    <rect x="6" y="14" width="6" height="4" fill="#808080" rx="1" />
    <rect x="20" y="14" width="6" height="4" fill="#808080" rx="1" />
    <rect x="8.5" y="8.5" width="5" height="5" fill="#808080" rx="1" transform="rotate(-45, 11, 11)" />
    <rect x="18.5" y="18.5" width="5" height="5" fill="#808080" rx="1" transform="rotate(-45, 21, 21)" />
  </SvgIcon>
);

export const MailIcon = ({ size }) => (
  <SvgIcon size={size}>
    <rect x="4" y="8" width="24" height="18" fill="#FFF" rx="1" stroke="#808080" strokeWidth="1" />
    <polygon points="4,8 16,18 28,8" fill="#C0C0C0" />
    <rect x="4" y="8" width="24" height="4" fill="#000080" rx="1" />
    <line x1="4" y1="12" x2="16" y2="20" stroke="#808080" strokeWidth="1" />
    <line x1="28" y1="12" x2="16" y2="20" stroke="#808080" strokeWidth="1" />
  </SvgIcon>
);

export const ComputerIcon = ({ size }) => (
  <SvgIcon size={size}>
    <rect x="4" y="3" width="24" height="18" fill="#C0C0C0" rx="1" stroke="#808080" strokeWidth="1" />
    <rect x="6" y="6" width="20" height="12" fill="#000080" />
    <rect x="8" y="8" width="16" height="8" fill="#FFF" />
    <rect x="10" y="23" width="12" height="2" fill="#808080" />
    <rect x="7" y="25" width="18" height="3" fill="#C0C0C0" rx="1" stroke="#808080" strokeWidth="1" />
    <rect x="14" y="21" width="4" height="2" fill="#808080" />
  </SvgIcon>
);

const iconMap = {
  folder: FolderIcon,
  note: NoteIcon,
  briefcase: BriefcaseIcon,
  gear: GearIcon,
  mail: MailIcon,
  computer: ComputerIcon,
};

const DesktopAppIcon = ({ name, size = 32 }) => {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} />;
};

export default DesktopAppIcon;
