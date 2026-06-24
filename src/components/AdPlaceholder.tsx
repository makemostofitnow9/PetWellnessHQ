'use client';

interface AdPlaceholderProps {
  slot?: string;
  size: 'leaderboard' | 'rectangle' | 'halfpage' | 'mobile-banner';
  format?: 'auto' | 'rectangle' | 'horizontal';
  className?: string;
}

const sizeConfig = {
  leaderboard: { width: 728, height: 90, minHeight: 'min-h-[90px]', label: '728×90 Leaderboard' },
  rectangle: { width: 300, height: 250, minHeight: 'min-h-[250px]', label: '300×250 Rectangle' },
  halfpage: { width: 300, height: 600, minHeight: 'min-h-[600px]', label: '300×600 Half-Page' },
  'mobile-banner': { width: 320, height: 50, minHeight: 'min-h-[50px]', label: '320×50 Mobile Banner' },
};

export default function AdPlaceholder({ slot, size, format = 'auto', className = '' }: AdPlaceholderProps) {
  const isDev = process.env.NODE_ENV === 'development';
  const config = sizeConfig[size];

  if (isDev) {
    return (
      <div className={`${config.minHeight} flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 rounded text-gray-400 text-xs my-4 ${className}`}>
        <span>Advertisement · {config.label}</span>
      </div>
    );
  }

  return (
    <div className={`${config.minHeight} my-4 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
