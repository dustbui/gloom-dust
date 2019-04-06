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
Sun.perks = [
    rollingPlus1, rollingHealSelf1, rollingStun, rollingLight, rollingShield1
]

export const CharacterClasses = {};
/* tslint:disable:no-string-literal */
CharacterClasses['brute'] = Brute;
CharacterClasses['scoundrel'] = Scoundrel;
CharacterClasses['spellweaver'] = Spellweaver;
CharacterClasses['tinkerer'] = Tinkerer;
CharacterClasses['mindthief'] = MindThief;
CharacterClasses['cragheart'] = Cragheart;
/* tslint:enable:no-string-literal */
