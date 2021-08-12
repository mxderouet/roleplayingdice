import { isNumber, random } from "lodash"

export const rollDice = () => {
    document.getElementById('roll-dice')?.addEventListener('click', () => {
        dice(diceSelection())
    })  
}

export const diceSelection = (): number => {
    const diceChoiceValue = (document.getElementById('dice-choice') as HTMLSelectElement).value
    const diceChoiceNumber = Number(diceChoiceValue)
    return diceChoiceValue && isNumber(diceChoiceNumber) ? diceChoiceNumber : 6
}

export const dice = (dice: number) => {
    const rollResult = random(1, dice)
    const rollDiv = document.getElementById('roll-result')
    if (rollDiv) {
        rollDiv.innerHTML = rollResult.toString()
    }
}