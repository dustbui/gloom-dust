import { CharacterClass } from '../models/CharacterClass';
import { plus2Fire, plus2Ice, cursePlus1, woundPlus1, stunPlus0, immobilizePlus1, rollingNature, rollingWind, rollingLight, rollingDarkness } from './attackModifierCards';

export const Brute = new CharacterClass();
Brute.name = 'Brute';
Brute.handSize = 10;
Brute.thumbnailUrl = '../../assets/images/portraits/brute.png';

export const Scoundrel = new CharacterClass();
Scoundrel.name = 'Scoundrel';
Scoundrel.handSize = 9;
Scoundrel.thumbnailUrl = '../../assets/images/portraits/scoundrel.png';

export const Spellweaver = new CharacterClass();
Spellweaver.perks = [plus2Fire, plus2Ice, cursePlus1, woundPlus1, stunPlus0, immobilizePlus1, 
                    rollingNature, rollingWind, rollingLight, rollingDarkness]
Spellweaver.name = 'Spellweaver';
Spellweaver.handSize = 8;
Spellweaver.thumbnailUrl = '../../assets/images/portraits/spellweaver.png';

export const Tinkerer = new CharacterClass();
Tinkerer.name = 'Tinkerer';
Tinkerer.handSize = 14;
Tinkerer.thumbnailUrl = '../../assets/images/portraits/tinkerer.png';

export const MindThief = new CharacterClass();
MindThief.name = 'MindThief';
MindThief.handSize = 10;
MindThief.thumbnailUrl = '../../assets/images/portraits/mindthief.png';

export const Cragheart = new CharacterClass();
Cragheart.name = 'Cragheart';
Cragheart.handSize = 10;
Cragheart.thumbnailUrl = '../../assets/images/portraits/cragheart.png';

export const CharacterClasses = {};
/* tslint:disable:no-string-literal */
CharacterClasses['brute'] = Brute;
CharacterClasses['scoundrel'] = Scoundrel;
CharacterClasses['spellweaver'] = Spellweaver;
CharacterClasses['tinkerer'] = Tinkerer;
CharacterClasses['mindthief'] = MindThief;
CharacterClasses['cragheart'] = Cragheart;
/* tslint:enable:no-string-literal */
