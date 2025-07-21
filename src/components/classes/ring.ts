import {CBaseItem} from "./base";
import {IAdditionalPattern} from "../parser/types.ts";
import {
    ALL_CHARACTERS,
    DEXTERITY,
    INTELLIGENT,
    LIFE,
    LIFE_PERCENT,
    MANA,
    MANA_PERCENT,
    MANA_REGEN,
    STRENGTH
} from "./consts/characterPatterns.ts";
import {ACCURACY, RARITY} from "./consts/patterns.ts";
import {CHAOS_RESIST, ELEMENTAL_RESIST, FIRE_RESIST, ICE_RESIST, LIGHTNING_RESIST} from "./consts/resistPatterns.ts";
import {FIRE_SPELL_DAMAGE, ICE_SPELL_DAMAGE, LIGHTNING_SPELL_DAMAGE} from "./consts/spellPatterns.ts";
import {
    FLAT_FIRE_DAMAGE,
    FLAT_ICE_DAMAGE,
    FLAT_LIGHTNING_DAMAGE,
    FLAT_PHYSICAL_DAMAGE
} from "./consts/attackPatterns.ts"
import {ADD_EVASION, STUN_PROTECTION} from "./consts/defencePatterns.ts";

const MODIFIER_PATTERNS: Record<string, IAdditionalPattern> = {
    ALL_CHARACTERS,
    STRENGTH,
    DEXTERITY,
    INTELLIGENT,
    LIFE,
    LIFE_PERCENT,
    MANA,
    MANA_PERCENT,
    MANA_REGEN,
    RARITY,
    ELEMENTAL_RESIST,
    FIRE_RESIST,
    ICE_RESIST,
    LIGHTNING_RESIST,
    CHAOS_RESIST,
    FIRE_SPELL_DAMAGE,
    ICE_SPELL_DAMAGE,
    LIGHTNING_SPELL_DAMAGE,
    FLAT_LIGHTNING_DAMAGE,
    FLAT_PHYSICAL_DAMAGE,
    FLAT_FIRE_DAMAGE,
    FLAT_ICE_DAMAGE,
    ADD_EVASION,
    ACCURACY,
    STUN_PROTECTION
}


export class CRing extends CBaseItem {

    constructor(stringItem: string) {
        super(stringItem, MODIFIER_PATTERNS);
    }

}