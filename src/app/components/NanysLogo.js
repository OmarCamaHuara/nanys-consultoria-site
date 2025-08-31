export function NanysLogo() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle accent */}
      <circle
        cx="25"
        cy="50"
        r="20"
        fill="url(#gradient1)"
        opacity="0.1"
      />
      
      {/* Decorative elements */}
      <circle cx="25" cy="50" r="3" fill="url(#gradient1)" />
      <circle cx="35" cy="40" r="2" fill="url(#gradient1)" opacity="0.6" />
      <circle cx="35" cy="60" r="2" fill="url(#gradient1)" opacity="0.6" />
      
      {/* Main text "Nany's" */}
      <text
        x="55"
        y="45"
        fill="url(#gradient1)"
        fontSize="24"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="600"
        letterSpacing="-0.5px"
      >
        Nany's
      </text>
      
      {/* Subtitle "Consultoria" */}
      <text
        x="55"
        y="68"
        fill="currentColor"
        fontSize="16"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="400"
        letterSpacing="1px"
        opacity="0.8"
      >
        CONSULTORIA
      </text>
      
      {/* Decorative line */}
      <line
        x1="55"
        y1="52"
        x2="180"
        y2="52"
        stroke="url(#gradient1)"
        strokeWidth="1"
        opacity="0.3"
      />
      
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#7948ecff" />
        </linearGradient>
        
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.1"/>
        </filter>
      </defs>
    </svg>
  );
}