import { GameData, Character } from './types';

// The character data, including sprites.
export const characters: { [id: string]: Omit<Character, 'id'> } = {
  'Rumi': {
    name: 'Rumi',
    sprites: {
      'neutral': './Rumi_half.png',
      'sad': './Rumi_half.png',
      'angry': './Rumi_half.png',
      'surprised': './Rumi_half.png'
    },
  },
  'Jinu': {
    name: 'Jinu',
    sprites: {
      'neutral': './Jinwoo.png',
      'serious': './Jinwoo.png',
      'sad': './Jinwoo.png',
      'human': './Jinwoo_human.png',
      'demon': './Jinwoo_Saja.png',
      'betrayal': './Jinwoo_Saja.png'
    },
  },
  'Mira': {
    name: 'Mira',
    sprites: {
      'neutral': './Mira.png'
    },
  },
  'Zoey': {
    name: 'Zoey',
    sprites: {
      'neutral': './Zoey.png'
    },
  },
  'Gwi-Ma': {
    name: 'Gwi-Ma',
    sprites: {
      'neutral': './Gwi-ma_real.png'
    },
  },
  'Duffy': {
    name: 'Duffy',
    sprites: {
      'neutral': './Dufy.png'
    },
  },
};

// Backgrounds
const BG_START = './3.background_start.jpg';
const BG_CONCERT_STAGE = './1.background.png';
const BG_BACKSTAGE = './1.background.png'; // 백스테이지
const BG_CLINIC = './1.background.png';
const BG_NIGHT_STREET = './8.background_narksanpark.png'; // 밤거리/다리
const BG_AWARDS = './3.background_start.jpg';
const BG_NAMSAN_TOWER = 'https://i.imgur.com/vHqQwgA.jpg';
const BG_UNDERGROUND = './2.background_Gwi-ma-home.jpg'; // 지하세계

// 새로운 배경들
const BG_STADIUM = './4.background_stadium.png'; // 공연장
const BG_HAPPY_ENDING = './5.background_happyending.png'; // 해피엔딩
const BG_BETRAYED_RUMI = './6.background_betrayedRumi.png'; // 루미 배신
const BG_BITTERSWEET_ENDING = './7.background_bittersweet.jpg'; // 비터스윗 엔딩
const BG_BAD_ENDING = './9.background_bad_ending.jpg'; // 배드 엔딩

