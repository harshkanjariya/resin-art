import type { SVGProps } from 'react';
import { useId } from 'react';

interface LogoProps extends Omit<SVGProps<SVGSVGElement>, 'variant'> {
  variant?: 'full' | 'icon' | 'silhouette';
  showText?: boolean;
  theme?: 'dark' | 'light';
  className?: string;
}

const LogoIcon = ({
  idPrefix,
  theme = 'dark',
  ...props
}: SVGProps<SVGSVGElement> & { idPrefix: string; theme?: 'dark' | 'light' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" aria-hidden {...props}>
    <rect x="2" y="2" width="36" height="36" rx="10" fill={`url(#${idPrefix}-bg)`}/>
    <path d="M10 34 L16 12 L24 12 L30 34 L28 34 L28 24 L12 24 L12 34 Z M12 23 L28 23 L28 25 L12 25 Z M8 6 L32 6 L32 10 L22 10 L22 34 L18 34 L18 10 L8 10 Z" fill={`url(#${idPrefix}-fill)`}/>
    <defs>
      <linearGradient id={`${idPrefix}-bg`} x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor={theme === 'light' ? '#f5f0e8' : '#ebe3d4'}/>
        <stop offset="0.4" stopColor={theme === 'light' ? '#e5d4a8' : '#d4b896'}/>
        <stop offset="1" stopColor={theme === 'light' ? '#c9a962' : '#c9a962'}/>
      </linearGradient>
      <linearGradient id={`${idPrefix}-fill`} x1="8" y1="6" x2="32" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor={theme === 'light' ? '#faf9f6' : '#3d3632'}/>
        <stop offset="1" stopColor={theme === 'light' ? '#e8e0d5' : '#5c534a'}/>
      </linearGradient>
    </defs>
  </svg>
);

const LogoIconSilhouette = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" aria-hidden {...props}>
    <rect x="2" y="2" width="36" height="36" rx="10" fill="currentColor" opacity="0.08"/>
    <path d="M10 34 L16 12 L24 12 L30 34 L28 34 L28 24 L12 24 L12 34 Z M12 23 L28 23 L28 25 L12 25 Z M8 6 L32 6 L32 10 L22 10 L22 34 L18 34 L18 10 L8 10 Z" fill="currentColor" opacity="0.15"/>
  </svg>
);

export function Logo({ variant = 'full', showText = true, theme = 'dark', className = '', ...rest }: LogoProps) {
  const idPrefix = useId().replace(/:/g, '');
  const isSilhouette = variant === 'silhouette';

  if (isSilhouette) {
    return (
      <LogoIconSilhouette
        className={className}
        {...(rest as SVGProps<SVGSVGElement>)}
      />
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <LogoIcon idPrefix={idPrefix} theme={theme} className="shrink-0" {...(rest as SVGProps<SVGSVGElement>)} />
      {showText && (
        <span className="font-heading text-xl font-semibold tracking-wide text-inherit whitespace-nowrap">
          Art Town
        </span>
      )}
    </div>
  );
}

export default Logo;
