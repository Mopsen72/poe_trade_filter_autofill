import {CBaseItem} from "./base";
import {IAdditionalPattern} from "../parser/types.ts";
import {RARITY} from "./consts/patterns.ts";
import {
    ALL_CHARACTERS,
    DEXTERITY,
    INTELLIGENT,
    LIFE,
    LIFE_REGENERATION,
    MANA,
    MANA_REGEN,
    STRENGTH
} from "./consts/characterPatterns.ts";
import {CHAOS_RESIST, ELEMENTAL_RESIST, FIRE_RESIST, ICE_RESIST, LIGHTNING_RESIST} from "./consts/resistPatterns.ts";
import {ADD_ARMOR} from "./consts/defencePatterns.ts";

const MODIFIER_PATTERNS: Record<string, IAdditionalPattern> = {
    ALL_CHARACTERS,
    STRENGTH,
    DEXTERITY,
    INTELLIGENT,
    LIFE,
    LIFE_REGENERATION,
    MANA,
    MANA_REGEN,
    ELEMENTAL_RESIST,
    FIRE_RESIST,
    ICE_RESIST,
    LIGHTNING_RESIST,
    CHAOS_RESIST,
    RARITY,
    ADD_ARMOR
}

export class CBelt extends CBaseItem {
    constructor(stringItem: string) {
        super(stringItem, MODIFIER_PATTERNS);
    }
}