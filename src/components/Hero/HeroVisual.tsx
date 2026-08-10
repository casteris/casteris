export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <svg
        className="hero-visual__svg"
        viewBox="0 0 520 520"
        role="presentation"
      >
        <path
          className="hero-visual__shape hero-visual__shape--primary"
          d="M82 112H294V252H178V350H82Z"
        />

        <path
          className="hero-visual__shape hero-visual__shape--neutral"
          d="M178 190H430V350H336V430H178Z"
        />

        <path
          className="hero-visual__line hero-visual__line--secondary"
          d="M82 350H178V430H336"
        />

        <rect
          className="hero-visual__block hero-visual__block--primary"
          x="66"
          y="334"
          width="32"
          height="32"
          rx="4"
        />

        <rect
          className="hero-visual__block hero-visual__block--accent"
          x="414"
          y="174"
          width="24"
          height="24"
          rx="4"
        />

        <path
          className="hero-visual__line hero-visual__line--neutral"
          d="M294 112V70H390"
        />
      </svg>
    </div>
  );
}