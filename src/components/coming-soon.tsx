export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="coming-soon">
      <h1 className="sr-only">{title}</h1>
      <svg
        width="100%"
        viewBox="0 0 600 420"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        style={{ maxWidth: 680, display: "block", margin: "0 auto" }}
      >
        <title>{title} coming soon</title>
        <circle
          cx="300"
          cy="190"
          r="120"
          fill="none"
          stroke="#72b83e"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          opacity="0.5"
        />
        <g transform="translate(300,190)">
          <g transform="rotate(15)">
            <circle cx="0" cy="0" r="46" fill="none" stroke="#72b83e" strokeWidth="3" opacity="0.9" />
            <g fill="#72b83e">
              <rect x="-6" y="-58" width="12" height="20" rx="2" />
              <rect x="-6" y="38" width="12" height="20" rx="2" />
              <rect x="-58" y="-6" width="20" height="12" rx="2" />
              <rect x="38" y="-6" width="20" height="12" rx="2" />
            </g>
            <circle cx="0" cy="0" r="18" fill="#0c0c0c" />
          </g>
        </g>
        <text
          x="300"
          y="310"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="46"
          fontWeight="800"
          fill="#ffffff"
          letterSpacing="2"
        >
          COMING SOON
        </text>
        <text
          x="300"
          y="350"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="18"
          fill="rgba(255,255,255,0.55)"
          letterSpacing="1"
        >
          We&apos;re working on something great
        </text>
      </svg>
    </div>
  );
}
