import React, { useState } from "react";
import { Form } from "react-bootstrap";
export const COLORS = [
    "red",
    "blue",
    "green",
    "mintcream",
    "orange",
    "olive",
    "purple",
    "brown"
];
export const DEFAULT_COLOR_INDEX = 0;

export function ChangeColor(): JSX.Element {
    // const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const [color, setColor] = useState<string>();
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="response-red"
                label="red"
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="response-green"
                label="green"
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="response-blue"
                label="blue"
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="response-mintcream"
                label="mintcream"
                value="mintcream"
                checked={color === "mintcream"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="response-orange"
                label="orange"
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="response-olive"
                label="olive"
                value="olive"
                checked={color === "olive"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="response-purple"
                label="purple"
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                id="response-brown"
                label="brown"
                value="brown"
                checked={color === "brown"}
            />
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: color,
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            >
                this box is {color}
            </div>
        </div>
    );
}
