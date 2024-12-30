import {GuessChoice} from "@/helpers/consts";
import {DiceResult} from "@/types";

export const generateRandomNumber = (min = 0, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const compareValues = (choice: GuessChoice, value1: number, value2: number): boolean => {
    return choice === GuessChoice.OVER ? value1 >= value2 : value1 <= value2;
}

export const getLostMessageByChoice = (choice: GuessChoice) => {
    return choice === GuessChoice.OVER ? 'Number was lower!' : 'Number was higher!';
}

export const createResult = (date: Date, guess: string, result: number, isUserWon: boolean): DiceResult => {
    return {
        date,
        guess,
        result,
        isUserWon,
    }
}
