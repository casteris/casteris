import GeometryNode from "../Geometry/GeometryNode";
import GeometryPath from "../Geometry/GeometryPath";
import "../Geometry/Geometry.css";

export default function CasterisPathVisual() {
  return (
    <div className="casteris-path-visual" aria-hidden="true">
      <svg
        className="casteris-path-visual__svg"
        viewBox="0 0 200 1000"
        preserveAspectRatio="none"
        role="presentation"
      >
        <GeometryPath
          d="M100 0V100H65V300H135V500H65V700H135V900H100V1000"
          tone="muted"
          className="casteris-path-visual__line"
        />

        <GeometryNode cx={65} cy={100} variant="primary" />
        <GeometryNode cx={135} cy={300} variant="primary" />
        <GeometryNode cx={65} cy={500} variant="primary" />
        <GeometryNode cx={135} cy={700} variant="primary" />
        <GeometryNode cx={100} cy={900} radius={8} variant="accent" />
      </svg>
    </div>
  );
}
