import {IAdditionalPattern} from "../../parser/types.ts";

export const ADD_ARMOR: IAdditionalPattern = {
    pattern: /^\+(\d+) к броне$/,
    option: "# к броне"
}

export const ADD_ARMOR_PERCENT: IAdditionalPattern = {
    pattern: /^(\d+)% повышение брони$/,
    option: "#% повышение брони"
}

export const ADD_EVASION: IAdditionalPattern = {
    pattern: /^\+(\d+) к уклонению$/,
    option: "# к уклонению"
}

export const ADD_EVASION_PERCENT: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение уклонения$/,
    option: "#% увеличение уклонения"
}

export const ADD_ENERGY_SHIELD: IAdditionalPattern = {
    pattern: /^\+(\d+) к максимуму энергетического щита$/,
    option: "# к максимуму энергетического щита"
}

export const ADD_ENERGY_SHIELD_PERCENT: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение максимума энергетического щита$/,
    option: "#% увеличение максимума энергетического щита"
}

export const ENERGY_SHIELD_RECHARGE_SPEED: IAdditionalPattern = {
    pattern: /^(\d+)% повышение скорости перезарядки энергетического щита$/,
    option: "#% повышение скорости перезарядки энергетического щита"
}

export const ENERGY_SHIELD_RECHARGE_DELAY: IAdditionalPattern = {
    pattern: /^(\d+)% ускорение начала перезарядки энергетического щита$/,
    option: "#% ускорение начала перезарядки энергетического щита"
}

export const BLOCK_CHANCE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение шанса блока$/,
    option: "#% увеличение шанса блока"
}

export const SHIELD_PROTECTION: IAdditionalPattern = {
    pattern: /^(\d+)% повышение защиты от щита в руках$/,
    option: "#% повышение защиты от щита в руках"
}

export const FOCUS_PROTECTION: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение энергетического щита от фокуса в руках$/,
    option: "#% увеличение энергетического щита от фокуса в руках"
}

export const STUN_PROTECTION: IAdditionalPattern = {
    pattern: /^\+(\d+) к порогу оглушения$/,
    option: "# к порогу оглушения"
}

export const STUN_PROTECTION_ENERGY_SHIELD: IAdditionalPattern = {
    pattern: /^Дарует дополнительный порог оглушения в размере (\d+)% от максимума энергетического щита$/,
    option: "Дарует дополнительный порог оглушения в размере #% от максимума энергетического щита"
}
export const AILMENT_PROTECTION_ENERGY_SHIELD: IAdditionalPattern = {
    pattern: /^Дарует дополнительный порог состояний в размере (\d+)% от максимума энергетического щита$/,
    option: "Дарует дополнительный порог состояний в размере #% от максимума энергетического щита"
}