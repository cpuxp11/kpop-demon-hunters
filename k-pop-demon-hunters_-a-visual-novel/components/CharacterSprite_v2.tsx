import React from 'react';

interface CharacterSpriteProps {
  src?: string;
  alt: string;
  position: 'left' | 'center' | 'right';
  isVisible: boolean;
  isSpeaking: boolean;
}

const CharacterSprite_v2: React.FC<CharacterSpriteProps> = ({ src, alt, position, isVisible, isSpeaking }) => {
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

  const speakingEffect = isSpeaking
    ? 'brightness-100 scale-[1.02] z-10'
    : 'brightness-75 scale-[0.98]';

  const visibilityEffect = isVisible ? 'opacity-100' : 'opacity-0';

  const responsiveHeight = 'h-[60vh] sm:h-[60vh] md:h-[70vh] xl:h-[75vh]';
  const responsiveMargin = 'mb-[8vh] sm:mb-[8vh] md:mb-[6vh] xl:mb-[5vh]';

  return (
    <div
      className={`
        align-self-end w-auto transition-all duration-500 ease-in-out
        ${getPositionClasses()}
        ${visibilityEffect}
        ${speakingEffect}
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
          maxWidth: window.innerWidth >= 768 ? '30vw' : '45vw',
          minHeight: '50vh'
        }}
      />
    </div>
  );
};

export default CharacterSprite_v2;