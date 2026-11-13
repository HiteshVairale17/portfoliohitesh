import React from 'react';

interface LogoProps {
  className?: string;
}

export const JavaLogo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Steam curls */}
    <path
      d="M27 8c-3.2 4.6 1.8 8.4 3.7 12.2-2.8-3.8-5.7-7.6-3.7-12.2z"
      fill="#EA2D2E"
    />
    <path
      d="M36 5c-4.1 5.8 2.5 10.8 4.8 15.6-3.8-4.9-7.5-9.8-4.8-15.6z"
      fill="#EA2D2E"
    />
    <path
      d="M21 13c-2 3.6 1.2 6.5 2.5 9.4-1.9-2.9-3.8-5.8-2.5-9.4z"
      fill="#EA2D2E"
    />
    {/* Cup Body */}
    <path
      d="M17 28h26c0 0-1.8 11.2-8.5 15.5-3.8 2.4-9.8 2.4-13.6 0-5.5-3.5-7.4-12.5-7.4-15.5h3.5z"
      fill="#5382A1"
    />
    {/* Handle */}
    <path
      d="M41 30.5c4.8 0 7.8 2.6 7.8 6.4s-3.2 6.5-7.8 6.5v-2.8c3 0 5-1.5 5-3.7s-2-3.6-5-3.6v-2.8z"
      fill="#EA2D2E"
    />
    {/* Inner coffee glow */}
    <ellipse cx="30" cy="28.5" rx="12" ry="2.2" fill="#2B4E66" />
    {/* Saucer Lower curve */}
    <path
      d="M14 47.5c10.5 2.6 21.5 2.6 32 0-2.8 2.2-9.4 3.5-16 3.5s-13.2-1.3-16-3.5z"
      fill="#5382A1"
    />
    <path
      d="M10 52c13.2 3.2 26.8 3.2 40 0-3.5 2.4-12 3.8-20 3.8s-16.5-1.4-20-3.8z"
      fill="#EA2D2E"
    />
  </svg>
);

export const CppLogo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Hexagon */}
    <polygon points="32,4 56,18 56,46 32,60 8,46 8,18" fill="#00599C" />
    <polygon points="32,8 52,20 52,44 32,56 12,44 12,20" fill="#004482" />
    {/* Letter C */}
    <path
      d="M32 20c-6.6 0-12 5.4-12 12s5.4 12 12 12c4.4 0 8.2-2.4 10.2-6l-5.2-3c-1.2 2-3.1 3.2-5 3.2-3.9 0-7-3.1-7-7s3.1-7 7-7c1.9 0 3.8 1.2 5 3.2l5.2-3C40.2 22.4 36.4 20 32 20z"
      fill="#FFFFFF"
    />
    {/* First Plus */}
    <polygon points="41,30 43,30 43,27 45,27 45,30 47,30 47,32 45,32 45,35 43,35 43,32 41,32" fill="#659AD2" />
    {/* Second Plus */}
    <polygon points="48,30 50,30 50,27 52,27 52,30 54,30 54,32 52,32 52,35 50,35 50,32 48,32" fill="#659AD2" />
  </svg>
);

export const CLogo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Hexagon background */}
    <polygon points="32,5 57,19 57,47 32,61 7,47 7,19" fill="#A8B9CC" />
    <polygon points="32,9 53,21 53,45 32,57 11,45 11,21" fill="#283593" />
    {/* Letter C */}
    <path
      d="M36 21c-6.8 0-12.5 5.5-12.5 12.3s5.7 12.3 12.5 12.3c4.8 0 8.9-2.7 11-6.8l-5.8-3.2c-1.3 2.3-3.2 3.6-5.2 3.6-3.8 0-6.8-3.1-6.8-6.9s3-6.9 6.8-6.9c2 0 3.9 1.3 5.2 3.6l5.8-3.2C44.9 23.7 40.8 21 36 21z"
      fill="#FFFFFF"
    />
  </svg>
);

