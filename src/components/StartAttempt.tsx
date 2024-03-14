import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [Active, setActive] = useState<boolean>(false);
    const [Attempts, setAttempts] = useState<number>(4);
    function reduceAttempts(): void {
        setAttempts(Attempts - 1);
    }
    function addAttempts(): void {
        setAttempts(Attempts + 1);
    }
    function Progress(): void {
        setActive(!Active);
    }
    function startQuiz(): void {
        setActive(!Active);
        setAttempts(Attempts - 1);
    }
    return (
        <div>
            <header>{Attempts}</header>
            <Button onClick={startQuiz} disabled={Active || Attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={Progress} disabled={!Active}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempts} disabled={Active}>
                Mulligan
            </Button>
        </div>
    );
}
