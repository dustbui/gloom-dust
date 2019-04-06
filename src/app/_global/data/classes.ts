import { CharacterClass } from '../models/CharacterClass';
import { 
    rollingFire, rollingNature, rollingWind, rollingLight, rollingDarkness, 
    rollingDisarm, rollingImmobilize, rollingInvisible, rollingStun, rollingMuddle, 
    rollingPoison, rollingPierce3, rollingAddTarget, rollingPush1, rollingPush2, 
    rollingPull1, rollingShield1, addTargetPlus0, stunPlus0, immobilizePlus1, 
    cursePlus1, woundPlus1, rollingHealSelf1, healSelf2Plus1, shield1Plus1, 
    plus2Fire, plus2Ice, plus2Muddle, rollingPlus1, Plus3
} from './attackModifierCards';

export const Brute = new CharacterClass();
Brute.perks = [
    Plus3, rollingPush1, rollingPierce3, rollingStun, 
    rollingDisarm, rollingMuddle, rollingAddTarget, shield1Plus1
]
Brute.name = 'Brute';
Brute.handSize = 10;
Brute.thumbnailUrl = '../../assets/images/portraits/brute.png';

export const Scoundrel = new CharacterClass();
Scoundrel.perks = [
    rollingPlus1, rollingPierce3, rollingPoison, rollingMuddle, rollingInvisible
]
Scoundrel.name = 'Scoundrel';
Scoundrel.handSize = 9;
Scoundrel.thumbnailUrl = '../../assets/images/portraits/scoundrel.png';

export const Spellweaver = new CharacterClass();
Spellweaver.perks = [
    plus2Fire, plus2Ice, cursePlus1, woundPlus1, stunPlus0, immobilizePlus1, 
    rollingNature, rollingWind, rollingLight, rollingDarkness
]
Spellweaver.name = 'Spellweaver';
Spellweaver.handSize = 8;
Spellweaver.thumbnailUrl = '../../assets/images/portraits/spellweaver.png';

export const Tinkerer = new CharacterClass();
Tinkerer.perks = [
    Plus3, rollingFire, rollingMuddle, woundPlus1, 
    immobilizePlus1, healSelf2Plus1, addTargetPlus0
]
Tinkerer.name = 'Tinkerer';
Tinkerer.handSize = 14;
Tinkerer.thumbnailUrl = '../../assets/images/portraits/tinkerer.png';

export const MindThief = new CharacterClass();
MindThief.perks = [
    plus2Ice, rollingPlus1, rollingPull1, rollingMuddle, 
    rollingImmobilize, rollingStun, rollingDisarm
]
MindThief.name = 'MindThief';
MindThief.handSize = 10;
MindThief.thumbnailUrl = '../../assets/images/portraits/mindthief.png';

export const Cragheart = new CharacterClass();
Cragheart.perks = [
    immobilizePlus1, plus2Muddle, rollingPush2, rollingNature, rollingWind
]
Cragheart.name = 'Cragheart';
Cragheart.handSize = 10;
Cragheart.thumbnailUrl = '../../assets/images/portraits/cragheart.png';

export const Sun = new CharacterClass();
Sun.name = 'Sun';
Sun.handSize = 10;
Sun.thumbnailUrl = '../../assets/images/portraits/icon-sun.png';
Sun.perks = [
    rollingPlus1, rollingHealSelf1, rollingStun, rollingLight, rollingShield1
];

export const ThreeSpears = new CharacterClass();
ThreeSpears.name = 'TreeSpears';
ThreeSpears.handSize = 10;
ThreeSpears.thumbnailUrl = '../../assets/images/portraits/icon-three-spears.png';

export const Circles = new CharacterClass();
Circles.name = 'Circles';
Circles.handSize = 10;
Circles.thumbnailUrl = '../../assets/images/portraits/icon-circles.png';

export const Eclipse = new CharacterClass();
Eclipse.name = 'Eclipse';
Eclipse.handSize = 10;
Eclipse.thumbnailUrl = '../../assets/images/portraits/icon-eclipse.png';

export const Cthulhu = new CharacterClass();
Cthulhu.name = 'Cthulhu';
Cthulhu.handSize = 10;
Cthulhu.thumbnailUrl = '../../assets/images/portraits/icon-cthulhu.png';

export const Lightning = new CharacterClass();
Lightning.name = 'Lightning';
Lightning.handSize = 10;
Lightning.thumbnailUrl = '../../assets/images/portraits/icon-lightning.png';

export const Music = new CharacterClass();
Music.name = 'Music';
Music.handSize = 10;
Music.thumbnailUrl = '../../assets/images/portraits/icon-music.png';

export const Angry = new CharacterClass();
Angry.name = 'Angry';
Angry.handSize = 10;
Angry.thumbnailUrl = '../../assets/images/portraits/icon-angry.png';

export const Saw = new CharacterClass();
Saw.name = 'Saw';
Saw.handSize = 10;
Saw.thumbnailUrl = '../../assets/images/portraits/icon-saw.png';

export const Triangles = new CharacterClass();
Triangles.name = 'Triangles';
Triangles.handSize = 10;
Triangles.thumbnailUrl = '../../assets/images/portraits/icon-triangles.png';

export const Two = new CharacterClass();
Two.name = 'Angry';
Two.handSize = 10;
Two.thumbnailUrl = '../../assets/images/portraits/icon-two.png';

export const CharacterClasses = {};
/* tslint:disable:no-string-literal */
CharacterClasses['brute'] = Brute;
CharacterClasses['scoundrel'] = Scoundrel;
CharacterClasses['spellweaver'] = Spellweaver;
CharacterClasses['tinkerer'] = Tinkerer;
CharacterClasses['mindthief'] = MindThief;
CharacterClasses['cragheart'] = Cragheart;
CharacterClasses['sun'] = Sun;
CharacterClasses['threespears'] = ThreeSpears;
CharacterClasses['circles'] = Circles;
CharacterClasses['eclipse'] = Eclipse;
CharacterClasses['cthulhu'] = Cthulhu;
CharacterClasses['lightning'] = Lightning;
CharacterClasses['music'] = Music;
CharacterClasses['angry'] = Angry;
CharacterClasses['saw'] = Saw;
CharacterClasses['triangles'] = Triangles;
CharacterClasses['two'] = Two;
/* tslint:enable:no-string-literal */