export const PythonLogo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Blue top snake */}
    <path
      d="M31.8 6c-8.6 0-14.2 3.8-14.2 11.2v5.8h14.5v2.2H12.8C5.2 25.2 4 30.6 4 37.8c0 8.2 6.8 11.8 14.8 11.8h4.5v-6.5c0-4.6 4-8.5 8.5-8.5h14.5c4.1 0 7.5-3.5 7.5-7.5v-13.8c0-4.8-4.2-7.3-8.8-7.3h-13.7zm-4.2 4.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5z"
      fill="#3776AB"
    />
    {/* Yellow bottom snake */}
    <path
      d="M32.2 58c8.6 0 14.2-3.8 14.2-11.2v-5.8H31.9v-2.2h19.3c7.6 0 8.8-5.4 8.8-12.6 0-8.2-6.8-11.8-14.8-11.8h-4.5v6.5c0 4.6-4 8.5-8.5 8.5H17.7c-4.1 0-7.5 3.5-7.5 7.5v13.8c0 4.8 4.2 7.3 8.8 7.3h13.2zm4.2-4.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"
      fill="#FFD438"
    />
  </svg>
);

export const SqlLogo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Database Cylinders */}
    <ellipse cx="32" cy="14" rx="22" ry="7" fill="#00758F" />
    <path d="M10 14v12c0 3.9 9.8 7 22 7s22-3.1 22-7V14" fill="#005B70" />
    <ellipse cx="32" cy="26" rx="22" ry="7" fill="#00758F" />
    <path d="M10 26v12c0 3.9 9.8 7 22 7s22-3.1 22-7V26" fill="#004656" />
    <ellipse cx="32" cy="38" rx="22" ry="7" fill="#00758F" />
    <path d="M10 38v12c0 3.9 9.8 7 22 7s22-3.1 22-7V38" fill="#00313C" />
    <ellipse cx="32" cy="50" rx="22" ry="7" fill="#0091B2" />
    {/* Highlight shine */}
    <ellipse cx="32" cy="13" rx="18" ry="4.5" fill="#38BBD9" opacity="0.4" />
  </svg>
);

export const AndroidLogo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Left antenna */}
    <line x1="20" y1="18" x2="14" y2="8" stroke="#3DDC84" strokeWidth="3" strokeLinecap="round" />
    {/* Right antenna */}
    <line x1="44" y1="18" x2="50" y2="8" stroke="#3DDC84" strokeWidth="3" strokeLinecap="round" />
    {/* Android Head Semi-circle */}
    <path d="M10 36c0-12.2 9.8-22 22-22s22 9.8 22 22H10z" fill="#3DDC84" />
    {/* Left Eye */}
    <circle cx="23" cy="26" r="2.8" fill="#FFFFFF" />
    {/* Right Eye */}
    <circle cx="41" cy="26" r="2.8" fill="#FFFFFF" />
    {/* Body peek */}
    <rect x="10" y="40" width="44" height="14" rx="4" fill="#3DDC84" />
  </svg>
);

export const AndroidStudioLogo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Background Circle */}
    <circle cx="32" cy="32" r="28" fill="#2C3440" stroke="#3DDC84" strokeWidth="1.5" />
    {/* Draft compass ruler elements */}
    <polygon points="32,10 40,32 32,27" fill="#4285F4" />
    <polygon points="32,10 24,32 32,27" fill="#34A853" />
    <polygon points="32,54 40,32 32,37" fill="#FBBC05" />
    <polygon points="32,54 24,32 32,37" fill="#EA4335" />
    {/* Center Android Head */}
    <path d="M22 35c0-5.5 4.5-10 10-10s10 4.5 10 10H22z" fill="#3DDC84" />
    <circle cx="28" cy="30" r="1.3" fill="#FFFFFF" />
    <circle cx="36" cy="30" r="1.3" fill="#FFFFFF" />
    <line x1="26" y1="24" x2="23" y2="20" stroke="#3DDC84" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="38" y1="24" x2="41" y2="20" stroke="#3DDC84" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const Html5Logo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Shield Base */}
    <polygon points="9,6 14,54 32,59 50,54 55,6" fill="#E34F26" />
    {/* Right lighter facet */}
    <polygon points="32,10 32,55 46.5,51 51,10" fill="#EF652A" />
    {/* Stylized 5 */}
    <polygon points="32,18 20,18 20.8,26 32,26" fill="#EBEBEB" />
    <polygon points="32,26 43.2,26 42.4,34 32,34" fill="#FFFFFF" />
    <polygon points="32,34 26,34 25.5,28 20.8,28 21.8,40 32,40" fill="#EBEBEB" />
    <polygon points="32,46.5 32,40 32,40 41.8,40 41,48 32,50.8" fill="#FFFFFF" />
    <polygon points="32,46.5 32,50.8 24.5,48.5 24,43 19.5,43 20.5,51.5 32,55" fill="#EBEBEB" />
  </svg>
);

