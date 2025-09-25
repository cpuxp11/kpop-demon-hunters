import React from 'react';

interface CharacterSpriteProps {
  src?: string;
  alt: string;
  position: 'left' | 'center' | 'right';
  isVisible: boolean;
  isSpeaking: boolean;
}

const CharacterSprite_Test: React.FC<CharacterSpriteProps> = ({ src, alt, position, isVisible, isSpeaking }) => {
  if (!src) return null;

  const getPositionClasses = () => {
    switch (position) {
      case 'left':
        return 'justify-self-start ml-[15%] xl:ml-[20%] sm:ml-[10%]';
      case 'right':
        return 'justify-self-end mr-[15%] xl:mr-[20%] sm:mr-[10%]';
      case 'center':
      default:
        return 'justify-self-center';
    }
  };

  // 🧪 TEST: 모바일에서 캐릭터 크기 강화
  const mobileSpeakingBoost = isSpeaking
    ? 'brightness-100 scale-[1.15] sm:scale-[1.02] z-10'  // 모바일에서 더 큰 스케일
    : 'brightness-75 scale-100';

  const visibilityEffect = isVisible ? 'opacity-100' : 'opacity-0';

  const responsiveHeight = 'h-[60vh] sm:h-[60vh] md:h-[70vh] xl:h-[75vh]';
  const responsiveMargin = 'mb-[8vh] sm:mb-[8vh] md:mb-[6vh] xl:mb-[5vh]';

  return (
    <div className="relative">
      {/* 🏷️ TEST 라벨 */}
      <div className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 text-xs z-20 rounded">
        TEST: Mobile Enhanced
      </div>

      <div
        className={`
          align-self-end w-auto transition-all duration-500 ease-in-out
          ${getPositionClasses()}
          ${visibilityEffect}
          ${mobileSpeakingBoost}
          ${responsiveHeight}
          ${responsiveMargin}
        `}
        style={{
          paddingBottom: 'max(env(safe-area-inset-bottom), 0px)'
        }}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-auto object-contain drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
          style={{
            // 🧪 TEST: 반응형 최대 너비
            maxWidth: 'min(45vw, 300px)', // 모바일에서 더 크게, 하지만 최대 300px로 제한
            minHeight: '50vh'
          }}
        />
      </div>
    </div>
  );
};

export default CharacterSprite_Test;