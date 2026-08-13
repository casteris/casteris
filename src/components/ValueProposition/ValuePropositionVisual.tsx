import GeometryNode from "../Geometry/GeometryNode";
import GeometryPath from "../Geometry/GeometryPath";
import "../Geometry/Geometry.css";

export default function ValuePropositionVisual() {
  return (
    <div className="value-proposition-visual" aria-hidden="true">
      <svg
        className="value-proposition-visual__svg"
        viewBox="0 0 320 1200"
        preserveAspectRatio="none"
        role="presentation"
      >
        <GeometryPath
          d="M206 0V210H160V475"
          tone="muted"
          className="value-proposition-visual__path value-proposition-visual__path--entry"
        />

        <GeometryNode
          cx={160}
          cy={475}
          variant="primary"
          className="value-proposition-visual__node"
        />

        <GeometryPath
          d="M160 475V720"
          tone="primary"
          className="value-proposition-visual__path"
        />

        <GeometryNode
          cx={160}
          cy={720}
          variant="primary"
          className="value-proposition-visual__node"
        />

        <GeometryPath
          d="M160 720V965"
          tone="secondary"
          className="value-proposition-visual__path"
        />

        <GeometryNode
          cx={160}
          cy={965}
          radius={8}
          variant="accent"
          className="value-proposition-visual__node"
        />

        <GeometryPath
          d="M160 965V1200"
          tone="muted"
          className="value-proposition-visual__path value-proposition-visual__path--continuation"
        />
      </svg>
    </div>
  );
}
