import { CharacterClass } from '../models/CharacterClass';
import { 
    rollingFire, rollingNature, rollingWind, rollingLight, rollingDarkness, 
    rollingDisarm, rollingImmobilize, rollingInvisible, rollingStun, rollingMuddle, 
    rollingPoison, rollingPierce3, rollingAddTarget, rollingPush1, rollingPush2, 
    rollingPull1, rollingShield1, addTarget, stun, immobilizePlus1, 
    cursePlus1, woundPlus1, poisonPlus1, rollingselfHeal1, selfHeal2Plus1, shield1Plus1, 
    plus2Fire, plus2Ice, plus2Muddle, rollingPlus1, Plus3
} from './attackModifierCards';

const portraitMapper = name => `../../assets/images/portraits/${name.toLowerCase()}.png`

export const Brute = new CharacterClass();
Brute.perks = [
    Plus3, rollingPush1, rollingPierce3, rollingStun, 
    rollingDisarm, rollingMuddle, rollingAddTarget, shield1Plus1
]
Brute.name = `Brute`;
Brute.handSize = 10;
Brute.thumbnailUrl = portraitMapper(Brute.name);

export const Scoundrel = new CharacterClass();
Scoundrel.perks = [
    rollingPlus1, rollingPierce3, rollingPoison, rollingMuddle, rollingInvisible
]
Scoundrel.name = `Scoundrel`;
Scoundrel.handSize = 9;
Scoundrel.thumbnailUrl = portraitMapper(Scoundrel.name)

export const Spellweaver = new CharacterClass();
Spellweaver.perks = [
    plus2Fire, plus2Ice, cursePlus1, woundPlus1, stun, immobilizePlus1, 
    rollingNature, rollingWind, rollingLight, rollingDarkness
]
Spellweaver.name = `Spellweaver`;
Spellweaver.handSize = 8;
Spellweaver.thumbnailUrl = portraitMapper(Spellweaver.name)

export const Tinkerer = new CharacterClass();
Tinkerer.perks = [
    Plus3, rollingFire, rollingMuddle, woundPlus1, 
    immobilizePlus1, selfHeal2Plus1, addTarget
]
Tinkerer.name = `Tinkerer`;
Tinkerer.handSize = 14;
Tinkerer.thumbnailUrl = portraitMapper(Tinkerer.name)

export const MindThief = new CharacterClass();
MindThief.perks = [
    plus2Ice, rollingPlus1, rollingPull1, rollingMuddle, 
    rollingImmobilize, rollingStun, rollingDisarm
]
MindThief.name = `MindThief`;
MindThief.handSize = 10;
MindThief.thumbnailUrl = portraitMapper(MindThief.name)

export const Cragheart = new CharacterClass();
Cragheart.perks = [
    immobilizePlus1, plus2Muddle, rollingPush2, rollingNature, rollingWind
]
Cragheart.name = `Cragheart`;
Cragheart.handSize = 10;
Cragheart.thumbnailUrl = portraitMapper(Cragheart.name)

export const Sun = new CharacterClass();
Sun.name = `Sun`;
Sun.handSize = 10;
Sun.thumbnailUrl = portraitMapper(Sun.name)
Sun.perks = [
    rollingPlus1, rollingselfHeal1, rollingStun, rollingLight, rollingShield1
];

export const ThreeSpears = new CharacterClass();
ThreeSpears.name = `ThreeSpears`;
ThreeSpears.handSize = 10;
ThreeSpears.thumbnailUrl = portraitMapper(ThreeSpears.name)

export const Circles = new CharacterClass();
Circles.name = `Circles`;
Circles.handSize = 10;
Circles.thumbnailUrl = portraitMapper(Circles.name)

export const Eclipse = new CharacterClass();
Eclipse.name = `Eclipse`;
Eclipse.handSize = 10;
Eclipse.thumbnailUrl = portraitMapper(Eclipse.name)

export const Cthulhu = new CharacterClass();
Cthulhu.name = `Cthulhu`;
Cthulhu.handSize = 10;
Cthulhu.thumbnailUrl = portraitMapper(Cthulhu.name)

export const Lightning = new CharacterClass();
Lightning.name = `Lightning`;
Lightning.handSize = 10;
Lightning.thumbnailUrl = portraitMapper(Lightning.name)

export const Music = new CharacterClass();
Music.name = `Music`;
Music.handSize = 10;
Music.thumbnailUrl = portraitMapper(Music.name)

export const Angry = new CharacterClass();
Angry.name = `Angry`;
Angry.handSize = 12;
Angry.thumbnailUrl = portraitMapper(Angry.name)
Angry.perks = [
    rollingPlus1, plus2Muddle, immobilizePlus1, poisonPlus1, stun, rollingAddTarget
];

export const Saw = new CharacterClass();
Saw.name = `Saw`;
Saw.handSize = 10;
Saw.thumbnailUrl = portraitMapper(Saw.name)

export const Triangles = new CharacterClass();
Triangles.name = `Triangles`;
Triangles.handSize = 10;
Triangles.thumbnailUrl = portraitMapper(Triangles.name)

export const Two = new CharacterClass();
Two.name = `Two`;
Two.handSize = 10;
Two.thumbnailUrl = portraitMapper(Two.name)

export const CharacterClasses = {};
/* tslint:disable:no-string-literal */
CharacterClasses[`brute`] = Brute;
CharacterClasses[`scoundrel`] = Scoundrel;
CharacterClasses[`spellweaver`] = Spellweaver;
CharacterClasses[`tinkerer`] = Tinkerer;
CharacterClasses[`mindthief`] = MindThief;
CharacterClasses[`cragheart`] = Cragheart;
CharacterClasses[`sun`] = Sun;
CharacterClasses[`threespears`] = ThreeSpears;
CharacterClasses[`circles`] = Circles;
CharacterClasses[`eclipse`] = Eclipse;
CharacterClasses[`cthulhu`] = Cthulhu;
CharacterClasses[`lightning`] = Lightning;
CharacterClasses[`music`] = Music;
CharacterClasses[`angry`] = Angry;
CharacterClasses[`saw`] = Saw;
CharacterClasses[`triangles`] = Triangles;
CharacterClasses[`two`] = Two;
/* tslint:enable:no-string-literal */