export const Css3Logo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Shield Base */}
    <polygon points="9,6 14,54 32,59 50,54 55,6" fill="#1572B6" />
    {/* Right lighter facet */}
    <polygon points="32,10 32,55 46.5,51 51,10" fill="#33A9DC" />
    {/* Stylized 3 */}
    <polygon points="32,18 43.8,18 43.2,25 32,25" fill="#FFFFFF" />
    <polygon points="32,25 20.5,25 21,31 32,31" fill="#EBEBEB" />
    <polygon points="32,31 42.6,31 41.8,41 32,43.7" fill="#FFFFFF" />
    <polygon points="32,43.7 32,49 40.5,46.5 41.4,37 32,37" fill="#FFFFFF" />
    <polygon points="32,49 24.2,46.8 23.8,41 19.2,41 20.1,51.5 32,55" fill="#EBEBEB" />
  </svg>
);

export const JavaScriptLogo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Yellow Background */}
    <rect x="4" y="4" width="56" height="56" rx="8" fill="#F7DF1E" />
    {/* Letter J */}
    <path
      d="M20 31h5.8v16c0 3.2-1.8 5-4.8 5-2.2 0-3.8-.8-4.8-2.2l3-3.6c.6.8 1.2 1.2 1.8 1.2.9 0 1.4-.5 1.4-1.8V31z"
      fill="#000000"
    />
    {/* Letter S */}
    <path
      d="M36.5 40.2c2.4 1.4 4.5 2.6 4.5 5 0 2.2-1.9 3.8-4.6 3.8-3 0-4.8-1.7-5.8-3.6l-4.5 2.8c1.8 3.5 5.5 5.8 10.3 5.8 6.2 0 10.4-3.6 10.4-9 0-5.4-3.6-7.4-7.4-9.5-2.4-1.3-4-2.4-4-4.2 0-1.8 1.5-3.2 3.8-3.2 2.4 0 4 1.2 5 2.8l4.4-2.8c-1.8-3-4.8-4.8-9.4-4.8-5.6 0-9.6 3.6-9.6 8.5 0 5 3.4 7 7.3 9.2z"
      fill="#000000"
    />
  </svg>
);

export const BootstrapLogo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Purple Rounded Shield */}
    <rect x="6" y="6" width="52" height="52" rx="14" fill="#7952B3" />
    {/* Stylized B */}
    <path
      d="M23 18h11.5c4.8 0 8 2.4 8 6.2 0 2.8-1.8 4.8-4.2 5.5 3.2.7 5.2 3 5.2 6.5 0 4.6-3.8 7.8-9.2 7.8H23V18zm6.5 10.5h4.8c2.2 0 3.8-1.2 3.8-3.2 0-2-1.6-3.2-3.8-3.2h-4.8v6.4zm0 11.5h5.5c2.6 0 4.2-1.4 4.2-3.6 0-2.2-1.6-3.6-4.2-3.6h-5.5V40z"
      fill="#FFFFFF"
    />
  </svg>
);

export const ReactLogo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Center Nucleus */}
    <circle cx="32" cy="32" r="5" fill="#61DAFB" />
    {/* Horizontal Ellipse */}
    <ellipse cx="32" cy="32" rx="24" ry="9" stroke="#61DAFB" strokeWidth="2.2" fill="none" />
    {/* 60 deg Ellipse */}
    <ellipse
      cx="32"
      cy="32"
      rx="24"
      ry="9"
      stroke="#61DAFB"
      strokeWidth="2.2"
      fill="none"
      transform="rotate(60 32 32)"
    />
    {/* 120 deg Ellipse */}
    <ellipse
      cx="32"
      cy="32"
      rx="24"
      ry="9"
      stroke="#61DAFB"
      strokeWidth="2.2"
      fill="none"
      transform="rotate(120 32 32)"
    />
  </svg>
);

export const GitLogo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Rotated Square */}
    <g transform="rotate(45 32 32)">
      <rect x="14" y="14" width="36" height="36" rx="7" fill="#F05032" />
      {/* Branch Lines */}
      <line x1="24" y1="24" x2="24" y2="40" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 30c4 0 8 3 8 7v3" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Commit Dots */}
      <circle cx="24" cy="24" r="3.2" fill="#FFFFFF" />
      <circle cx="24" cy="40" r="3.2" fill="#FFFFFF" />
      <circle cx="32" cy="40" r="3.2" fill="#FFFFFF" />
    </g>
  </svg>
);

