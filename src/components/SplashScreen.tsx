import { useState } from 'react';
import { Rocket } from 'lucide-react';
import { CRASH_LOGO_SRC } from '../data/constants';

interface SplashScreenProps {
  onSkip: () => void;
}

export function SplashScreen({ onSkip }: SplashScreenProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={onSkip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onSkip();
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer select-none"
      style={{
        background:
          'radial-gradient(900px 520px at 50% 30%, rgba(255,8,0,0.12), transparent 62%), radial-gradient(800px 450px at 20% 20%, rgba(179,6,0,0.09), transparent 60%), linear-gradient(180deg, #0a0202, #140404)',
      }}
    >
      <div
        className="w-[104px] h-[104px] sm:w-[112px] sm:h-[112px] rounded-2xl overflow-hidden flex items-center justify-center bg-white/95 p-1.5 animate-splash-pulse"
        style={{ filter: 'drop-shadow(0 0 25px rgba(255,8,0,0.65))' }}
      >
        {!imgError ? (
          <img
            src={CRASH_LOGO_SRC}
            alt="Crash Experiment"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-contain rounded-xl"
          />
        ) : (
          <Rocket className="w-12 h-12 text-[#ff0800]" />
        )}
      </div>

      <h1
        dir="ltr"
        className="font-cyber text-[22px] sm:text-[26px] font-black tracking-[3px] mt-4 text-center"
        style={{
          background: 'linear-gradient(to bottom, #ffffff, #ff0800)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 22px rgba(255,8,0,0.35))',
        }}
      >
        CRASH EXPERIMENT
      
      </h1>

      <div
        className="w-[50px] h-[50px] rounded-full mt-6 animate-spin"
        style={{
          border: '4px solid rgba(255,8,0,0.15)',
          borderTopColor: '#ff0800',
          boxShadow: '0 0 20px rgba(255,8,0,0.15)',
        }}
      />
    </div>
  );
}
