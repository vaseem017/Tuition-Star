import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface LogoProps {
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  isLink?: boolean;
  inverted?: boolean; // For light text on dark backgrounds
}

export const LogoMark: React.FC<{ className?: string; size?: number; inverted?: boolean }> = ({
  className = '',
  size = 40,
  inverted = false,
}) => {
  const brandNavy = inverted ? '#93C5FD' : '#0c1e4e';
  const capTop = inverted ? '#60A5FA' : '#0c1e4e';
  const capDepth = inverted ? '#3B82F6' : '#071330';
  const pinstripes = inverted ? '#60A5FA' : '#1d4ed8';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0 transition-transform duration-300 group-hover:scale-105', className)}
      aria-hidden="true"
    >
      {/* 1. Graduation Mortarboard Diamond Top */}
      <path d="M 50 10 L 92 24 L 50 38 L 8 24 Z" fill={capTop} />

      {/* 2. Cap Underneath Depth Band */}
      <path d="M 23 28 L 50 37 L 77 28 L 77 32.5 L 50 42 L 23 32.5 Z" fill={capDepth} />

      {/* 3. Subtle Gap Divider */}
      <path d="M 18 36 Q 50 44 82 36" stroke={inverted ? '#060B13' : '#FFFFFF'} strokeWidth="2.5" fill="none" />

      {/* 4. Circular Crest with Thick Border Ring */}
      <g transform="translate(0, 3)">
        {/* Outer Circular Ring */}
        <circle cx="50" cy="56" r="37" fill="none" stroke={brandNavy} strokeWidth="6.5" />

        {/* Background Vertical Pinstripes */}
        <g stroke={pinstripes} strokeWidth="1.2" opacity={inverted ? '0.4' : '0.35'} strokeLinecap="round">
          <line x1="28" y1="46" x2="28" y2="68" />
          <line x1="33" y1="40" x2="33" y2="74" />
          <line x1="38" y1="36" x2="38" y2="78" />
          <line x1="43" y1="33" x2="43" y2="80" />
          <line x1="50" y1="32" x2="50" y2="81" />
          <line x1="57" y1="33" x2="57" y2="80" />
          <line x1="62" y1="36" x2="62" y2="78" />
          <line x1="67" y1="40" x2="67" y2="74" />
          <line x1="72" y1="46" x2="72" y2="68" />
        </g>

        {/* 5. Student Achiever Silhouette with Uplifted Celebratory Arms */}
        <circle cx="50" cy="49" r="5.5" fill={brandNavy} />
        <path
          d="M 27 57 C 32 57, 41 63, 45 66 L 45 79 C 45 80.5, 47.5 82, 50 82 C 52.5 82, 55 80.5, 55 79 L 55 66 C 59 63, 68 57, 73 57 C 75 57, 75 54, 72 54 C 64 55, 53 61, 50 63 C 47 61, 36 55, 28 54 C 25 54, 25 57, 27 57 Z"
          fill={brandNavy}
        />
      </g>
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  isLink = true,
  inverted = false,
}) => {
  const sizeMap = {
    sm: { icon: 28, text: 'text-lg', star: 'text-lg' },
    md: { icon: 38, text: 'text-2xl', star: 'text-2xl' },
    lg: { icon: 48, text: 'text-3xl', star: 'text-3xl' },
    xl: { icon: 60, text: 'text-4xl', star: 'text-4xl' },
  };

  const currentSize = sizeMap[size];

  const content = (
    <div className={cn('inline-flex items-center gap-2.5 font-bold tracking-tight select-none group whitespace-nowrap', className)}>
      {variant !== 'text' && (
        <LogoMark size={currentSize.icon} inverted={inverted} />
      )}
      {variant !== 'icon' && (
        <div className="flex items-baseline tracking-tight whitespace-nowrap">
          <span
            className={cn(
              currentSize.text,
              'font-bold whitespace-nowrap transition-colors',
              inverted
                ? 'text-white'
                : 'text-[#0c1e4e] dark:text-white'
            )}
          >
            Tuition
          </span>
          <span
            className={cn(
              currentSize.star,
              'font-extrabold tracking-wider whitespace-nowrap transition-colors',
              inverted
                ? 'text-blue-300'
                : 'text-[#0c1e4e] dark:text-blue-400'
            )}
          >
            STAR
          </span>
        </div>
      )}
    </div>
  );

  if (isLink) {
    return (
      <Link to="/" id="tuitionstar-logo-link" aria-label="TuitionStar Home" className="focus:outline-none focus:ring-2 focus:ring-[#0c1e4e] rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
};
