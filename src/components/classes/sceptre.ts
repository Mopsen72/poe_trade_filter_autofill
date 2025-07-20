import {CBaseItem} from "./base";
import {IAdditionalPattern} from "../parser/types.ts";
import {
    MINION_ATTACK_SPEED,
    MINION_CRITICAL_CHANCE,
    MINION_DAMAGE,
    MINION_ELEMENTAL_RESIST,
    MINION_FIRE_FLAT_DAMAGE,
    MINION_ICE_FLAT_DAMAGE,
    MINION_LEVEL,
    MINION_LIFE,
    MINION_LIFE_REGEN,
    MINION_LIGHTNING_FLAT_DAMAGE,
    MINION_PHYSICAL_FLAT_DAMAGE,
    MINION_SPELL_CAST_SPEED,
} from "./consts/minionPatterns.ts";
import {ALL_CHARACTERS, DEXTERITY, INTELLIGENT, MANA, MANA_REGEN, STRENGTH} from "./consts/characterPatterns.ts";

const MODIFIER_PATTERNS: Record<string, IAdditionalPattern> = {

    ALL_CHARACTERS,
    STRENGTH,
    DEXTERITY,
    INTELLIGENT,
    MANA,
    MANA_REGEN,
    MINION_LEVEL,
    MINION_SPELL_CAST_SPEED,
    MINION_ATTACK_SPEED,
    MINION_DAMAGE,
    MINION_CRITICAL_CHANCE,
    MINION_LIFE,
    MINION_LIFE_REGEN,
    MINION_ELEMENTAL_RESIST,
    MINION_PHYSICAL_FLAT_DAMAGE,
    MINION_FIRE_FLAT_DAMAGE,
    MINION_ICE_FLAT_DAMAGE,
    MINION_LIGHTNING_FLAT_DAMAGE

}

export class CSceptre extends CBaseItem {

    spirit: number | null


    constructor(stringItem: string) {
        super(stringItem, MODIFIER_PATTERNS);

        const splitItem = stringItem.split("--------")
        const characters = splitItem[1].split("\n")

        const qualityString = characters.find((string) => string.includes("Качество:"))
        let quality = qualityString ? +qualityString.match(/[+-]?\d+(\.\d+)?/g)![0] : 0

        const spiritString = characters.find((string) => string.includes("Дух:"))
        if (spiritString) {
            const value = +spiritString.match(/\d+/g)![0]
            this.spirit = this.calculateValue(value, quality)
        } else {
            this.spirit = null
        }
    }

}