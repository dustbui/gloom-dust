import { CharacterClass } from '../models/CharacterClass';
import { allCards } from './attackModifierCards';
import classes from './characterClasses.json';

const portraitMapper = name => `../../assets/images/portraits/${name.toLowerCase()}.png`

export const CharacterClasses = new Map();

classes.forEach(cc => {
    var characterClass = new CharacterClass();
    characterClass.name = cc.name;
    characterClass.thumbnailUrl = portraitMapper(cc.name);

    if (cc.perks) {
        cc.perks.forEach(perk => {
            var card = allCards.get(perk);
            if (!card) {
                console.warn(`Could not find perk card: ${perk} for class: ${cc.name}`);
            } else {
                characterClass.perks.push(card);
            }
        })
    }

    CharacterClasses.set(cc.name, characterClass);
});
