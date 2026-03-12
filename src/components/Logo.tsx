const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`;

interface LogoProps {
  variant?: 'full' | 'icon' | 'silhouette';
  showText?: boolean;
  theme?: 'dark' | 'light';
  className?: string;
  style?: React.CSSProperties;
}

export function Logo({
  variant = 'full',
  showText = true,
  theme = 'dark',
  className = '',
  style,
}: LogoProps) {
  const isSilhouette = variant === 'silhouette';

  const imgClassName = [
    'shrink-0 object-contain',
    isSilhouette && 'opacity-40',
    theme === 'light' && !isSilhouette && 'brightness-0 invert', // light logo on dark footer
  ]
    .filter(Boolean)
    .join(' ');

  if (isSilhouette) {
    return (
      <img
        src={LOGO_SRC}
        alt=""
        role="presentation"
        className={`${imgClassName} ${className}`}
        style={style}
      />
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`} style={style}>
      <img
        src={LOGO_SRC}
        alt="Art Town"
        className={`h-full max-h-9 w-auto ${imgClassName}`}
      />
      {showText && (
        <span className="font-heading text-xl font-semibold tracking-wide text-inherit whitespace-nowrap">
          Art Town
        </span>
      )}
    </div>
  );
}

export default Logo;
