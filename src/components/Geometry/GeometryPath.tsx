type GeometryPathTone = "muted" | "primary" | "secondary";

type GeometryPathProps = {
  d: string;
  tone: GeometryPathTone;
  className?: string;
};

export default function GeometryPath({
  d,
  tone,
  className = "",
}: GeometryPathProps) {
  const classes = [
    "geometry-path",
    `geometry-path--${tone}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <path pathLength="1" className={classes} d={d} />;
}
