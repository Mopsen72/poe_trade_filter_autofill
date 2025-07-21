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

export const CRITICAL_CHANCE: IAdditionalPattern = {
    pattern: /^(\d+)% повышение шанса критического удара$/,
    option: "#% повышение шанса критического удара"
}

export const CRITICAL_DAMAGE: IAdditionalPattern = {
    pattern: /^(\+\d+)% к бонусу критического урона$/,
    option: "#% к бонусу критического урона"
};

export const INCREASE_CRITICAL_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение бонуса к критическому урону$/,
    option: "#% увеличение бонуса к критическому урону"
}

export const PROJECTILE_LEVEL: IAdditionalPattern = {
    pattern: /^\+(\d+) к уровню всех камней умений снарядов$/,
    option: "# к уровню всех камней умений снарядов"
};

export const PROJECTILE_SPEED: IAdditionalPattern = {
    pattern: /^(\d+)% повышение скорости снарядов$/,
    option: "#% повышение скорости снарядов"
};

export const UNIQ_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона от ударов по редким и уникальным врагам$/,
    option: "#% увеличение урона от ударов по редким и уникальным врагам"
}

export const BOW_SPELL_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона умениями лука$/,
    option: "#% увеличение урона умениями лука"
};

export const BOW_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона луками$/,
    option: "#% увеличение урона луками"
}
export const BOW_ATTACK_SPEED: IAdditionalPattern = {
    pattern: /^(\d+)% повышение скорости атаки луками$/,
    option: "#% повышение скорости атаки луками"
}

export const STAFF_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона боевыми посохами$/,
    option: "#% увеличение урона боевыми посохами"
}
export const STAFF_ATTACK_SPEED: IAdditionalPattern = {
    pattern: /^(\d+)% повышение скорости атаки боевыми посохами$/,
    option: "#% повышение скорости атаки боевыми посохами"
}

export const CROSSBOW_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона самострелами$/,
    option: "#% увеличение урона самострелами"
}

export const CROSSBOW_ATTACK_SPEED: IAdditionalPattern = {
    pattern: /^(\d+)% повышение скорости атаки самострелами$/,
    option: "#% повышение скорости атаки самострелами"
}

export const SPEAR_CRITICAL_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение бонуса к критическому урону копьями$/,
    option: "#% увеличение бонуса к критическому урону копьями"
}

export const HERALD_DAMAGE: IAdditionalPattern = {
    pattern: /^Умения Вестников наносят увеличенный на (\d+)% урон$/,
    option: "Умения Вестников наносят увеличенный на #% урон"
}

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

export const SKILL_AREA: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение области действия$/,
    option: "#% увеличение области действия"
}

export const FIRE_PENETRATE: IAdditionalPattern = {
    pattern: /^Урон пробивает (\d+)% сопротивления огню$/,
    option: "Урон пробивает #% сопротивления огню"
}

export const ICE_PENETRATE: IAdditionalPattern = {
    pattern: /^Урон пробивает (\d+)% сопротивления холоду$/,
    option: "Урон пробивает #% сопротивления холоду"
}

export const LIGHTNING_PENETRATE: IAdditionalPattern = {
    pattern: /^Урон пробивает (\d+)% сопротивления молнии$/,
    option: "Урон пробивает #% сопротивления молнии"
}

export const FLAT_THORN_DAMAGE: IAdditionalPattern = {
    pattern: /^От (\d+) до (\d+) физического урона шипами$/,
    option: "От # до # физического урона шипами"
}

export const THORN_DAMAGE_PERCENT: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона шипами$/,
    option: "#% увеличение урона шипами"
}

export const INCREASE_AILMENT_MAGNITUDE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение силы накладываемых вами состояний$/,
    option: "#% увеличение силы накладываемых вами состояний"
}

export const AILMENT_SPEED: IAdditionalPattern = {
    pattern: /^Наносящие урон состояния наносят урон на (\d+)% быстрее$/,
    option: "Наносящие урон состояния наносят урон на #% быстрее"
}

export const INCREASE_IGNITE_MAGNITUDE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение силы накладываемого вами поджога$/,
    option: "#% увеличение силы накладываемого вами поджога"
}

export const INCREASE_SHOCK_MAGNITUDE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение силы накладываемого вами шока$/,
    option: "#% увеличение силы накладываемого вами шока"
}

export const INCREASE_BLEED_MAGNITUDE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение силы накладываемого вами кровотечения$/,
    option: "#% увеличение силы накладываемого вами кровотечения"
}

export const INCREASE_POISON_MAGNITUDE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение силы накладываемого вами отравления$/,
    option: "#% увеличение силы накладываемого вами отравления"
}

export const INCREASE_CHAOS_AILMENT_MAGNITUDE: IAdditionalPattern = {
    pattern: /^(\d+)% усиление эффекта Истощения$/,
    option: "#% усиление эффекта Истощения"
}

export const GLOBAL_PHYSICAL_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение глобального физического урона$/,
    option: "#% увеличение глобального физического урона"
}

export const TOTEM_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона тотемов$/,
    option: "#% увеличение урона тотемов"
}

export const TOTEM_LIFE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение здоровья тотема$/,
    option: "#% увеличение здоровья тотема"
}

export const AREA_PRESENCE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение области действия присутствия$/,
    option: "#% увеличение области действия присутствия"
}

export const ACCURACY: IAdditionalPattern = {
    pattern: /^\+(\d+) к меткости$/,
    option: "# к меткости"
}

export const GLOBAL_ACCURACY: IAdditionalPattern = {
    pattern: /^(\d+)% повышение глобальной меткости$/,
    option: "#% повышение глобальной меткости"
}

export const PROJECTILE_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона снарядов$/,
    option: "#% увеличение урона снарядов"
}

export const TRAP_DAMAGE: IAdditionalPattern = {
    pattern: /^(\d+)% увеличение урона помехами$/,
    option: "#% увеличение урона помехами"
}

export const MANA_PERCENT_ON_KILL: IAdditionalPattern = {
    pattern: /^Восстанавливает (\d+)% маны при убийстве$/,
    option: "Восстанавливает #% маны при убийстве"
}

export const LIFE_PERCENT_ON_KILL: IAdditionalPattern = {
    pattern: /^Восстанавливает (\d+)% здоровья при убийстве$/,
    option: "Восстанавливает #% здоровья при убийстве"
}