export const GitHubLogo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" fill="#181717" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
    <path
      d="M32 14c-10 0-18 8.1-18 18 0 8 5.2 14.7 12.3 17.1.9.2 1.2-.4 1.2-.9v-3.1c-5 1.1-6.1-2.4-6.1-2.4-.8-2.1-2-2.6-2-2.6-1.6-1.1.1-1.1.1-1.1 1.8.1 2.8 1.9 2.8 1.9 1.6 2.8 4.2 2 5.2 1.5.2-1.2.7-2 1.2-2.5-4-.5-8.2-2-8.2-9 0-2 .7-3.6 1.9-4.9-.2-.5-.8-2.3.2-4.9 0 0 1.5-.5 5 1.9 1.5-.4 3-.6 4.6-.6s3.1.2 4.6.6c3.5-2.4 5-1.9 5-1.9 1 2.5.4 4.4.2 4.9 1.2 1.3 1.9 2.9 1.9 4.9 0 7-4.2 8.5-8.3 9 .7.6 1.3 1.8 1.3 3.6v5.3c0 .5.3 1.1 1.3.9C46.8 46.7 52 40 52 32c0-9.9-8-18-20-18z"
      fill="#FFFFFF"
    />
  </svg>
);

export const VSCodeLogo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Blue Origami Ribbon */}
    <path d="M47 8l-25 19-8-6-4 3 8 8-8 8 4 3 8-6 25 19 9-4V12l-9-4z" fill="#0065A9" />
    <path d="M47 8l-25 19 8 5 17-12V8z" fill="#007ACC" />
    <path d="M47 56l-25-19 8-5 17 12v12z" fill="#1F8CEB" />
    <path d="M56 12l-9 8v24l9 8V12z" fill="#0065A9" opacity="0.6" />
    <path d="M14 21l-4 3 8 8-8 8 4 3 8-6v-10l-8-6z" fill="#004E8C" />
  </svg>
);

export const MySqlLogo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Dolphin Silhouette */}
    <path
      d="M50 20c-3-5-8-8-15-7-8 1-13 6-18 12-4 5-8 10-12 11-1 .3 2-2 3-3 2-2 4-5 6-7 4-5 10-9 16-10 6-1 12 1 16 5 2 2 4 5 4 9z"
      fill="#00758F"
    />
    <path
      d="M48 24c2 4 2 9 0 13-2 4-5 7-9 9-4 2-9 2-13 0-3-1-5-4-7-7-2-3-4-7-7-9-2-2-5-3-7-3 3 2 6 5 8 9 2 4 4 8 7 11 4 3 9 4 14 3 5-1 10-5 13-9 3-4 4-10 1-17z"
      fill="#F29111"
    />
    <path
      d="M32 30c-2-2-4-3-7-3-4 0-7 2-10 5 3-1 6-2 9-1 3 .5 6 2 8 4-1-2-1-3 0-5z"
      fill="#005B70"
    />
  </svg>
);

export const DsaLogo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Binary Tree Connectors */}
    <line x1="32" y1="18" x2="18" y2="34" stroke="#10B981" strokeWidth="2.5" />
    <line x1="32" y1="18" x2="46" y2="34" stroke="#10B981" strokeWidth="2.5" />
    <line x1="18" y1="34" x2="12" y2="48" stroke="#06B6D4" strokeWidth="2" />
    <line x1="18" y1="34" x2="24" y2="48" stroke="#06B6D4" strokeWidth="2" />
    <line x1="46" y1="34" x2="40" y2="48" stroke="#06B6D4" strokeWidth="2" />
    <line x1="46" y1="34" x2="52" y2="48" stroke="#06B6D4" strokeWidth="2" />
    {/* Nodes */}
    <circle cx="32" cy="18" r="6" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
    <circle cx="18" cy="34" r="5" fill="#06B6D4" stroke="#FFFFFF" strokeWidth="1.2" />
    <circle cx="46" cy="34" r="5" fill="#06B6D4" stroke="#FFFFFF" strokeWidth="1.2" />
    <circle cx="12" cy="48" r="4" fill="#3B82F6" />
    <circle cx="24" cy="48" r="4" fill="#3B82F6" />
    <circle cx="40" cy="48" r="4" fill="#3B82F6" />
    <circle cx="52" cy="48" r="4" fill="#3B82F6" />
  </svg>
);

