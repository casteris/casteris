export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <svg
        className="hero-visual__svg"
        viewBox="0 0 520 620"
        role="presentation"
      >
        <path
          pathLength="1"
          className="hero-visual__path hero-visual__path--muted"
          d="M70 126H244"
        />

        <circle
          className="hero-visual__node hero-visual__node--primary"
          cx="244"
          cy="126"
          r="7"
        />

        <path
          pathLength="1"
          className="hero-visual__path hero-visual__path--primary"
          d="M244 126V270H364"
        />

        <circle
          className="hero-visual__node hero-visual__node--primary"
          cx="364"
          cy="270"
          r="7"
        />

        <path
          pathLength="1"
          className="hero-visual__path hero-visual__path--secondary"
          d="M364 270V392H438"
        />

        <circle
          className="hero-visual__node hero-visual__node--accent"
          cx="438"
          cy="392"
          r="8"
        />

        <path
          pathLength="1"
          className="hero-visual__path hero-visual__path--continuation"
          d="M438 392V510H382V620"
        />
      </svg>
    </div>
  );
}
