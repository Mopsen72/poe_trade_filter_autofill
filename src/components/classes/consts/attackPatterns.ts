import {IAdditionalPattern} from "../../parser/types.ts";

export const FLAT_PHYSICAL_DAMAGE: IAdditionalPattern = {
    pattern: /^Добавляет от (\d+) до (\d+) физического урона к атакам$/,
    option: "Добавляет от # до # физического урона к атакам"
};

export const FLAT_FIRE_DAMAGE: IAdditionalPattern = {
    pattern: /^Добавляет от (\d+) до (\d+) урона от огня к атакам$/,
    option: "Добавляет от # до # урона от огня к атакам"
};

export const FLAT_ICE_DAMAGE: IAdditionalPattern = {
    pattern: /^Добавляет от (\d+) до (\d+) урона от холода к атакам$/,
    option: "Добавляет от # до # урона от холода к атакам"
};

export const FLAT_LIGHTNING_DAMAGE: IAdditionalPattern = {
    pattern: /^Добавляет от (\d+) до (\d+) урона от молнии к атакам$/,
    option: "Добавляет от # до # урона от молнии к атакам"
};
export const ATTACK_SPEED: IAdditionalPattern = {
    pattern: /^(\d+)% повышение скорости атаки$/,
    option: "#% повышение скорости атаки"
};

export const CRITICAL_CHANCE_ATTACK: IAdditionalPattern = {
    pattern: /^(\d+\.?\d*)% повышение шанса критического удара атаками$/,
    option: "#% повышение шанса критического удара атаками"
};

export const CRITICAL_DAMAGE_ATTACK: IAdditionalPattern = {
    pattern: /^(\d+)% к бонусу критического урона для урона атаками$/,
    option: "#% к бонусу критического урона для урона атаками"
};