export const OopLogo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Hexagonal Polymorphism Class Blueprint */}
    <polygon points="32,6 54,18 54,44 32,56 10,44 10,18" fill="#8B5CF6" opacity="0.25" stroke="#8B5CF6" strokeWidth="2" />
    <rect x="22" y="16" width="20" height="12" rx="3" fill="#8B5CF6" />
    <text x="32" y="25" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">CLASS</text>
    <line x1="32" y1="28" x2="32" y2="36" stroke="#A78BFA" strokeWidth="2" />
    <rect x="14" y="36" width="16" height="12" rx="3" fill="#6D28D9" />
    <text x="22" y="44" fill="#FFFFFF" fontSize="7" fontFamily="monospace" textAnchor="middle">OBJ1</text>
    <rect x="34" y="36" width="16" height="12" rx="3" fill="#6D28D9" />
    <text x="42" y="44" fill="#FFFFFF" fontSize="7" fontFamily="monospace" textAnchor="middle">OBJ2</text>
  </svg>
);

export const DbmsLogo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Database Relational Tables */}
    <rect x="8" y="10" width="22" height="20" rx="3" fill="#F59E0B" opacity="0.9" stroke="#FFFFFF" strokeWidth="1" />
    <line x1="8" y1="17" x2="30" y2="17" stroke="#FFFFFF" strokeWidth="1" />
    <line x1="15" y1="17" x2="15" y2="30" stroke="#FFFFFF" strokeWidth="1" />
    <rect x="34" y="24" width="22" height="26" rx="3" fill="#D97706" opacity="0.9" stroke="#FFFFFF" strokeWidth="1" />
    <line x1="34" y1="32" x2="56" y2="32" stroke="#FFFFFF" strokeWidth="1" />
    <line x1="43" y1="32" x2="43" y2="50" stroke="#FFFFFF" strokeWidth="1" />
    {/* Relationship connector */}
    <path d="M30 22h4v8" stroke="#10B981" strokeWidth="2.5" fill="none" strokeLinecap="round" />
  </svg>
);

export const OsLogo: React.FC<LogoProps> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Terminal / Kernel Chip Emblem */}
    <rect x="10" y="10" width="44" height="44" rx="8" fill="#18181B" stroke="#EC4899" strokeWidth="2" />
    {/* CPU Pins */}
    <line x1="20" y1="6" x2="20" y2="10" stroke="#EC4899" strokeWidth="2" />
    <line x1="32" y1="6" x2="32" y2="10" stroke="#EC4899" strokeWidth="2" />
    <line x1="44" y1="6" x2="44" y2="10" stroke="#EC4899" strokeWidth="2" />
    <line x1="20" y1="54" x2="20" y2="58" stroke="#EC4899" strokeWidth="2" />
    <line x1="32" y1="54" x2="32" y2="58" stroke="#EC4899" strokeWidth="2" />
    <line x1="44" y1="54" x2="44" y2="58" stroke="#EC4899" strokeWidth="2" />
    {/* Prompt symbols inside */}
    <path d="M20 24l7 6-7 6" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="31" y1="36" x2="42" y2="36" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const renderSkillOfficialLogo = (skillId: string, className = 'w-7 h-7') => {
  switch (skillId) {
    case 'java':
      return <JavaLogo className={className} />;
    case 'cpp':
      return <CppLogo className={className} />;
    case 'c-lang':
      return <CLogo className={className} />;
    case 'python':
      return <PythonLogo className={className} />;
    case 'sql':
      return <SqlLogo className={className} />;
    case 'android':
      return <AndroidLogo className={className} />;
    case 'android-studio':
      return <AndroidStudioLogo className={className} />;
    case 'html5':
      return <Html5Logo className={className} />;
    case 'css3':
      return <Css3Logo className={className} />;
    case 'javascript':
      return <JavaScriptLogo className={className} />;
    case 'bootstrap':
      return <BootstrapLogo className={className} />;
    case 'react':
      return <ReactLogo className={className} />;
    case 'git':
      return <GitLogo className={className} />;
    case 'github':
      return <GitHubLogo className={className} />;
    case 'vscode':
      return <VSCodeLogo className={className} />;
    case 'mysql':
      return <MySqlLogo className={className} />;
    case 'dsa':
      return <DsaLogo className={className} />;
    case 'oop':
      return <OopLogo className={className} />;
    case 'dbms':
      return <DbmsLogo className={className} />;
    case 'os':
      return <OsLogo className={className} />;
    default:
      return <JavaLogo className={className} />;
  }
};
