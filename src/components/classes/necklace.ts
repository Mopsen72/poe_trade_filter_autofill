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
import {CRITICAL_CHANCE, MELEE_LEVEL, PROJECTILE_LEVEL, RARITY} from "./consts/patterns.ts";
import {CHAOS_RESIST, ELEMENTAL_RESIST, FIRE_RESIST, ICE_RESIST, LIGHTNING_RESIST} from "./consts/resistPatterns.ts";
import {FIRE_SPELL_DAMAGE, ICE_SPELL_DAMAGE, LIGHTNING_SPELL_DAMAGE, SPELL_LEVEL} from "./consts/spellPatterns.ts";

import {
    ADD_ARMOR_PERCENT,
    ADD_ENERGY_SHIELD,
    ADD_ENERGY_SHIELD_PERCENT,
    ADD_EVASION_PERCENT
} from "./consts/defencePatterns.ts";
import {MINION_LEVEL} from "./consts/minionPatterns.ts";

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
    ADD_ENERGY_SHIELD,
    ADD_ENERGY_SHIELD_PERCENT,
    ADD_ARMOR_PERCENT,
    ADD_EVASION_PERCENT,
    MELEE_LEVEL,
    PROJECTILE_LEVEL,
    MINION_LEVEL,
    SPELL_LEVEL,
    CRITICAL_CHANCE
}


export class CNecklace extends CBaseItem {

    constructor(stringItem: string) {
        super(stringItem, MODIFIER_PATTERNS);
    }

}