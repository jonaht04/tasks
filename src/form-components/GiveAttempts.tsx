import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
//import { isNumber } from "util";

export function GiveAttempts(): JSX.Element {
    const [attempts, changeAttempts] = useState<number>(3);
    const [requestAttempts, changeRequest] = useState<number>(0);
    function useAttempt(): void {
        changeAttempts(attempts - 1);
    }
    function updateAttempts(): void {
        changeAttempts(attempts + requestAttempts);
    }
    function updateRequests(event: React.ChangeEvent<HTMLInputElement>): void {
        if (!isNaN(parseInt(event.target.value))) {
            changeRequest(parseInt(event.target.value));
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <body>Remaining Attempts: {attempts}</body>
            <Form.Group controlId="giveAttempts">
                <Form.Label>Request:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestAttempts}
                    onChange={updateRequests}
                />
            </Form.Group>
            <div>
                <Button onClick={useAttempt} disabled={attempts === 0}>
                    use
                </Button>
                <Button onClick={updateAttempts}>gain</Button>
            </div>
        </div>
    );
}
