import logoSrc from '../assets/logo.svg';

interface LogoProps {
  className?: string;
}

export function Logo({ className = 'h-10 w-auto' }: LogoProps) {
  return (
    <img
      src={logoSrc}
      alt="Perth Steel Patios"
      className={className}
      style={{ mixBlendMode: 'screen' }}
      draggable={false}
    />
  );
}
