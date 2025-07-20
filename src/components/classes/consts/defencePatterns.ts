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