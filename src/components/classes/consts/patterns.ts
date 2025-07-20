import {IAdditionalPattern} from "../../parser/types.ts";


export const RARITY: IAdditionalPattern = {
    pattern: /^(\d+)% повышение редкости найденных предметов$/,
    option: "#% повышение редкости найденных предметов"
};


export const MELEE_LEVEL: IAdditionalPattern = {
    pattern: /^\+(\d+) к уровню всех камней умений ближнего боя$/,
    option: "# к уровню всех камней умений ближнего боя"
};

export const SPIRIT: IAdditionalPattern = {
    pattern: /^\+(\d+) к духу$/,
    option: "# к духу"
};

export const MOVE_SPEED: IAdditionalPattern = {
    pattern: /^(\d+)% повышение скорости передвижения$/,
    option: "#% повышение скорости передвижения"
};


export const CRITICAL_DAMAGE: IAdditionalPattern = {
    pattern: /^(\+\d+)% к бонусу критического урона$/,
    option: "#% к бонусу критического урона"
};

export const PROJECTILE_LEVEL: IAdditionalPattern = {
    pattern: /^\+(\d+) к уровню всех камней умений снарядов$/,
    option: "# к уровню всех камней умений снарядов"
};

export const PROJECTILE_SPEED: IAdditionalPattern = {
    pattern: /^(\d+)% повышение скорости снарядов$/,
    option: "#% повышение скорости снарядов"
};

export const BOW_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона умениями лука$/,
    option: "#% увеличение урона умениями лука"
};


export const ADDED_FIRE_DAMAGE: IAdditionalPattern = {
    pattern: /^Наносит (\d+)% урона в виде дополнительного урона от огня$/,
    option: "Наносит #% урона в виде дополнительного урона от огня"
};

export const ADDED_ICE_DAMAGE: IAdditionalPattern = {
    pattern: /^Наносит (\d+)% урона в виде дополнительного урона от холода$/,
    option: "Наносит #% урона в виде дополнительного урона от холода"
};

export const ADDED_LIGHTNING_DAMAGE: IAdditionalPattern = {
    pattern: /^Наносит (\d+)% урона в виде дополнительного урона от молнии$/,
    option: "Наносит #% урона в виде дополнительного урона от молнии"
};

