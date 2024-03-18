import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("a");
    const [result, changeResult] = useState<string>("❌");
    function updateAns(event: React.ChangeEvent<HTMLSelectElement>): void {
        setAnswer(event.target.value);
        if (event.target.value === expectedAnswer) {
            changeResult("✔️");
        } else {
            changeResult("❌");
        }
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>{result}</div>
            <Form.Group controlId="answerDropdown">
                <Form.Label>What is the answer?</Form.Label>
                <Form.Select value={answer} onChange={updateAns}>
                    {options.map((possAnswer: string) => (
                        <option key={possAnswer} value={possAnswer}>
                            {possAnswer}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );
}
