import React from 'react';
import type { Scene, SceneId } from '../types';
import DialogueBox from './DialogueBox';
import CharacterSprite_v2 from './CharacterSprite_v2';
import { characters } from '../gameData_v2';

interface GameScreenProps {
  scene: Scene;
  dialogueIndex: number;
  typedText: string;
  onNext: () => void;
  onChoice: (nextScene: SceneId, flagEffects?: Array<{type: 'set' | 'add' | 'subtract', flag: string, value: number | boolean}>) => void;
  evaluateCondition?: (condition: string) => boolean;
}

const GameScreen_v2: React.FC<GameScreenProps> = ({ scene, dialogueIndex, typedText, onNext, onChoice, evaluateCondition }) => {
  const currentDialogue = scene.dialogue[dialogueIndex];

  // 조건을 만족하는 선택지만 필터링
  const availableChoices = scene.choices?.filter(choice =>
    !choice.condition || !evaluateCondition || evaluateCondition(choice.condition)
  ) || [];

  const showChoices = typedText === currentDialogue.text && dialogueIndex === scene.dialogue.length - 1 && availableChoices.length > 0;

  return (
    <div
      className="w-full h-full bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${scene.background})` }}
      onClick={!showChoices ? onNext : undefined}
    >
      {/* 캐릭터 스테이지 - CSS Grid 기반 */}
      <div className="character-stage grid grid-cols-3 h-full relative">
        <div className="absolute inset-0 bg-black bg-opacity-10 pointer-events-none"></div>

        {/* 각 그리드 영역에 캐릭터 배치 */}
        {scene.dialogue.map((dialogue, index) => {
          if (!dialogue.character || dialogue.character === 'Narrator' || !dialogue.emotion) return null;

          const characterData = characters[dialogue.character];
          const spriteSrc = characterData?.sprites[dialogue.emotion];

          // 현재 대화에서만 캐릭터 표시
          if (index !== dialogueIndex) return null;

          const gridColumn = dialogue.position === 'left' ? 'col-start-1' :
                            dialogue.position === 'right' ? 'col-start-3' : 'col-start-2';

          return (
            <div key={`${dialogue.character}-${index}`} className={`${gridColumn} flex items-end relative z-10`}>
              <CharacterSprite_v2
                src={spriteSrc}
                alt={dialogue.character}
                position={dialogue.position || 'center'}
                isVisible={index === dialogueIndex}
                isSpeaking={currentDialogue.character === dialogue.character}
              />
            </div>
          );
        })}
      </div>

      {/* 대화 박스 */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <DialogueBox
          dialogue={currentDialogue}
          typedText={typedText}
        />
      </div>

      {/* 선택지 */}
      {showChoices && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 space-y-4 z-30">
          {availableChoices.map((choice, index) => (
            <button
              key={index}
              onClick={() => onChoice(choice.nextScene, choice.flagEffects)}
              className="px-6 py-3 bg-purple-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-purple-600 transition-transform transform hover:scale-105"
            >
              {choice.text}
            </button>
          ))}
        </div>
      )}

      {/* 접근성 및 모션 감소 지원 */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .character-stage * {
            transition: none !important;
          }
        }

        @media (prefers-contrast: high) {
          .character-stage img[style*="brightness(75%)"] {
            filter: brightness(50%) drop-shadow(0 5px 15px rgba(0,0,0,0.7)) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GameScreen_v2;