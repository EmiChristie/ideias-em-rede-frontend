import React from 'react';
import { THEME_COLORS } from '../../constants/colors';

export interface LogoProps {
  /**
   * Tamanho visual do componente
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Variação do logo: completo (ícone + texto), apenas ícone ou apenas texto
   * @default 'full'
   */
  variant?: 'full' | 'icon-only' | 'text-only';
  /**
   * Tema de contraste: 'light' (para fundos claros #F0EBEA) ou 'dark' (para fundos escuros #291C19)
   * @default 'light'
   */
  theme?: 'light' | 'dark';
  /**
   * Exibir ou ocultar o subtítulo pedagógico
   * @default false
   */
  showSubtitle?: boolean;
  /**
   * Exibir ou ocultar a tag/badge "Educação Básica"
   * @default false
   */
  showBadge?: boolean;
  /**
   * Classes CSS adicionais
   */
  className?: string;
  /**
   * Link opcional para redirecionamento
   */
  href?: string;
  /**
   * Callback de clique opcional
   */
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'full',
  theme = 'light',
  showSubtitle = false,
  className = '',
  href,
  onClick,
}) => {
  const sizeMap = {
    sm: {
      icon: 'w-7 h-7',
      iconSvg: 'w-4 h-4',
      text: 'text-lg',
      badge: 'text-[9px] px-1.5 py-0.2',
      subtitle: 'text-[10px]',
      gap: 'gap-2',
    },
    md: {
      icon: 'w-10 h-10',
      iconSvg: 'w-6 h-6',
      text: 'text-2xl',
      badge: 'text-[10px] px-2 py-0.5',
      subtitle: 'text-xs',
      gap: 'gap-3',
    },
    lg: {
      icon: 'w-12 h-12',
      iconSvg: 'w-7 h-7',
      text: 'text-3xl',
      badge: 'text-xs px-2.5 py-0.5',
      subtitle: 'text-sm',
      gap: 'gap-3.5',
    },
    xl: {
      icon: 'w-16 h-16',
      iconSvg: 'w-9 h-9',
      text: 'text-4xl sm:text-5xl',
      badge: 'text-xs px-3 py-1',
      subtitle: 'text-base',
      gap: 'gap-4',
    },
  };

  const currentSize = sizeMap[size];
  const isDarkBg = theme === 'dark';

  const IconElement = (
    <div
      className={`${currentSize.icon} rounded-2xl flex items-center justify-center shrink-0 select-none shadow-sm transition-transform duration-200 group-hover:scale-105`}
      style={{
        backgroundColor: THEME_COLORS.primary,
        color: THEME_COLORS.textLight,
      }}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${currentSize.iconSvg}`}
      >
        <path
          d="M10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20"
          stroke={THEME_COLORS.textLight}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="20" cy="18" r="3.5" fill={THEME_COLORS.accent} />
        <circle cx="10" cy="28" r="3" fill={THEME_COLORS.textLight} />
        <circle cx="30" cy="28" r="3" fill={THEME_COLORS.textLight} />
        <circle cx="20" cy="31" r="2.5" fill={THEME_COLORS.secondary} />
        <line x1="12" y1="26" x2="18" y2="20" stroke={THEME_COLORS.textLight} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="28" y1="26" x2="22" y2="20" stroke={THEME_COLORS.textLight} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="12" y1="28" x2="28" y2="28" stroke={THEME_COLORS.textLight} strokeWidth="2" strokeDasharray="2 2" />
      </svg>
    </div>
  );

  const TextElement = (
    <div className="flex flex-col select-none">
      <div className="flex items-center gap-2">
        <span
          className={`font-black tracking-tight ${currentSize.text} leading-none`}
          style={{ color: isDarkBg ? THEME_COLORS.textLight : THEME_COLORS.textDark }}
        >
          Ideias
          <span style={{ color: THEME_COLORS.accent }}>Em</span>
          <span style={{ color: THEME_COLORS.secondary }}>Rede</span>
        </span>
      </div>

      {showSubtitle && (
        <span
          className={`font-medium tracking-wide mt-1 ${currentSize.subtitle}`}
          style={{ color: isDarkBg ? 'rgba(240, 235, 234, 0.7)' : THEME_COLORS.gray }}
        >
          Planejamento de Política & Debates
        </span>
      )}
    </div>
  );

  const innerContent = (
    <div className={`inline-flex items-center ${currentSize.gap} group ${className}`}>
      {variant !== 'text-only' && IconElement}
      {variant !== 'icon-only' && TextElement}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className="inline-block text-decoration-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-2xl"
        style={{ color: 'inherit' }}
      >
        {innerContent}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="inline-block bg-transparent border-0 p-0 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-2xl"
      >
        {innerContent}
      </button>
    );
  }

  return innerContent;
};

export default Logo;
