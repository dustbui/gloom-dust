import { AttackModifierCard } from '../models/attackModifierCard';
import cards from '../data/attackModifierCards.json';

export const allCards = new Map();
export const defaultCards: AttackModifierCard[] = [];
export const perkCards: AttackModifierCard[] = [];
export const scenarioCards: AttackModifierCard[] = [];

cards.forEach(card => {
    let attackModifierCard = new AttackModifierCard();
    Object.assign(attackModifierCard, card);

    // Only adders use the image mapper
    if (attackModifierCard.multiplier === 1) {
        attackModifierCard.centerImageUrl = imageMapper(attackModifierCard.adder);
    }

    // Add to map of all cards
    allCards.set(card.name, attackModifierCard);

    // Identify default cards by an existing default amount > 0
    if (card.defaultAmount) { defaultCards.push(attackModifierCard); }
});

export function retrieveCard(name: string) {
    return allCards.get(name).clone();
}

function imageMapper(adder) {
    return {
        '0': "url(assets/images/cards/zero.png)",
        '1': "url(assets/images/cards/plus1.png)",
        '2': "url(assets/images/cards/plus2.png)",
        '-1': "url(assets/images/cards/minus1.png)",
        '-2': "url(assets/images/cards/minus2.png)",
        "3": "url(assets/images/cards/plus3.png)"
    }[adder]
}
