import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    function Halver(): void {
        setDhValue(0.5 * dhValue);
    }
    function Doubler(): void {
        setDhValue(2 * dhValue);
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={Halver}>Halve</Button>
            <Button onClick={Doubler}>Double</Button>
        </div>
    );
}