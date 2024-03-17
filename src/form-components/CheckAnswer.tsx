import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnswer, changeAnswer] = useState<string>("");
    const [result, changeResult] = useState<string>("❌");
    function updateAns(event: React.ChangeEvent<HTMLInputElement>): void {
        changeAnswer(event.target.value);
        if (event.target.value === expectedAnswer) {
            changeResult("✔️");
        } else {
            changeResult("❌");
        }
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checkAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={givenAnswer} onChange={updateAns} />
            </Form.Group>
            <div>{result}</div>
        </div>
    );
}
