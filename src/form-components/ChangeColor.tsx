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
            <span style={{ backgroundColor: "red" }}>
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
            </span>
            <span style={{ backgroundColor: "green" }}>
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
            </span>
            <span style={{ backgroundColor: "blue" }}>
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
            </span>
            <span style={{ backgroundColor: "mintcream" }}>
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
            </span>
            <span style={{ backgroundColor: "orange" }}>
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
            </span>
            <span style={{ backgroundColor: "olive" }}>
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
            </span>
            <span style={{ backgroundColor: "purple" }}>
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
            </span>
            <span style={{ backgroundColor: "brown" }}>
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
            </span>
            <div
                data-testid="colored-box"
                style={{
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
