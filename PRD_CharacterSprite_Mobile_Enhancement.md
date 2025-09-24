# PRD: Character Sprite Mobile Sizing Enhancement

## Overview
비주얼노벨 게임의 모바일 UX 개선을 위한 캐릭터 스프라이트 반응형 크기 최적화

## Problem Statement
현재 모든 디바이스에서 캐릭터 스프라이트가 30vw로 고정되어 있어, 모바일에서 캐릭터가 너무 작게 표시됨 (iPhone 390px 기준 117px)

## Solution
**Mobile-First Responsive Design 적용:**
- **Mobile (0-767px)**: 45vw (iPhone 390px 기준 175px)
- **Desktop (768px+)**: 30vw (기존 유지)

## Technical Requirements

### Current State
```tsx
// CharacterSprite_v2.tsx:54
style={{
  maxWidth: '30vw',  // 모든 디바이스 고정
  minHeight: '50vh'
}}
```

### Target State
```tsx
// Mobile-first approach
style={{
  maxWidth: '45vw',  // Mobile default
  minHeight: '50vh'
}}

// + Media Query for Desktop
@media (min-width: 768px) {
  maxWidth: '30vw'
}
```

## Implementation Strategy
1. **Code Preservation**: 기존 코드 최대 보존
2. **Minimal Change**: `maxWidth` 스타일링만 수정
3. **Consistency**: 기존 breakpoint system (`sm:`, `md:`, `xl:`) 활용

## Success Metrics
- 모바일에서 캐릭터 크기 50% 증가 (117px → 175px)
- 데스크톱 경험 변화 없음
- 성능 저하 없음

## Testing Plan
1. iPhone/Android 디바이스에서 캐릭터 크기 확인
2. 태블릿에서 적절한 크기 유지 확인
3. 데스크톱에서 기존과 동일한 30vw 확인

## Risk Assessment
- **Low Risk**: 검증된 CSS viewport 단위 사용
- **Validated**: test-mobile.html에서 이미 검증 완료

---
**Status**: Ready for Implementation
**Priority**: High (Mobile UX Critical)
**Effort**: 1 Story Point (단순 스타일 수정)