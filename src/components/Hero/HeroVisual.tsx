import GeometryNode from "../Geometry/GeometryNode";
import GeometryPath from "../Geometry/GeometryPath";
import "../Geometry/Geometry.css";

export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <svg
        className="hero-visual__svg"
        viewBox="0 0 520 620"
        role="presentation"
      >
        <GeometryPath
          d="M70 126H244"
          tone="muted"
          className="hero-visual__path hero-visual__path--delay-1"
        />

        <GeometryNode
          cx={244}
          cy={126}
          variant="primary"
          className="hero-visual__node hero-visual__node--primary-delay"
        />

        <GeometryPath
          d="M244 126V270H364"
          tone="primary"
          className="hero-visual__path hero-visual__path--delay-2"
        />

        <GeometryNode
          cx={364}
          cy={270}
          variant="primary"
          className="hero-visual__node hero-visual__node--primary-delay"
        />

        <GeometryPath
          d="M364 270V392H438"
          tone="secondary"
          className="hero-visual__path hero-visual__path--delay-3"
        />

        <GeometryNode
          cx={438}
          cy={392}
          radius={8}
          variant="accent"
          className="hero-visual__node hero-visual__node--accent-delay"
        />

        <GeometryPath
          d="M438 392V510H382V620"
          tone="muted"
          className="hero-visual__path hero-visual__path--continuation hero-visual__path--delay-4"
        />
      </svg>
    </div>
  );
}
