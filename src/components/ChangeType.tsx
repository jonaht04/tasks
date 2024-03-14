import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questions, setQType] = useState<QuestionType>(
        "short_answer_question"
    );
    const [QuestionText, setQText] = useState<string>("Short Answer");
    function QChange(): void {
        if (questions === "short_answer_question") {
            setQType("multiple_choice_question");
            setQText("Multiple Choice");
        }
        if (questions === "short_answer_question") {
            setQType("short_answer_question");
            setQText("Short Answer");
        }
    }
    return (
        <div>
            <header>{QuestionText}</header>
            <Button onClick={QChange}>Change Type</Button>
        </div>
    );
}
