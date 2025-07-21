import {IAdditionalPattern} from "../parser/types.ts";
import {CBaseItem} from "./base";
import {ACCURACY, CRITICAL_DAMAGE, MELEE_LEVEL, PROJECTILE_LEVEL,} from "./consts/patterns.ts";
import {ALL_CHARACTERS, DEXTERITY, INTELLIGENT, STRENGTH} from "./consts/characterPatterns.ts";
import {ELEMENTAL_DAMAGE_ATTACK} from "./consts/attackPatterns.ts";

const MODIFIER_PATTERNS: Record<string, IAdditionalPattern> = {
    ALL_CHARACTERS,
    STRENGTH,
    DEXTERITY,
    INTELLIGENT,
    CRITICAL_DAMAGE,
    PROJECTILE_LEVEL,
    MELEE_LEVEL,
    ELEMENTAL_DAMAGE_ATTACK,
    ACCURACY
};

export class CAttackWeapon extends CBaseItem {

    physicalDPS: number | null
    elementalDPS: number | null
    criticalChance: number

    constructor(itemString: string) {
        super(itemString, MODIFIER_PATTERNS)


        const splitItem = itemString.split("--------")
        const weaponCharacters = splitItem[1].split("\n")

        const physicalDamage = this.getInitDamageFromSource(weaponCharacters, "Физический урон:")

        const coldDamage = this.getInitDamageFromSource(weaponCharacters, "Урон от холода:")
        const fireDamage = this.getInitDamageFromSource(weaponCharacters, "Урон от огня:")
        const lightningDamage = this.getInitDamageFromSource(weaponCharacters, "Урон от молнии:")

        const chaosDamage = this.getInitDamageFromSource(weaponCharacters, "Урон от хаоса:")

        const qualityString = weaponCharacters.find((string) => string.includes("Качество:"))
        let quality = qualityString ? +qualityString.match(/[+-]?\d+(\.\d+)?/g)![0] : 0

        const attackSpeed = +weaponCharacters.find((string) => string.includes("Атак в секунду:"))!.match(/[+-]?\d+(\.\d+)?/g)![0]

        this.criticalChance = +weaponCharacters.find((string) => string.includes("Шанс крит. попадания:"))!.match(/(\d+\.?\d*)/g)![0]

        if (physicalDamage > 0 && quality >= 20) {
            this.physicalDPS = physicalDamage * attackSpeed

        } else if (physicalDamage > 0 && quality < 20) {
            const pureDamage = physicalDamage * 100 / (100 + quality)
            this.physicalDPS = (pureDamage * 1.20) * attackSpeed

        } else {
            this.physicalDPS = null
        }

        const elementalDamage = coldDamage + fireDamage + lightningDamage + chaosDamage
        if (elementalDamage > 0) {
            this.elementalDPS = elementalDamage * attackSpeed

        } else {
            this.elementalDPS = null
        }
    }

    getInitDamageFromSource(source: string[], string: "Физический урон:" | "Урон от холода:" | "Урон от огня:" | "Урон от молнии:" | "Урон от хаоса:") {
        const damageString = source.find((sourceString) => sourceString.includes(string))
        if (damageString) {
            const damageValues = damageString.match(/[+-]?\d+(\.\d+)?/g)
            const value = (+damageValues![0] + (+damageValues![1] * -1)) / 2
            return Math.round(value)
        } else {
            return 0
        }
    }

}