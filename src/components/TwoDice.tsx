import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [diceOne, setD1] = useState<number>(1);
    const [diceTwo, setD2] = useState<number>(3);
    return (
        <body>
            <Button onClick={() => setD1(d6())}>Roll Left</Button>
            <Button onClick={() => setD2(d6())}>Roll Right</Button>
            <span data-testid="left-die">{diceOne} </span>
            <span data-testid="right-die">{diceTwo}</span>
            {diceOne === 1 && diceTwo === 1 && <body>Lose</body>}
            {diceOne != 1 && diceOne === diceTwo && <body>Win</body>}
        </body>
    );
}
