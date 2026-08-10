export type CapabilityIconType =
  | "understand"
  | "design"
  | "build"
  | "lead"
  | "share";

type CapabilityIconProps = {
  type: CapabilityIconType;
};

export default function CapabilityIcon({ type }: CapabilityIconProps) {
  if (type === "understand") {
    return (
      <svg
        className="capabilities__icon"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <line x1="10" y1="10" x2="24" y2="24" />
        <line x1="38" y1="10" x2="24" y2="24" />
        <line x1="10" y1="38" x2="24" y2="24" />
        <line x1="38" y1="38" x2="24" y2="24" />

        <circle cx="10" cy="10" r="3" />
        <circle cx="38" cy="10" r="3" />
        <circle cx="10" cy="38" r="3" />
        <circle cx="38" cy="38" r="3" />

        <rect x="19" y="19" width="10" height="10" rx="2" />
      </svg>
    );
  }

  if (type === "design") {
    return (
      <svg
        className="capabilities__icon"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <rect x="8" y="8" width="12" height="12" rx="2" />
        <rect x="28" y="8" width="12" height="12" rx="2" />
        <rect x="18" y="28" width="12" height="12" rx="2" />

        <line x1="20" y1="14" x2="28" y2="14" />
        <line x1="14" y1="20" x2="22" y2="28" />
        <line x1="34" y1="20" x2="26" y2="28" />
      </svg>
    );
  }

  if (type === "build") {
    return (
      <svg
        className="capabilities__icon"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <rect x="7" y="27" width="14" height="14" rx="2" />
        <rect x="27" y="27" width="14" height="14" rx="2" />
        <rect x="17" y="7" width="14" height="14" rx="2" />

        <line x1="24" y1="21" x2="24" y2="27" />
        <line x1="14" y1="27" x2="14" y2="24" />
        <line x1="34" y1="27" x2="34" y2="24" />
        <line x1="14" y1="24" x2="34" y2="24" />
      </svg>
    );
  }

  if (type === "lead") {
    return (
      <svg
        className="capabilities__icon"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <circle cx="10" cy="12" r="3" />
        <circle cx="10" cy="24" r="3" />
        <circle cx="10" cy="36" r="3" />

        <line x1="13" y1="12" x2="26" y2="24" />
        <line x1="13" y1="24" x2="26" y2="24" />
        <line x1="13" y1="36" x2="26" y2="24" />

        <path d="M26 24H39" />
        <path d="M34 19L39 24L34 29" />
      </svg>
    );
  }

  return (
    <svg
      className="capabilities__icon"
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <rect x="7" y="19" width="10" height="10" rx="2" />

      <line x1="17" y1="24" x2="27" y2="12" />
      <line x1="17" y1="24" x2="27" y2="24" />
      <line x1="17" y1="24" x2="27" y2="36" />

      <circle cx="34" cy="10" r="3" />
      <circle cx="34" cy="24" r="3" />
      <circle cx="34" cy="38" r="3" />

      <line x1="27" y1="12" x2="31" y2="10" />
      <line x1="27" y1="24" x2="31" y2="24" />
      <line x1="27" y1="36" x2="31" y2="38" />
    </svg>
  );
}