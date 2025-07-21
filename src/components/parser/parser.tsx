import style from "./parser.module.css"
import React, {useState} from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    createTheme,
    TextField,
    ThemeProvider
} from "@mui/material";
import {CATEGORIES, IAdditionalOption} from "./types.ts";
import {CAttackWeapon} from "../classes/attackWeapon.ts";
import {CSpellWeapon} from "../classes/spellWeapon.ts";
import {CQuiver} from "../classes/quiver.ts";
import {CShield} from "../classes/shield.ts";
import {CFocus} from "../classes/focus.ts";
import {CSceptre} from "../classes/sceptre.ts";
import {CArmor} from "../classes/armor.ts";
import {CBelt} from "../classes/belt.ts";
import {CRing} from "../classes/ring.ts";
import {CNecklace} from "../classes/necklace.ts";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
const Parser = (props: { haveUpdate: boolean }) => {

    const [item, setItem] = useState<string>("")

    const [percentDecrease, setPercentDecrease] = useState<string>("5")

    //@ts-ignore
    const selectorCategoryOptionsItems = document.querySelector("#trade > div.top > div > div.search-bar.search-advanced > div > div.search-advanced-pane.blue > div:nth-child(1) > div.filter-group-body > div:nth-child(1) > span > div.multiselect.filter-select > div.multiselect__content-wrapper > ul")
    //@ts-ignore
    const selectorAdditionalOptionsItems = document.querySelector("#trade > div.top > div > div.search-bar.search-advanced > div > div.search-advanced-pane.brown > div.filter-group.expanded > div.filter-group-body > div > span > div > div.multiselect__content-wrapper > ul")
    //@ts-ignore
    const additionalOptionsContainer = document.querySelector("#trade > div.top > div > div.search-bar.search-advanced > div > div.search-advanced-pane.brown > div.filter-group.expanded > div.filter-group-body")

    //weapon
    //@ts-ignore
    const criticalChanceInput: HTMLInputElement = document.querySelector("#trade > div.top > div > div.search-bar.search-advanced > div > div.search-advanced-pane.blue > div:nth-child(2) > div.filter-group-body > div:nth-child(3) > span > input:nth-child(3)")
    //@ts-ignore
    const minPhysicalDamageInput: HTMLInputElement = document.querySelector("#trade > div.top > div > div.search-bar.search-advanced > div > div.search-advanced-pane.blue > div:nth-child(2) > div.filter-group-body > div:nth-child(5) > span > input:nth-child(3)")
    //@ts-ignore
    const minElementalDamageInput: HTMLInputElement = document.querySelector("#trade > div.top > div > div.search-bar.search-advanced > div > div.search-advanced-pane.blue > div:nth-child(2) > div.filter-group-body > div:nth-child(6) > span > input:nth-child(3)")

    //armor
    //@ts-ignore
    const minArmorInput: HTMLInputElement = document.querySelector("#trade > div.top > div > div.search-bar.search-advanced > div > div.search-advanced-pane.blue > div:nth-child(2) > div.filter-group-body > div:nth-child(8) > span > input:nth-child(3)")
    //@ts-ignore
    const minEvasionInput: HTMLInputElement = document.querySelector("#trade > div.top > div > div.search-bar.search-advanced > div > div.search-advanced-pane.blue > div:nth-child(2) > div.filter-group-body > div:nth-child(9) > span > input:nth-child(3)")
    //@ts-ignore
    const minESInput: HTMLInputElement = document.querySelector("#trade > div.top > div > div.search-bar.search-advanced > div > div.search-advanced-pane.blue > div:nth-child(2) > div.filter-group-body > div:nth-child(10) > span > input:nth-child(3)")
    //@ts-ignore
    const minBlockInput: HTMLInputElement = document.querySelector("#trade > div.top > div > div.search-bar.search-advanced > div > div.search-advanced-pane.blue > div:nth-child(2) > div.filter-group-body > div:nth-child(11) > span > input:nth-child(3)")
    //@ts-ignore
    const minSpiritInput: HTMLInputElement = document.querySelector("#trade > div.top > div > div.search-bar.search-advanced > div > div.search-advanced-pane.blue > div:nth-child(2) > div.filter-group-body > div:nth-child(12) > span > input:nth-child(3)")

    //clearButtons
    //@ts-ignore
    const clearCharacterButton: HTMLButtonElement = document.querySelector("#trade > div.top > div > div.search-bar.search-advanced > div > div.search-advanced-pane.blue > div:nth-child(2) > div.filter-group-header > div > span.filter-body > span.input-group-btn > button")
    //@ts-ignore
    const clearAdditionalButton: HTMLButtonElement = document.querySelector("#trade > div.top > div > div.search-bar.search-advanced > div > div.search-advanced-pane.brown > div.filter-group.expanded > div.filter-group-header > div > span:nth-child(3) > button")

    function delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function findSelectNodeByInnerHTML(options: HTMLCollection, findingString: string) {
        for (let option of options) {
            if (option.getHTML().includes(findingString)) {
                return option
            }
        }
    }

    function changeCategory(category: CATEGORIES) {
        const node = findSelectNodeByInnerHTML(selectorCategoryOptionsItems!.children, category)
        //@ts-ignore
        node.children[0].click()
    }


    async function changeInputValue(inputElement: HTMLInputElement, value: string) {
        inputElement.focus();

        inputElement.value = value;

        const changeEvent = new Event('change', {bubbles: true});

        inputElement.dispatchEvent(changeEvent)

        await delay(50)

    }

    function getCategory(categoryItem: string) {
        switch (categoryItem) {
            case "Луки":
                return CATEGORIES.bow
            case "Боевые посохи":
                return CATEGORIES.warStaff
            case "Посохи":
                return CATEGORIES.staff
            case "Копья":
                return CATEGORIES.spear
            case "Скипетры":
                return CATEGORIES.sceptre
            case "Одноручные булавы":
                return CATEGORIES.mace
            case "Двуручные булавы":
                return CATEGORIES.hhMace
            case "Жезлы":
                return CATEGORIES.wand
            case "Самострелы":
                return CATEGORIES.crossbow
            case "Колчаны":
                return CATEGORIES.quiver
            case "Щиты":
                return CATEGORIES.shield
            case "Баклеры":
                return CATEGORIES.buckler
            case "Фокусы":
                return CATEGORIES.focus
            case "Шлемы":
                return CATEGORIES.helm
            case "Нательные доспехи":
                return CATEGORIES.body
            case "Перчатки":
                return CATEGORIES.hand
            case "Обувь":
                return CATEGORIES.foot
            case "Кольца":
                return CATEGORIES.ring
            case "Амулеты":
                return CATEGORIES.necklace
            case "Пояса":
                return CATEGORIES.belt
            default:
                console.log(`Категория предмета связанная с ${categoryItem} не найдена`)
                return null
        }
    }

    async function fillAdditionalOption(additional: IAdditionalOption, index: number) {
        const node = findSelectNodeByInnerHTML(selectorAdditionalOptionsItems!.children, additional.option)
        //@ts-ignore
        node.children[0].click();
        await delay(50)
        //@ts-ignore
        const input: HTMLInputElement = additionalOptionsContainer.children[index].children[1].children[2];

        const value = Math.round(+additional.match[additional.match.length - 1] * (1 - (+percentDecrease / 100)))
        await changeInputValue(input, `${value}`)
    }

    function clearFields() {
        clearCharacterButton.click()
        clearAdditionalButton.click()
    }

    async function fillFilterHandler() {
        const splitItem = item.split("--------")
        const categoryItem = splitItem[0].split("\n")[0].split(": ")[1]


        const category = getCategory(categoryItem)

        if (category) {
            changeCategory(category)
        }

        clearFields()

        if (category === CATEGORIES.bow || category === CATEGORIES.crossbow || category === CATEGORIES.mace || category === CATEGORIES.hhMace || category === CATEGORIES.spear || category === CATEGORIES.warStaff) {
            const weapon = new CAttackWeapon(item)
            if (weapon.criticalChance) {
                await changeInputValue(criticalChanceInput, `${Math.round(weapon.criticalChance * (1 - (+percentDecrease / 100)))}`)
            }
            if (weapon.physicalDPS) {
                await changeInputValue(minPhysicalDamageInput, `${Math.round(weapon.physicalDPS * (1 - (+percentDecrease / 100)))}`)
            }
            if (weapon.elementalDPS) {
                await changeInputValue(minElementalDamageInput, `${Math.round(weapon.elementalDPS * (1 - (+percentDecrease / 100)))}`)
            }
            if (weapon.additional.length > 0) {
                weapon.additional.forEach((el, index) => {
                    fillAdditionalOption(el, index)
                })
            }

        } else if (category === CATEGORIES.staff || category === CATEGORIES.wand) {
            const spellWeapon = new CSpellWeapon(item);

            if (spellWeapon.additional.length > 0) {
                spellWeapon.additional.forEach((el, index) => {
                    fillAdditionalOption(el, index)
                })
            }

        } else if (category === CATEGORIES.quiver) {
            const quiver = new CQuiver(item)

            if (quiver.additional.length > 0) {
                quiver.additional.forEach((el, index) => {
                    fillAdditionalOption(el, index)
                })
            }

        } else if (category === CATEGORIES.shield || category === CATEGORIES.buckler) {
            const shield = new CShield(item)

            if (shield.armor) {
                await changeInputValue(minArmorInput, `${Math.round(shield.armor * (1 - (+percentDecrease / 100)))}`)
            }
            if (shield.evasion) {
                await changeInputValue(minEvasionInput, `${Math.round(shield.evasion * (1 - (+percentDecrease / 100)))}`)
            }
            if (shield.energyShield) {
                await changeInputValue(minESInput, `${Math.round(shield.energyShield * (1 - (+percentDecrease / 100)))}`)
            }
            if (shield.block) {
                await changeInputValue(minBlockInput, `${Math.round(shield.block * (1 - (+percentDecrease / 100)))}`)
            }

            if (shield.additional.length > 0) {
                shield.additional.forEach((el, index) => {
                    fillAdditionalOption(el, index)
                })
            }

        } else if (category === CATEGORIES.focus) {
            const focus = new CFocus(item)

            if (focus.energyShield) {
                await changeInputValue(minESInput, `${Math.round(focus.energyShield * (1 - (+percentDecrease / 100)))}`)
            }
            if (focus.additional.length > 0) {
                focus.additional.forEach((el, index) => {
                    fillAdditionalOption(el, index)
                })
            }

        } else if (category === CATEGORIES.sceptre) {
            const sceptre = new CSceptre(item);

            if (sceptre.spirit) {
                await changeInputValue(minSpiritInput, `${Math.round(sceptre.spirit * (1 - (+percentDecrease / 100)))}`)
            }

            if (sceptre.additional.length > 0) {
                sceptre.additional.forEach((el, index) => {
                    fillAdditionalOption(el, index)
                })
            }

        } else if (category === CATEGORIES.body || category === CATEGORIES.helm || category === CATEGORIES.foot || category === CATEGORIES.hand) {
            const armor = new CArmor(item);

            if (armor.armor) {
                await changeInputValue(minArmorInput, `${Math.round(armor.armor * (1 - (+percentDecrease / 100)))}`)
            }
            if (armor.evasion) {
                await changeInputValue(minEvasionInput, `${Math.round(armor.evasion * (1 - (+percentDecrease / 100)))}`)
            }
            if (armor.energyShield) {
                await changeInputValue(minESInput, `${Math.round(armor.energyShield * (1 - (+percentDecrease / 100)))}`)
            }

            if (armor.additional.length > 0) {
                armor.additional.forEach((el, index) => {
                    fillAdditionalOption(el, index)
                })
            }

        } else if (category === CATEGORIES.belt) {
            const belt = new CBelt(item)

            if (belt.additional.length > 0) {
                belt.additional.forEach((el, index) => {
                    fillAdditionalOption(el, index)
                })
            }
        } else if (category === CATEGORIES.ring) {
            const ring = new CRing(item)

            if (ring.additional.length > 0) {
                ring.additional.forEach((el, index) => {
                    fillAdditionalOption(el, index)
                })
            }
        } else if (category === CATEGORIES.necklace) {
            const necklace = new CNecklace(item)

            if (necklace.additional.length > 0) {
                necklace.additional.forEach((el, index) => {
                    fillAdditionalOption(el, index)
                })
            }
        }

    }


    return <>
        <ThemeProvider theme={darkTheme}>
            <div className={style.parser}>
                <Accordion>
                    <AccordionSummary>Вставка из буфера обмена</AccordionSummary>
                    <AccordionDetails>

                        <div className={style.form}>
                            <TextField
                                value={item}
                                onChange={(e) => setItem(e.target.value)}
                                label="Вставте в это поле предмет через ctrl+v"
                                variant="outlined"
                                multiline
                                fullWidth
                            />

                            <TextField
                                type="number"
                                value={percentDecrease}
                                onChange={(e) => setPercentDecrease(e.target.value)}
                                label="Процент уменьшения характеристик"
                                variant="outlined"
                                fullWidth
                            />
                        </div>

                        <div className={style.actions}>
                            {props.haveUpdate && <Button variant="contained" sx={{fontSize: "1rem"}}
                                                         href={"https://github.com/Mopsen72/poe_trade_filter_autofill/releases"}
                                                         target={"_blank"}>Доступно
                                обновление</Button>}
                            <Button variant="contained" sx={{fontSize: "1rem"}} onClick={fillFilterHandler}>Заполнить
                                фильтры</Button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </ThemeProvider>
    </>
}

export default Parser