const enGameData: GameData = {
  // ========== ACT 1: 귀마의 계략과 운명적 만남 ==========

  'prologue_intro': {
    background: BG_START,
    dialogue: [
      { character: 'Narrator', text: 'Long ago, there existed beings who could touch people\'s souls through song...' },
      { character: 'Narrator', text: 'They were called Hunters. With their voices, they created Soul Barriers - "Honmoon" - to protect humanity from demons.' },
      { character: 'Narrator', text: 'But demons, led by the fearsome Gwi-Ma, have grown stronger. Now, a new generation of Hunters must rise...' },
      { character: 'Narrator', text: 'This is the story of HUNTR/X - and their leader, Rumi.' },
    ],
    nextScene: 'gwi_ma_scheme',
  },

  'gwi_ma_scheme': {
    background: BG_UNDERGROUND,
    dialogue: [
      { character: 'Narrator', text: 'In the depths of the underworld, Gwi-Ma broods over his recent failures.' },
      { character: 'Gwi-Ma', emotion: 'neutral', text: 'DIRECT ATTACKS HAVE FAILED! THESE HUNTERS GROW STRONGER!', position: 'center' },
      { character: 'Narrator', text: 'His burning eyes turn toward his most trusted servant - Jinu.' },
      { character: 'Gwi-Ma', emotion: 'neutral', text: 'JINU! YOU WILL INFILTRATE THEIR RANKS. DESTROY THEM FROM WITHIN!', position: 'left' },
      { character: 'Jinu', emotion: 'sad', text: 'I understand, my lord. But what if...', position: 'right' },
      { character: 'Gwi-Ma', emotion: 'neutral', text: 'NO QUESTIONS! YOUR 400 YEARS OF SHAME BIND YOU TO ME!', position: 'left' },
      { character: 'Jinu', emotion: 'serious', text: '...Yes, master.', position: 'right' },
    ],
    nextScene: 'rumi_performance_crisis',
    onEnter: [
      { type: 'set', flag: 'JinwooTrust', value: 0 },
      { type: 'set', flag: 'CurseMark', value: 2 },
      { type: 'set', flag: 'Courage', value: 0 },
      { type: 'set', flag: 'Independence', value: 0 }
    ]
  },

  'rumi_performance_crisis': {
    background: BG_STADIUM,
    dialogue: [
      { character: 'Narrator', text: 'Meanwhile, HUNTR/X performs before thousands of adoring fans.' },
      { character: 'Mira', emotion: 'neutral', text: 'The energy tonight is incredible!', position: 'left' },
      { character: 'Rumi', emotion: 'neutral', text: 'Our fans deserve the best. Let\'s give them everything!', position: 'center' },
      { character: 'Zoey', emotion: 'neutral', text: 'Happy fans, happy Honmoon!', position: 'right' },
      { character: 'Narrator', text: 'But as Rumi reaches the climactic high note, something goes wrong...' },
      { character: 'Rumi', emotion: 'surprised', text: 'No... not now... not here...', position: 'center' },
      { character: 'Narrator', text: 'Dark patterns begin to appear on her skin, visible to the horrified audience.' },
      { character: 'Rumi', emotion: 'sad', text: 'I... I\'m sorry! I can\'t...', position: 'center' },
      { character: 'Narrator', text: 'Rumi flees the stage, leaving her teammates and fans in shocked confusion.' },
    ],
    nextScene: 'backstage_panic',
    onEnter: [
      { type: 'add', flag: 'CurseMark', value: 3 }
    ]
  },

  'backstage_panic': {
    background: BG_BACKSTAGE,
    dialogue: [
      { character: 'Rumi', emotion: 'sad', text: 'How am I supposed to fix the world, fix me, when I don\'t have my voice? Why? WHY!?', position: 'center' },
      { character: 'Mira', emotion: 'neutral', text: 'Rumi! What happened out there? What were those... marks?', position: 'left' },
      { character: 'Zoey', emotion: 'neutral', text: 'We\'re here for you. Whatever it is, we can handle it together.', position: 'right' },
      { character: 'Rumi', emotion: 'angry', text: 'You don\'t understand! You can\'t help with this!', position: 'center' },
      { character: 'Narrator', text: 'Rumi\'s world is crumbling. The secret she\'s hidden for so long is threatening to destroy everything.' },
    ],
    nextScene: 'seeking_help',
  },

  'seeking_help': {
    background: BG_BACKSTAGE,
    dialogue: [
      { character: 'Mira', emotion: 'neutral', text: 'Look, I know a place. An old traditional clinic. Maybe they can help.', position: 'left' },
      { character: 'Zoey', emotion: 'neutral', text: 'Ancient remedies sometimes work where modern medicine fails.', position: 'right' },
      { character: 'Rumi', emotion: 'sad', text: 'I... I have to try something. I can\'t let this happen again.', position: 'center' },
      { character: 'Narrator', text: 'Desperate for answers, Rumi decides to visit the clinic alone.' },
    ],
    nextScene: 'clinic_fateful_meeting',
  },

  'clinic_fateful_meeting': {
    background: BG_CLINIC,
    dialogue: [
      { character: 'Narrator', text: 'The scent of medicinal herbs fills the ancient clinic. Rumi sits alone, lost in thought.' },
      { character: 'Rumi', emotion: 'sad', text: 'These patterns... they\'re spreading faster. What if they see? What if they know what I really am?', position: 'left' },
      { character: 'Narrator', text: 'A gentle voice interrupts her thoughts.' },
      { character: 'Jinu', emotion: 'human', text: 'Hiding something?', position: 'right' },
      { character: 'Rumi', emotion: 'surprised', text: 'You! You\'re from Saja Boys! What are you doing here?', position: 'left' },
      { character: 'Jinu', emotion: 'neutral', text: 'Perhaps the same as you. Looking for answers to questions we\'re afraid to ask.', position: 'right' },
      { character: 'Narrator', text: 'His eyes linger on her collar, which barely conceals the creeping marks.' },
      { character: 'Rumi', emotion: 'surprised', text: 'Your eyes... they\'re like mine. Haunted.', position: 'left' },
      { character: 'Jinu', emotion: 'serious', text: 'Some burdens leave marks that never fade.', position: 'right' },
    ],
    nextScene: 'first_choice_moment',
  },

  'first_choice_moment': {
    background: BG_CLINIC,
    dialogue: [
      { character: 'Jinu', emotion: 'sad', text: 'I know what you\'re going through. The fear, the isolation... the marks that brand you as different.', position: 'right' },
      { character: 'Narrator', text: 'He slowly rolls up his sleeve, revealing the same dark, swirling patterns that plague Rumi.' },
      { character: 'Rumi', emotion: 'surprised', text: 'How...? You\'re like me?', position: 'left' },
      { character: 'Jinu', emotion: 'sad', text: 'These patterns are a constant reminder of my shame. A shame I can never escape.', position: 'right' },
      { character: 'Narrator', text: 'Rumi feels a pull toward this mysterious stranger who shares her burden. But can she trust him?' },
    ],
    choices: [
      {
        text: 'Open up to him. Maybe he truly understands.',
        nextScene: 'trust_path_begin',
        flagEffects: [
          { type: 'add', flag: 'JinwooTrust', value: 20 },
          { type: 'add', flag: 'Courage', value: 15 },
          { type: 'subtract', flag: 'CurseMark', value: 1 }
        ]
      },
      {
        text: 'Stay guarded. This could be a trap.',
        nextScene: 'distrust_path_begin',
        flagEffects: [
          { type: 'subtract', flag: 'JinwooTrust', value: 10 },
          { type: 'add', flag: 'Independence', value: 20 },
          { type: 'add', flag: 'CurseMark', value: 1 }
        ]
      },
    ]
  },

  // ========== TRUST PATH ==========
  'trust_path_begin': {
    background: BG_CLINIC,
    dialogue: [
      { character: 'Rumi', emotion: 'sad', text: 'I... I am a mistake. A hunter and a demon... a half-breed. These patterns are proof of my corruption.', position: 'left' },
      { character: 'Jinu', emotion: 'sad', text: 'For what it\'s worth, I don\'t think you\'re a mistake. You made a choice to protect people. I... I made different choices.', position: 'right' },
      { character: 'Narrator', text: 'A fragile connection forms between them, two souls caught between worlds.' },
      { character: 'Jinu', emotion: 'neutral', text: '400 years ago, I made a deal with Gwi-Ma to save my family. It cost me everything. I became this... thing.', position: 'right' },
      { character: 'Rumi', emotion: 'neutral', text: 'Because if there\'s no hope for you, what hope is there for me?', position: 'left' },
      { character: 'Jinu', emotion: 'neutral', text: 'Freedom... Is that even possible?', position: 'right' },
    ],
    nextScene: 'act2_preparation',
  },

  // ========== DISTRUST PATH ==========
  'distrust_path_begin': {
    background: BG_CLINIC,
    dialogue: [
      { character: 'Rumi', emotion: 'angry', text: 'I don\'t know what game you\'re playing, but I won\'t be fooled. A demon is a demon.', position: 'left' },
      { character: 'Jinu', emotion: 'sad', text: 'I understand your fear. I\'ve lived with it for 400 years.', position: 'right' },
      { character: 'Rumi', emotion: 'angry', text: 'Stay away from me and my team!', position: 'left' },
      { character: 'Narrator', text: 'Rumi leaves, but Jinu\'s words echo in her mind. His pain seemed... genuine.' },
      { character: 'Jinu', emotion: 'sad', text: '(She\'s just like me... but she won\'t see it. Maybe there truly is no hope.)', position: 'right' },
    ],
    nextScene: 'act2_preparation',
  },

  // ========== ACT 2: 관계의 발전과 시험 ==========

  'act2_preparation': {
    background: BG_BACKSTAGE,
    dialogue: [
      { character: 'Narrator', text: 'Two weeks later, HUNTR/X prepares for their biggest performance yet.' },
      { character: 'Mira', emotion: 'neutral', text: 'The press is still buzzing about the last show. We need this one to be perfect.', position: 'left' },
      { character: 'Zoey', emotion: 'neutral', text: 'What matters is that we\'re together. Right, Rumi?', position: 'right' },
      { character: 'Rumi', emotion: 'sad', text: 'I... I don\'t know if I can do this. What if it happens again?', position: 'center' },
      { character: 'Narrator', text: 'The weight of her secret grows heavier each day. The patterns continue to spread.' },
    ],
    nextScene: 'song_selection_dilemma',
    onEnter: [
      { type: 'add', flag: 'CurseMark', value: 1 }
    ]
  },

  'song_selection_dilemma': {
    background: BG_BACKSTAGE,
    dialogue: [
      { character: 'Mira', emotion: 'neutral', text: 'We could play it safe with "Take down" - the crowd loves that one.', position: 'left' },
      { character: 'Zoey', emotion: 'neutral', text: 'Or we could debut the new song "Golden". It\'s more personal, more... you.', position: 'right' },
      { character: 'Rumi', emotion: 'neutral', text: 'Golden... A song about accepting who you really are. Can I really sing about truth when I\'m living a lie?', position: 'center' },
      { character: 'Narrator', text: 'As they discuss, a mysterious figure approaches the practice room.' },
    ],
    nextScene: 'duffy_introduction',
  },

  'duffy_introduction': {
    background: BG_BACKSTAGE,
    dialogue: [
      { character: 'Duffy', emotion: 'neutral', text: 'Excuse me, miss Rumi? I have a message for you.', position: 'right' },
      { character: 'Rumi', emotion: 'surprised', text: 'Who are you? How did you get back here?', position: 'left' },
      { character: 'Duffy', emotion: 'neutral', text: 'My name is Duffy. I\'m... let\'s say a facilitator of important meetings.', position: 'right' },
      { character: 'Mira', emotion: 'neutral', text: 'Security should have stopped you. This is a private area.', position: 'center' },
      { character: 'Duffy', emotion: 'neutral', text: 'Sometimes the most important conversations happen in unexpected places. Jinu is waiting at the old bridge. He says it\'s urgent.', position: 'right' },
      { character: 'Narrator', text: 'Duffy\'s presence is strangely calming, yet mysterious. Who is this person, and how do they know about Jinu?' },
    ],
    nextScene: 'second_choice_moment',
  },

  'second_choice_moment': {
    background: BG_BACKSTAGE,
    dialogue: [
      { character: 'Duffy', emotion: 'neutral', text: 'The choice is yours, but some opportunities don\'t come twice. He seemed... desperate.', position: 'right' },
      { character: 'Mira', emotion: 'neutral', text: 'Rumi, we don\'t know this person. It could be a trap.', position: 'left' },
      { character: 'Zoey', emotion: 'neutral', text: 'But what if he really needs help? You seemed different after meeting him.', position: 'center' },
      { character: 'Narrator', text: 'Rumi\'s heart races. This decision could change everything.' },
    ],
    choices: [
      {
        text: 'Go to meet Jinu. He might have answers.',
        nextScene: 'bridge_meeting',
        flagEffects: [
          { type: 'add', flag: 'JinwooTrust', value: 15 },
          { type: 'add', flag: 'Courage', value: 25 }
        ]
      },
      {
        text: 'Refuse. Focus on the upcoming performance.',
        nextScene: 'independent_path',
        flagEffects: [
          { type: 'add', flag: 'Independence', value: 20 },
          { type: 'add', flag: 'MissedOpportunity', value: 1 }
        ]
      },
    ]
  },

  // ========== BRIDGE MEETING PATH ==========
  'bridge_meeting': {
    background: BG_NIGHT_STREET,
    dialogue: [
      { character: 'Narrator', text: 'The old bridge stands empty in the moonlight. Jinu waits, his silhouette lonely against the night sky.' },
      { character: 'Jinu', emotion: 'sad', text: 'You came. I wasn\'t sure you would.', position: 'right' },
      { character: 'Rumi', emotion: 'neutral', text: 'You said it was urgent. What\'s wrong?', position: 'left' },
      { character: 'Jinu', emotion: 'serious', text: 'Gwi-Ma knows about you. About what you are. He\'s planning something for your next performance.', position: 'right' },
      { character: 'Rumi', emotion: 'surprised', text: 'What? How does he...?', position: 'left' },
      { character: 'Jinu', emotion: 'sad', text: 'Because I told him. I was ordered to get close to you, to find your weakness.', position: 'right' },
      { character: 'Narrator', text: 'The truth hits Rumi like a physical blow. Her newfound trust crumbles.' },
    ],
    nextScene: 'betrayal_revelation',
  },

  // ========== INDEPENDENT PATH ==========
  'independent_path': {
    background: BG_BACKSTAGE,
    dialogue: [
      { character: 'Rumi', emotion: 'neutral', text: 'No. I need to focus on what\'s important - our music, our fans.', position: 'center' },
      { character: 'Duffy', emotion: 'neutral', text: 'I understand. But remember - sometimes the help we refuse is the help we need most.', position: 'right' },
      { character: 'Narrator', text: 'Duffy disappears as mysteriously as they appeared, leaving Rumi with her choice.' },
      { character: 'Mira', emotion: 'neutral', text: 'You made the right call. We\'ve got each other - that\'s what matters.', position: 'left' },
      { character: 'Zoey', emotion: 'neutral', text: 'Together we\'re stronger!', position: 'right' },
    ],
    nextScene: 'performance_preparation',
  },

  'betrayal_revelation': {
    background: BG_NIGHT_STREET,
    dialogue: [
      { character: 'Rumi', emotion: 'angry', text: 'You... you betrayed me! I trusted you!', position: 'left' },
      { character: 'Jinu', emotion: 'sad', text: 'But I\'m telling you now, aren\'t I? I\'m trying to warn you!', position: 'right' },
      { character: 'Rumi', emotion: 'angry', text: 'After you\'ve already sold me out! How can I believe anything you say?', position: 'left' },
      { character: 'Jinu', emotion: 'serious', text: 'Because for the first time in 400 years, I met someone who made me remember what hope feels like.', position: 'right' },
      { character: 'Narrator', text: 'Jinu\'s words ring with desperate sincerity, but the damage is done.' },
    ],
    nextScene: 'performance_preparation',
  },

  'performance_preparation': {
    background: BG_BACKSTAGE,
    dialogue: [
      { character: 'Narrator', text: 'The night of the grand performance arrives. The largest arena in the city is packed.' },
      { character: 'Mira', emotion: 'neutral', text: 'This is it. Our biggest audience yet.', position: 'left' },
      { character: 'Zoey', emotion: 'neutral', text: 'I can feel the energy from here! They\'re all counting on us.', position: 'right' },
      { character: 'Rumi', emotion: 'sad', text: 'What if I fail them again? What if the patterns...?', position: 'center' },
      { character: 'Narrator', text: 'As HUNTR/X takes the stage, Rumi doesn\'t notice the dark figures positioned throughout the crowd.' },
    ],
    nextScene: 'final_performance_crisis',
  },

  // ========== ACT 3: 배신과 3가지 운명 ==========

  'final_performance_crisis': {
    background: BG_STADIUM,
    dialogue: [
      { character: 'Narrator', text: 'The performance begins beautifully. The crowd is mesmerized by HUNTR/X\'s music.' },
      { character: 'Rumi', emotion: 'neutral', text: '(I can do this. I can control it. For them... for everyone who believes in us.)', position: 'center' },
      { character: 'Narrator', text: 'But as the climax approaches, the screens around the arena flicker and change.' },
      { character: 'Narrator', text: 'Images of Rumi\'s demon patterns appear for all to see. The crowd gasps in horror.' },
      { character: 'Rumi', emotion: 'surprised', text: 'No... this can\'t be happening!', position: 'center' },
      { character: 'Gwi-Ma', emotion: 'neutral', text: 'BEHOLD! YOUR BELOVED IDOL IS A DEMON! A HALF-BREED PRETENDER!', position: 'center' },
    ],
    nextScene: 'final_choice_setup',
  },

  'final_choice_setup': {
    background: BG_STADIUM,
    dialogue: [
      { character: 'Narrator', text: 'Chaos erupts. Fans scream and flee. Mira and Zoey rush to Rumi\'s side.' },
      { character: 'Mira', emotion: 'neutral', text: 'Rumi! Whatever this is, we\'ll face it together!', position: 'left' },
      { character: 'Zoey', emotion: 'neutral', text: 'You\'re still our leader! You\'re still our friend!', position: 'right' },
      { character: 'Narrator', text: 'Suddenly, Jinu appears on stage, his face conflicted between duty and conscience.' },
      { character: 'Jinu', emotion: 'demon', text: 'Rumi... I\'m sorry. I tried to fight it, but Gwi-Ma\'s control...', position: 'center' },
      { character: 'Narrator', text: 'This is the moment of truth. How will Rumi respond to this ultimate betrayal?' },
    ],
    nextScene: 'final_choice',
  },

  'final_choice': {
    background: BG_STADIUM,
    dialogue: [
      { character: 'Narrator', text: 'Everything hangs in the balance. The choice Rumi makes now will determine not just her fate, but the fate of everyone she cares about.' },
    ],
    choices: [
      {
        text: 'Try to reach Jinu\'s humanity. "You can still choose who you want to be!"',
        nextScene: 'happy_ending_path',
        condition: 'JinwooTrust >= 30',
        flagEffects: []
      },
      {
        text: 'Accept your nature and fight. "I am both hunter and demon - and I choose to protect!"',
        nextScene: 'bittersweet_ending_path',
        condition: 'JinwooTrust >= 10 || Courage >= 25',
        flagEffects: []
      },
      {
        text: 'Stand alone against the darkness. "I don\'t need anyone!"',
        nextScene: 'bad_ending_path',
        flagEffects: []
      },
    ]
  },

  // ========== ENDINGS ==========

  'happy_ending_path': {
    background: BG_HAPPY_ENDING,
    dialogue: [
      { character: 'Rumi', emotion: 'neutral', text: 'Jinu! You can still choose who you want to be! 400 years of pain doesn\'t have to define you!', position: 'left' },
      { character: 'Jinu', emotion: 'surprised', text: 'Rumi... even after everything, you still...?', position: 'right' },
      { character: 'Rumi', emotion: 'neutral', text: 'Nobody else gets to decide if you feel hope. That choice belongs to you.', position: 'left' },
      { character: 'Narrator', text: 'Jinu\'s eyes fill with tears - the first he\'s shed in centuries.' },
      { character: 'Jinu', emotion: 'neutral', text: 'You\'re right. You gave me my soul back. And now... I choose freedom!', position: 'right' },
      { character: 'Narrator', text: 'Together, Rumi and Jinu combine their power. Light and darkness merge into something new - a rainbow Honmoon that purifies Gwi-Ma\'s influence forever.' },
      { character: 'Narrator', text: 'HAPPY ENDING: The harmony of all souls, hunter and demon alike, creates a new world of understanding.' },
    ],
    nextScene: null
  },

  'bittersweet_ending_path': {
    background: BG_BITTERSWEET_ENDING,
    dialogue: [
      { character: 'Rumi', emotion: 'angry', text: 'I am both hunter and demon - and I choose to protect those I love!', position: 'center' },
      { character: 'Narrator', text: 'Rumi\'s song erupts with newfound power, but Gwi-Ma retaliates with devastating force.' },
      { character: 'Jinu', emotion: 'serious', text: 'No! I won\'t let him hurt you anymore!', position: 'right' },
      { character: 'Narrator', text: 'Jinu throws himself between Rumi and Gwi-Ma\'s attack.' },
      { character: 'Jinu', emotion: 'sad', text: 'Thank you... for showing me that redemption was possible...', position: 'right' },
      { character: 'Rumi', emotion: 'sad', text: 'Jinu! Your sacrifice won\'t be in vain!', position: 'left' },
      { character: 'Narrator', text: 'Powered by grief and determination, Rumi banishes Gwi-Ma. The world is saved, but at a terrible cost.' },
      { character: 'Narrator', text: 'BITTERSWEET ENDING: Victory achieved through sacrifice. Rumi becomes a symbol of hope for all who struggle with their dual nature.' },
    ],
    nextScene: null
  },

  'bad_ending_path': {
    background: BG_BAD_ENDING,
    dialogue: [
      { character: 'Rumi', emotion: 'angry', text: 'I don\'t need anyone! I\'ll face this alone!', position: 'center' },
      { character: 'Narrator', text: 'But isolation is exactly what Gwi-Ma wanted. Alone, Rumi cannot muster enough power.' },
      { character: 'Gwi-Ma', emotion: 'neutral', text: 'FOOLISH CHILD! PRIDE IS THE DOWNFALL OF ALL HEROES!', position: 'center' },
      { character: 'Mira', emotion: 'neutral', text: 'Rumi! Let us help you!', position: 'left' },
      { character: 'Zoey', emotion: 'neutral', text: 'We\'re stronger together!', position: 'right' },
      { character: 'Rumi', emotion: 'sad', text: 'I... I can\'t... I failed everyone...', position: 'center' },
      { character: 'Narrator', text: 'The Honmoon shatters completely. Darkness spreads across the world as Gwi-Ma claims victory.' },
      { character: 'Narrator', text: 'BAD ENDING: In trying to protect everyone by standing alone, Rumi loses everything. The world falls to despair.' },
    ],
    nextScene: null
  }
};

