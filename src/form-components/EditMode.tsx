import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, changeMode] = useState<boolean>(false);
    const [name, changeName] = useState<string>("Your Name");
    const [status, changeStatus] = useState<boolean>(true);
    const [statusText, changeStatusText] = useState<string>("a");
    function updateName(event: React.ChangeEvent<HTMLInputElement>): void {
        changeName(event.target.value);
    }
    function swapMode(): void {
        changeMode(!editMode);
    }
    function swapStatus(event: React.ChangeEvent<HTMLInputElement>): void {
        changeStatus(event.target.checked);
        if (event.target.checked) {
            changeStatusText("a");
        } else {
            changeStatusText("not a");
        }
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <body>
                <Form.Check
                    type="switch"
                    checked={editMode}
                    onChange={swapMode}
                />
                {editMode && (
                    <Form.Group controlId="giveAttempts">
                        <Form.Label>Request:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                )}
                {editMode && (
                    <Form.Check
                        type="checkbox"
                        label="student"
                        id="student"
                        checked={status}
                        onChange={swapStatus}
                    />
                )}
                {!editMode && (
                    <body>
                        {name} is {statusText} student.
                    </body>
                )}
            </body>
        </div>
    );
}
