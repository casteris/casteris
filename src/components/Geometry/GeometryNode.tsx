type GeometryNodeVariant = "primary" | "accent";

type GeometryNodeProps = {
  cx: number;
  cy: number;
  variant: GeometryNodeVariant;
  radius?: number;
  className?: string;
};

export default function GeometryNode({
  cx,
  cy,
  variant,
  radius = 7,
  className = "",
}: GeometryNodeProps) {
  const classes = [
    "geometry-node",
    `geometry-node--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <circle className={classes} cx={cx} cy={cy} r={radius} />;
}
