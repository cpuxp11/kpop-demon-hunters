import React from 'react';
import type { Scene, SceneId } from '../types';
import DialogueBox from './DialogueBox';
import CharacterSprite from './CharacterSprite';
import { characters } from '../gameData_v2';

interface GameScreenProps {
  scene: Scene;
  dialogueIndex: number;
  typedText: string;
  onNext: () => void;
  onChoice: (nextScene: SceneId, flagEffects?: Array<{type: 'set' | 'add' | 'subtract', flag: string, value: number | boolean}>) => void;
  evaluateCondition?: (condition: string) => boolean;
}

const GameScreen: React.FC<GameScreenProps> = ({ scene, dialogueIndex, typedText, onNext, onChoice, evaluateCondition }) => {
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
      <div className="absolute inset-0 bg-black bg-opacity-10">
        {scene.dialogue.map((dialogue, index) => {
           if (!dialogue.character || dialogue.character === 'Narrator' || !dialogue.emotion) return null;
           
           const characterData = characters[dialogue.character];
           const spriteSrc = characterData?.sprites[dialogue.emotion];

           return (
            <CharacterSprite
              key={`${dialogue.character}-${index}`}
              src={spriteSrc}
              alt={dialogue.character}
              position={dialogue.position || 'center'}
              isVisible={index === dialogueIndex}
              isSpeaking={currentDialogue.character === dialogue.character}
            />
           )
        })}
      </div>

      <DialogueBox
        dialogue={currentDialogue}
        typedText={typedText}
      />
      
      {showChoices && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 space-y-4">
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
    </div>
  );
};

export default GameScreen;