const koGameData: GameData = {
  'prologue_intro': {
    background: BG_START,
    dialogue: [
      { character: 'Narrator', text: '오래전부터 노래로 사람들의 영혼을 어루만질 수 있는 존재들이 있었다...' },
      { character: 'Narrator', text: '그들은 헌터라고 불렸다. 그들의 목소리로 혼문을 만들어 인류를 악령으로부터 보호했다.' },
      { character: 'Narrator', text: '하지만 귀마가 이끄는 악령들은 더욱 강해졌다. 이제 새로운 세대의 헌터들이 일어나야 한다...' },
      { character: 'Narrator', text: '이것은 헌트릭스와 그들의 리더 루미의 이야기다.' },
    ],
    nextScene: 'gwi_ma_scheme',
  },

  'gwi_ma_scheme': {
    background: BG_UNDERGROUND,
    dialogue: [
      { character: 'Narrator', text: '지하 세계 깊은 곳에서 귀마가 최근의 실패를 두고 분노하고 있다.' },
      { character: 'Gwi-Ma', emotion: 'neutral', text: '직접적인 공격은 실패했다! 이 헌터들이 강해지고 있어!', position: 'center' },
      { character: 'Narrator', text: '그의 불타는 눈이 가장 신뢰하는 부하인 진우를 향한다.' },
      { character: 'Gwi-Ma', emotion: 'neutral', text: '진우! 너는 그들의 대열에 침투할 것이다. 내부에서부터 파괴하라!', position: 'left' },
      { character: 'Jinu', emotion: 'sad', text: '알겠습니다, 주인님. 하지만 만약...', position: 'right' },
      { character: 'Gwi-Ma', emotion: 'neutral', text: '질문은 없다! 너의 400년 수치심이 나에게 묶여 있다!', position: 'left' },
      { character: 'Jinu', emotion: 'serious', text: '...네, 주인님.', position: 'right' },
    ],
    nextScene: 'rumi_performance_crisis',
    onEnter: [
      { type: 'set', flag: 'JinwooTrust', value: 0 },
      { type: 'set', flag: 'CurseMark', value: 2 },
      { type: 'set', flag: 'Courage', value: 0 },
      { type: 'set', flag: 'Independence', value: 0 }
    ]
  },

  'rumi_performance_crisis': {
    background: BG_STADIUM,
    dialogue: [
      { character: 'Narrator', text: '한편, 헌트릭스는 수만 명의 열광적인 팬들 앞에서 공연을 하고 있다.' },
      { character: 'Mira', emotion: 'neutral', text: '오늘 밤 에너지가 대단해!', position: 'left' },
      { character: 'Rumi', emotion: 'neutral', text: '팬들은 최고만을 받을 자격이 있어. 모든 걸 다 주자!', position: 'center' },
      { character: 'Zoey', emotion: 'neutral', text: '팬들이 행복하면, 혼문도 행복해!', position: 'right' },
      { character: 'Narrator', text: '하지만 루미가 클라이맥스 고음에 도달할 때, 뭔가 잘못되었다...' },
      { character: 'Rumi', emotion: 'surprised', text: '안돼... 지금은 안돼... 여기서는...', position: 'center' },
      { character: 'Narrator', text: '어두운 문양이 그녀의 피부에 나타나기 시작하고, 충격받은 관객들이 볼 수 있게 되었다.' },
      { character: 'Rumi', emotion: 'sad', text: '미안해! 할 수 없어...', position: 'center' },
      { character: 'Narrator', text: '루미는 무대에서 도망치고, 팀원들과 팬들은 충격과 혼란에 빠진다.' },
    ],
    nextScene: 'backstage_panic',
    onEnter: [
      { type: 'add', flag: 'CurseMark', value: 3 }
    ]
  },

  'backstage_panic': {
    background: BG_BACKSTAGE,
    dialogue: [
      { character: 'Rumi', emotion: 'sad', text: '내 목소리가 없는데 어떻게 세상을 구하고, 나를 고칠 수 있겠어? 왜? 왜지!?', position: 'center' },
      { character: 'Mira', emotion: 'neutral', text: '루미! 무대에서 무슨 일이야? 그 문양들은 뭐야?', position: 'left' },
      { character: 'Zoey', emotion: 'neutral', text: '우리가 있어. 무엇이든 함께 해결할 수 있어.', position: 'right' },
      { character: 'Rumi', emotion: 'angry', text: '이해 못해! 이건 도와줄 수 없어!', position: 'center' },
      { character: 'Narrator', text: '루미의 세상이 무너지고 있다. 그녀가 오랫동안 숨겨온 비밀이 모든 걸 파괴할 위협이 되고 있다.' },
    ],
    nextScene: 'seeking_help',
  },

  'seeking_help': {
    background: BG_BACKSTAGE,
    dialogue: [
      { character: 'Mira', emotion: 'neutral', text: '봐, 내가 아는 곳이 있어. 오래된 전통 한의원. 아마 도움이 될 거야.', position: 'left' },
      { character: 'Zoey', emotion: 'neutral', text: '고대 치료법이 때로는 현대 의학이 실패하는 곳에서 효과가 있어.', position: 'right' },
      { character: 'Rumi', emotion: 'sad', text: '뭔가... 뭔가 시도해봐야 해. 이런 일이 다시 일어나게 할 순 없어.', position: 'center' },
      { character: 'Narrator', text: '답을 갈망하며, 루미는 혼자 한의원을 방문하기로 결심한다.' },
    ],
    nextScene: 'clinic_fateful_meeting',
  },

  'clinic_fateful_meeting': {
    background: BG_CLINIC,
    dialogue: [
      { character: 'Narrator', text: '약초 냄새가 고대 한의원을 가득 채운다. 루미는 혼자 앉아 생각에 잠겨 있다.' },
      { character: 'Rumi', emotion: 'sad', text: '이 문양들... 더 빨리 퍼지고 있어. 만약 그들이 본다면? 내가 정말 뭔지 안다면?', position: 'left' },
      { character: 'Narrator', text: '부드러운 목소리가 그녀의 생각을 중단시킨다.' },
      { character: 'Jinu', emotion: 'neutral', text: '뭔가 숨기고 있나?', position: 'right' },
      { character: 'Rumi', emotion: 'surprised', text: '너! 사자 보이즈 출신이잖아! 여기서 뭐해?', position: 'left' },
      { character: 'Jinu', emotion: 'neutral', text: '아마 너와 같은 이유겠지. 우리가 묻기 무서워하는 질문들에 대한 답을 찾고 있어.', position: 'right' },
      { character: 'Narrator', text: '그의 시선이 기어다니는 문양을 간신히 가리는 그녀의 칼라에 머문다.' },
      { character: 'Rumi', emotion: 'surprised', text: '네 눈... 나처럼 괴로워하고 있어.', position: 'left' },
      { character: 'Jinu', emotion: 'serious', text: '어떤 짐들은 절대 사라지지 않는 흔적을 남겨.', position: 'right' },
    ],
    nextScene: 'first_choice_moment',
  },

  'first_choice_moment': {
    background: BG_CLINIC,
    dialogue: [
      { character: 'Jinu', emotion: 'sad', text: '네가 겪고 있는 걸 알아. 두려움, 고립감... 너를 다르다고 낙인찍는 문양들.', position: 'right' },
      { character: 'Narrator', text: '그는 천천히 소매를 걷어 루미를 괴롭히는 것과 같은 어둡고 소용돌이치는 문양을 드러낸다.' },
      { character: 'Rumi', emotion: 'surprised', text: '어떻게...? 너도 나처럼?', position: 'left' },
      { character: 'Jinu', emotion: 'sad', text: '이 문양들은 내 수치심을 끊임없이 상기시켜줘. 절대 벗어날 수 없는 수치심을.', position: 'right' },
      { character: 'Narrator', text: '루미는 자신의 짐을 공유하는 이 신비로운 낯선 사람에게 끌림을 느낀다. 하지만 그를 믿을 수 있을까?' },
    ],
    choices: [
      {
        text: '그에게 마음을 열어보자. 아마 그가 정말 이해할 거야.',
        nextScene: 'trust_path_begin',
        flagEffects: [
          { type: 'add', flag: 'JinwooTrust', value: 20 },
          { type: 'add', flag: 'Courage', value: 15 },
          { type: 'subtract', flag: 'CurseMark', value: 1 }
        ]
      },
      {
        text: '경계심을 유지하자. 이건 함정일 수도 있어.',
        nextScene: 'distrust_path_begin',
        flagEffects: [
          { type: 'subtract', flag: 'JinwooTrust', value: 10 },
          { type: 'add', flag: 'Independence', value: 20 },
          { type: 'add', flag: 'CurseMark', value: 1 }
        ]
      },
    ]
  },

  'trust_path_begin': {
    background: BG_CLINIC,
    dialogue: [
      { character: 'Rumi', emotion: 'sad', text: '나는... 나는 실수야. 헌터이자 악령... 혼혈이지. 이 문양들이 내 타락의 증거야.', position: 'left' },
      { character: 'Jinu', emotion: 'sad', text: '솔직히 말하면, 너는 실수가 아니라고 생각해. 넌 사람들을 보호하기 위해 선택을 한 거야. 나는... 다른 선택을 했지.', position: 'right' },
      { character: 'Narrator', text: '두 세계 사이에 갇힌 두 영혼 사이에 깨지기 쉬운 연결이 형성된다.' },
      { character: 'Jinu', emotion: 'neutral', text: '400년 전, 가족을 구하기 위해 귀마와 거래했어. 모든 것을 잃었지. 이런... 존재가 되었어.', position: 'right' },
      { character: 'Rumi', emotion: 'neutral', text: '너에게 희망이 없다면, 나에게 무슨 희망이 있겠어?', position: 'left' },
      { character: 'Jinu', emotion: 'neutral', text: '자유... 그게 가능할까?', position: 'right' },
    ],
    nextScene: 'act2_preparation',
  },

  'distrust_path_begin': {
    background: BG_CLINIC,
    dialogue: [
      { character: 'Rumi', emotion: 'angry', text: '무슨 게임을 하는지 모르겠지만, 속지 않을 거야. 악령은 악령일 뿐이야.', position: 'left' },
      { character: 'Jinu', emotion: 'sad', text: '네 두려움을 이해해. 나도 400년간 그 두려움과 함께 살았거든.', position: 'right' },
      { character: 'Rumi', emotion: 'angry', text: '나와 내 팀에게서 떨어져!', position: 'left' },
      { character: 'Narrator', text: '루미는 떠나지만, 진우의 말이 그녀의 마음에 메아리친다. 그의 고통이... 진짜 같았다.' },
      { character: 'Jinu', emotion: 'sad', text: '(그녀는 나와 똑같아... 하지만 그걸 보려 하지 않아. 정말 희망이 없는 건가.)', position: 'right' },
    ],
    nextScene: 'act2_preparation',
  },

  'act2_preparation': {
    background: BG_BACKSTAGE,
    dialogue: [
      { character: 'Narrator', text: '2주 후, 헌트릭스는 지금까지 가장 큰 공연을 준비한다.' },
      { character: 'Mira', emotion: 'neutral', text: '언론이 아직도 지난 공연에 대해 떠들고 있어. 이번엔 완벽해야 해.', position: 'left' },
      { character: 'Zoey', emotion: 'neutral', text: '중요한 건 우리가 함께라는 거야. 맞지, 루미?', position: 'right' },
      { character: 'Rumi', emotion: 'sad', text: '할 수 있을지... 모르겠어. 또 그런 일이 생기면 어떡하지?', position: 'center' },
      { character: 'Narrator', text: '그녀의 비밀의 무게가 매일 더 무거워진다. 문양들이 계속 퍼지고 있다.' },
    ],
    nextScene: 'song_selection_dilemma',
    onEnter: [
      { type: 'add', flag: 'CurseMark', value: 1 }
    ]
  },

  'song_selection_dilemma': {
    background: BG_BACKSTAGE,
    dialogue: [
      { character: 'Mira', emotion: 'neutral', text: '안전하게 "Take down"로 갈 수도 있어 - 관객들이 좋아하는 곡이니까.', position: 'left' },
      { character: 'Zoey', emotion: 'neutral', text: '아니면 새 곡 "Golden"를 데뷔시킬 수도 있어. 더 개인적이고, 더... 너다워.', position: 'right' },
      { character: 'Rumi', emotion: 'neutral', text: 'Golden... 진정한 자신을 받아들이는 노래. 거짓으로 살고 있는 내가 진실에 대해 노래할 수 있을까?', position: 'center' },
      { character: 'Narrator', text: '그들이 논의하는 동안, 신비로운 인물이 연습실에 다가온다.' },
    ],
    nextScene: 'duffy_introduction',
  },

  'duffy_introduction': {
    background: BG_BACKSTAGE,
    dialogue: [
      { character: 'Duffy', emotion: 'neutral', text: '실례합니다, 루미씨? 당신에게 전할 메시지가 있어요.', position: 'right' },
      { character: 'Rumi', emotion: 'surprised', text: '누구세요? 어떻게 여기까지 들어왔죠?', position: 'left' },
      { character: 'Duffy', emotion: 'neutral', text: '제 이름은 더피입니다. 중요한 만남의... 중재자라고 할까요.', position: 'right' },
      { character: 'Mira', emotion: 'neutral', text: '보안이 막았어야 했는데. 여기는 사적인 구역이에요.', position: 'center' },
      { character: 'Duffy', emotion: 'neutral', text: '때로는 가장 중요한 대화가 예상치 못한 장소에서 일어나죠. 진우가 오래된 다리에서 기다리고 있어요. 급하다고 하더군요.', position: 'right' },
      { character: 'Narrator', text: '더피의 존재는 이상하게 평온하면서도 신비롭다. 이 사람은 누구이며, 진우에 대해 어떻게 알고 있는 것일까?' },
    ],
    nextScene: 'second_choice_moment',
  },

  'second_choice_moment': {
    background: BG_BACKSTAGE,
    dialogue: [
      { character: 'Duffy', emotion: 'neutral', text: '선택은 당신 몫이지만, 어떤 기회는 두 번 오지 않아요. 그가 절망적으로 보였거든요.', position: 'right' },
      { character: 'Mira', emotion: 'neutral', text: '루미, 우리는 이 사람을 모르잖아. 함정일 수도 있어.', position: 'left' },
      { character: 'Zoey', emotion: 'neutral', text: '하지만 정말 도움이 필요하다면? 그를 만난 후 네가 달라 보였어.', position: 'center' },
      { character: 'Narrator', text: '루미의 심장이 빨리 뛴다. 이 결정이 모든 걸 바꿀 수 있다.' },
    ],
    choices: [
      {
        text: '진우를 만나러 간다. 그가 답을 가지고 있을지도.',
        nextScene: 'bridge_meeting',
        flagEffects: [
          { type: 'add', flag: 'JinwooTrust', value: 15 },
          { type: 'add', flag: 'Courage', value: 25 }
        ]
      },
      {
        text: '거절한다. 다가오는 공연에 집중해야 해.',
        nextScene: 'independent_path',
        flagEffects: [
          { type: 'add', flag: 'Independence', value: 20 },
          { type: 'add', flag: 'MissedOpportunity', value: 1 }
        ]
      },
    ]
  },

  'bridge_meeting': {
    background: BG_NIGHT_STREET,
    dialogue: [
      { character: 'Narrator', text: '오래된 다리가 달빛 아래 텅 비어 있다. 진우가 기다리고 있고, 그의 실루엣이 밤하늘에 외로이 서 있다.' },
      { character: 'Jinu', emotion: 'sad', text: '왔구나. 올지 확신하지 못했어.', position: 'right' },
      { character: 'Rumi', emotion: 'neutral', text: '급하다고 했잖아. 무슨 일이야?', position: 'left' },
      { character: 'Jinu', emotion: 'serious', text: '귀마가 너에 대해 알고 있어. 네가 무엇인지. 다음 공연에서 뭔가를 계획하고 있어.', position: 'right' },
      { character: 'Rumi', emotion: 'surprised', text: '뭐? 어떻게 그가...?', position: 'left' },
      { character: 'Jinu', emotion: 'sad', text: '내가 말했거든. 너에게 접근해서 약점을 찾으라는 명령을 받았어.', position: 'right' },
      { character: 'Narrator', text: '진실이 루미를 물리적 타격처럼 강타한다. 새로 찾은 신뢰가 무너진다.' },
    ],
    nextScene: 'betrayal_revelation',
  },

  'independent_path': {
    background: BG_BACKSTAGE,
    dialogue: [
      { character: 'Rumi', emotion: 'neutral', text: '아니야. 중요한 것에 집중해야 해 - 우리 음악, 우리 팬들.', position: 'center' },
      { character: 'Duffy', emotion: 'neutral', text: '이해합니다. 하지만 기억하세요 - 때로는 우리가 거절하는 도움이 가장 필요한 도움이기도 해요.', position: 'right' },
      { character: 'Narrator', text: '더피는 나타났을 때처럼 신비롭게 사라지고, 루미는 자신의 선택과 함께 남겨진다.' },
      { character: 'Mira', emotion: 'neutral', text: '올바른 선택을 했어. 우리끼리 있으면 돼 - 그게 중요한 거야.', position: 'left' },
      { character: 'Zoey', emotion: 'neutral', text: '함께면 더 강해져!', position: 'right' },
    ],
    nextScene: 'performance_preparation',
  },

  'betrayal_revelation': {
    background: BG_NIGHT_STREET,
    dialogue: [
      { character: 'Rumi', emotion: 'angry', text: '넌... 날 배신했어! 널 믿었는데!', position: 'left' },
      { character: 'Jinu', emotion: 'sad', text: '하지만 지금 말하고 있잖아, 그렇지? 널 경고하려고 하는 거야!', position: 'right' },
      { character: 'Rumi', emotion: 'angry', text: '이미 날 팔아넘긴 후에! 네가 하는 말을 어떻게 믿어?', position: 'left' },
      { character: 'Jinu', emotion: 'serious', text: '400년 만에 처음으로, 희망이 무엇인지 기억나게 해준 사람을 만났거든.', position: 'right' },
      { character: 'Narrator', text: '진우의 말이 절망적인 진실함으로 울린다. 하지만 피해는 이미 입었다.' },
    ],
    nextScene: 'performance_preparation',
  },

  'performance_preparation': {
    background: BG_BACKSTAGE,
    dialogue: [
      { character: 'Narrator', text: '대공연의 밤이 도착했다. 도시에서 가장 큰 아레나가 가득 찼다.' },
      { character: 'Mira', emotion: 'neutral', text: '바로 이거야. 지금까지 가장 큰 관객이야.', position: 'left' },
      { character: 'Zoey', emotion: 'neutral', text: '여기서도 에너지가 느껴져! 모두가 우리를 믿고 있어.', position: 'right' },
      { character: 'Rumi', emotion: 'sad', text: '또 실패하면 어떡하지? 문양들이...?', position: 'center' },
      { character: 'Narrator', text: '헌트릭스가 무대에 오르는 동안, 루미는 관중 곳곳에 배치된 어둠의 형체들을 알아차리지 못한다.' },
    ],
    nextScene: 'final_performance_crisis',
  },

  'final_performance_crisis': {
    background: BG_STADIUM,
    dialogue: [
      { character: 'Narrator', text: '공연이 아름답게 시작된다. 관중은 헌트릭스의 음악에 매혹된다.' },
      { character: 'Rumi', emotion: 'neutral', text: '(할 수 있어. 통제할 수 있어. 그들을 위해... 우리를 믿는 모든 사람을 위해.)', position: 'center' },
      { character: 'Narrator', text: '하지만 클라이맥스가 다가오면서, 아레나 주변의 스크린들이 깜빡이며 바뀐다.' },
      { character: 'Narrator', text: '루미의 악령 문양 이미지가 모든 사람이 볼 수 있게 나타난다. 관중이 공포에 질려 숨을 죽인다.' },
      { character: 'Rumi', emotion: 'surprised', text: '안돼... 이런 일이 생길 리 없어!', position: 'center' },
      { character: 'Gwi-Ma', emotion: 'neutral', text: '보라! 너희가 사랑하는 아이돌은 악령이다! 혼혈 사기꾼이야!', position: 'center' },
    ],
    nextScene: 'final_choice_setup',
  },

  'final_choice_setup': {
    background: BG_STADIUM,
    dialogue: [
      { character: 'Narrator', text: '혼돈이 터진다. 팬들이 비명을 지르며 도망친다. 미라와 조이가 루미의 곁으로 달려온다.' },
      { character: 'Mira', emotion: 'neutral', text: '루미! 이게 뭐든, 함께 맞서자!', position: 'left' },
      { character: 'Zoey', emotion: 'neutral', text: '넌 여전히 우리 리더야! 여전히 우리 친구야!', position: 'right' },
      { character: 'Narrator', text: '갑자기 진우가 무대에 나타나고, 그의 얼굴에는 의무와 양심 사이의 갈등이 나타난다.' },
      { character: 'Jinu', emotion: 'serious', text: '루미... 미안해. 맞서려 했지만, 귀마의 통제가...', position: 'center' },
      { character: 'Narrator', text: '진실의 순간이다. 루미가 이 궁극적 배신에 어떻게 반응할지가 모든 것을 결정할 것이다.' },
    ],
    nextScene: 'final_choice',
  },

  'final_choice': {
    background: BG_STADIUM,
    dialogue: [
      { character: 'Narrator', text: '모든 것이 균형에 달려 있다. 루미가 지금 내리는 선택이 그녀의 운명뿐만 아니라 그녀가 소중히 여기는 모든 사람의 운명을 결정할 것이다.' },
    ],
    choices: [
      {
        text: '진우의 인간성에 호소한다. "넌 여전히 누가 될지 선택할 수 있어!"',
        nextScene: 'happy_ending_path',
        condition: 'JinwooTrust >= 30',
        flagEffects: []
      },
      {
        text: '자신의 본성을 받아들이고 싸운다. "나는 헌터이자 악령 - 그리고 보호하기로 선택해!"',
        nextScene: 'bittersweet_ending_path',
        condition: 'JinwooTrust >= 10 || Courage >= 25',
        flagEffects: []
      },
      {
        text: '혼자서 어둠에 맞선다. "누구도 필요 없어!"',
        nextScene: 'bad_ending_path',
        flagEffects: []
      },
    ]
  },

  'happy_ending_path': {
    background: BG_HAPPY_ENDING,
    dialogue: [
      { character: 'Rumi', emotion: 'neutral', text: '진우! 넌 여전히 누가 될지 선택할 수 있어! 400년의 고통이 너를 정의할 필요는 없어!', position: 'left' },
      { character: 'Jinu', emotion: 'surprised', text: '루미... 이 모든 일 후에도, 넌 여전히...?', position: 'right' },
      { character: 'Rumi', emotion: 'neutral', text: '희망을 느낄지 말지는 다른 사람이 결정하는 게 아니야. 그 선택은 네게 달려 있어.', position: 'left' },
      { character: 'Narrator', text: '진우의 눈에 눈물이 찬다 - 수 세기 만에 처음 흘리는 눈물이다.' },
      { character: 'Jinu', emotion: 'neutral', text: '맞아. 넌 내 영혼을 되돌려줬어. 그리고 이제... 자유를 선택해!', position: 'right' },
      { character: 'Narrator', text: '루미와 진우가 함께 힘을 합친다. 빛과 어둠이 새로운 것으로 합쳐진다 - 귀마의 영향력을 영원히 정화하는 무지개 혼문.' },
      { character: 'Narrator', text: '해피 엔딩: 헌터와 악령을 막론한 모든 영혼의 조화가 이해의 새로운 세계를 창조한다.' },
    ],
    nextScene: null
  },

  'bittersweet_ending_path': {
    background: BG_BITTERSWEET_ENDING,
    dialogue: [
      { character: 'Rumi', emotion: 'angry', text: '나는 헌터이자 악령 - 그리고 사랑하는 사람들을 보호하기로 선택해!', position: 'center' },
      { character: 'Narrator', text: '루미의 노래가 새로운 힘으로 터져 나오지만, 귀마가 파괴적인 힘으로 반격한다.' },
      { character: 'Jinu', emotion: 'serious', text: '안돼! 더 이상 널 다치게 하지 않을 거야!', position: 'right' },
      { character: 'Narrator', text: '진우가 루미와 귀마의 공격 사이로 몸을 던진다.' },
      { character: 'Jinu', emotion: 'sad', text: '고마워... 구원이 가능하다는 걸 보여줘서...', position: 'right' },
      { character: 'Rumi', emotion: 'sad', text: '진우! 네 희생은 헛되지 않을 거야!', position: 'left' },
      { character: 'Narrator', text: '슬픔과 결의에 힘입어, 루미가 귀마를 추방한다. 세상은 구원되었지만, 끔찍한 대가를 치렀다.' },
      { character: 'Narrator', text: '비터스윗 엔딩: 희생을 통해 얻은 승리. 루미는 이중 본성과 투쟁하는 모든 이들에게 희망의 상징이 된다.' },
    ],
    nextScene: null
  },

  'bad_ending_path': {
    background: BG_BAD_ENDING,
    dialogue: [
      { character: 'Rumi', emotion: 'angry', text: '누구도 필요 없어! 혼자서 맞설 거야!', position: 'center' },
      { character: 'Narrator', text: '하지만 고립이 바로 귀마가 원하던 것이었다. 혼자서는 루미가 충분한 힘을 모을 수 없다.' },
      { character: 'Gwi-Ma', emotion: 'neutral', text: '어리석은 아이! 오만이 모든 영웅의 몰락이다!', position: 'center' },
      { character: 'Mira', emotion: 'neutral', text: '루미! 우리가 도와줄게!', position: 'left' },
      { character: 'Zoey', emotion: 'neutral', text: '함께면 더 강해!', position: 'right' },
      { character: 'Rumi', emotion: 'sad', text: '할 수... 없어... 모든 사람을 실패시켰어...', position: 'center' },
      { character: 'Narrator', text: '혼문이 완전히 산산조각 난다. 귀마가 승리를 선언하면서 어둠이 세상에 퍼진다.' },
      { character: 'Narrator', text: '배드 엔딩: 혼자 서서 모든 사람을 보호하려다가, 루미는 모든 것을 잃는다. 세상이 절망에 빠진다.' },
    ],
    nextScene: null
  }
};

export const translations = {
  en: {
    title: "K-Pop Demon Hunters v2",
    subtitle: "A Visual Novel",
    startGame: "Start Game",
    toBeContinued: "To Be Continued...",
    thankYou: "Thank you for playing.",
    playAgain: "Play Again",
    characters: {
      'Narrator': 'Narrator', 'Rumi': 'Rumi', 'Jinu': 'Jinu', 'Mira': 'Mira', 'Zoey': 'Zoey', 'Gwi-Ma': 'Gwi-Ma', 'Duffy': 'Duffy',
    },
    gameData: enGameData,
  },
  ko: {
    title: "K-팝 데몬 헌터스 v2",
    subtitle: "비주얼 노벨",
    startGame: "게임 시작",
    toBeContinued: "다음 편에 계속...",
    thankYou: "플레이해주셔서 감사합니다.",
    playAgain: "다시 플레이",
    characters: {
      'Narrator': '나레이터', 'Rumi': '루미', 'Jinu': '진우', 'Mira': '미라', 'Zoey': '조이', 'Gwi-Ma': '귀마', 'Duffy': '더피',
    },
    gameData: koGameData,
  }
};