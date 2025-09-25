import React, { useState } from 'react';
import CharacterSprite_v2 from './components/CharacterSprite_v2';
import CharacterSprite_Test from './components/CharacterSprite_Test';

const TestPage: React.FC = () => {
  const [testCharacter] = useState({
    src: './Rumi.png',
    alt: 'Rumi',
    position: 'center' as const,
    isVisible: true,
    isSpeaking: false
  });

  const [isSpeaking, setIsSpeaking] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-pink-900 p-4">
      {/* 🎮 헤더 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">📱 모바일 캐릭터 크기 테스트</h1>
        <p className="text-gray-300">좌측: 기존 버전 | 우측: 모바일 강화 버전</p>

        {/* 🎛️ 컨트롤 버튼 */}
        <div className="mt-4">
          <button
            onClick={() => setIsSpeaking(!isSpeaking)}
            className={`px-4 py-2 rounded transition-colors ${
              isSpeaking
                ? 'bg-green-500 text-white'
                : 'bg-gray-600 text-gray-300'
            }`}
          >
            {isSpeaking ? '🗣️ Speaking' : '😶 Silent'}
          </button>
        </div>
      </div>

      {/* 📊 화면 크기 정보 */}
      <div className="text-center mb-6">
        <div className="inline-block bg-black/30 backdrop-blur rounded-lg px-4 py-2 text-white text-sm">
          <span className="block sm:hidden">📱 Mobile View (&lt; 640px)</span>
          <span className="hidden sm:block md:hidden">📱 Small Desktop (640px-768px)</span>
          <span className="hidden md:block lg:hidden">💻 Medium Desktop (768px-1024px)</span>
          <span className="hidden lg:block">🖥️ Large Desktop (&gt; 1024px)</span>
        </div>
      </div>

      {/* 🔄 비교 영역 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[70vh]">

        {/* 🔵 기존 버전 */}
        <div className="relative border-2 border-blue-400 rounded-lg bg-black/20 backdrop-blur overflow-hidden">
          <div className="absolute top-2 left-2 bg-blue-500 text-white px-3 py-1 text-sm rounded z-10">
            🔵 CURRENT (30vw)
          </div>
          <div className="h-full flex items-end justify-center">
            <CharacterSprite_v2
              src={testCharacter.src}
              alt={testCharacter.alt}
              position={testCharacter.position}
              isVisible={testCharacter.isVisible}
              isSpeaking={isSpeaking}
            />
          </div>
        </div>

        {/* 🟢 테스트 버전 */}
        <div className="relative border-2 border-green-400 rounded-lg bg-black/20 backdrop-blur overflow-hidden">
          <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 text-sm rounded z-10">
            🟢 TEST (45vw mobile)
          </div>
          <div className="h-full flex items-end justify-center">
            <CharacterSprite_Test
              src={testCharacter.src}
              alt={testCharacter.alt}
              position={testCharacter.position}
              isVisible={testCharacter.isVisible}
              isSpeaking={isSpeaking}
            />
          </div>
        </div>

      </div>

      {/* 📏 크기 정보 */}
      <div className="mt-8 text-center text-white">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur rounded-lg p-4">
            <h3 className="font-semibold mb-2">📱 Mobile (360px)</h3>
            <p className="text-sm text-gray-300">
              Current: <span className="text-blue-400">108px</span><br/>
              Test: <span className="text-green-400">162px (+50%)</span>
            </p>
          </div>
          <div className="bg-black/30 backdrop-blur rounded-lg p-4">
            <h3 className="font-semibold mb-2">📱 iPhone (390px)</h3>
            <p className="text-sm text-gray-300">
              Current: <span className="text-blue-400">117px</span><br/>
              Test: <span className="text-green-400">175px (+50%)</span>
            </p>
          </div>
          <div className="bg-black/30 backdrop-blur rounded-lg p-4">
            <h3 className="font-semibold mb-2">💻 Desktop (1920px)</h3>
            <p className="text-sm text-gray-300">
              Current: <span className="text-blue-400">576px</span><br/>
              Test: <span className="text-green-400">300px (capped)</span>
            </p>
          </div>
        </div>
      </div>

      {/* 🎯 테스트 가이드 */}
      <div className="mt-8 max-w-2xl mx-auto text-center text-gray-300 text-sm">
        <p className="mb-2">🔍 <strong>테스트 방법:</strong></p>
        <p>1. Chrome DevTools → Device Toolbar (F12)</p>
        <p>2. iPhone 12/13, Galaxy S20 등으로 설정</p>
        <p>3. Speaking 버튼으로 캐릭터 반응 확인</p>
      </div>
    </div>
  );
};

export default TestPage;