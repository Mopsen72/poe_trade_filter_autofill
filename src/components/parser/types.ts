export enum CATEGORIES {
    bow = "Лук",
    crossbow = "Самострел",
    warStaff = "Боевой посох",
    mace = "Одноручная булава",
    hhMace = "Двуручная булава",
    spear = "Копьё",
    staff = "Посох",
    sceptre = "Скипетр",
    wand = "Жезл",
    quiver = "Колчан",
    shield = "Щит",
    buckler = "Баклер",
    focus = "Фокус",
    helm = "Шлем",
    body = "Нательная броня",
    hand = "Перчатки",
    foot = "Сапоги",
    ring = "Кольцо",
    necklace = "Амулет",
    belt = "Пояс",
    gem = "Любой самоцвет"
}

export  type TCategories = keyof typeof CATEGORIES

export interface IAdditionalPattern {
    pattern: RegExp,
    option: string
}

export interface IAdditionalOption {
    match: string[],
    optionLabel: string,
    type: string,
    option: string
}