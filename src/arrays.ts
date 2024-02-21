/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    const firstLastNums: number[] = [numbers[0], numbers[numbers.length - 1]];
    return firstLastNums;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = numbers.map((num: string): number =>
        isNaN(Number(num)) ? 0 : Number(num)
    );
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const prices = amounts.map((num: string): string =>
        num.charAt(0) === "$" ? num.slice(1) : num
    );

    const finalPrices = prices.map((num: string): number =>
        isNaN(Number(num)) ? 0 : Number(num)
    );
    return finalPrices;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions = messages.filter(
        (msg: string): boolean => msg.charAt(msg.length - 1) !== "?"
    );

    const LOUDMESSAGES = noQuestions.map((msg: string): string =>
        msg.charAt(msg.length - 1) === "!" ? msg.toUpperCase() : msg
    );
    return LOUDMESSAGES;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const rgb = colors.every(
        (color: string): boolean =>
            color === "green" || color === "red" || color === "blue"
    );
    return rgb;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num
    );
    const origNums = addends.join("+");
    return "" + sum + "=" + origNums;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (values.length === 1 && values[0] === 0) {
        return [0];
    }
    if (values.length === 0) {
        return [0];
    }
    if (values[0] < 0) {
        const newClonedValues = [...values];
        newClonedValues.splice(1, 0, 0);
        return newClonedValues;
    }
    const firstNegValue = values.findIndex(
        (value: number): boolean => value < 0
    );
    const clonedValues = [...values];
    if (firstNegValue === -1) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num
        );
        const finalValues = [...clonedValues, sum];
        return finalValues;
    }
    clonedValues.splice(firstNegValue);
    if (clonedValues.length === 0) {
        const newClonedValues = [...values];
        return newClonedValues;
    }
    const sum = clonedValues.reduce(
        (currentTotal: number, num: number) => currentTotal + num
    );
    const newClonedValues = [...values];
    newClonedValues.splice(firstNegValue + 1, 0, sum);
    return newClonedValues;
}
