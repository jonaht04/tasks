import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [Holiday, setHoliday] = useState<string>("Birthday");
    const [HolidayEmoji, setEmoji] = useState<string>("🍰");
    ///events: Birthday, Christmas, Easter, Halloween, Thanksgiving
    ///yes, TA, i consider my own birthday a holiday
    function alphHoliday(): void {
        if (Holiday === "Birthday") {
            setHoliday("Christmas");
            setEmoji("🎅");
        }
        if (Holiday === "Christmas") {
            setHoliday("Easter");
            setEmoji("🐰");
        }
        if (Holiday === "Easter") {
            setHoliday("Halloween");
            setEmoji("🎃");
        }
        if (Holiday === "Halloween") {
            setHoliday("Thanksgiving");
            setEmoji("🦃");
        }
        if (Holiday === "Thanksgiving") {
            setHoliday("Birthday");
            setEmoji("🍰");
        }
    }
    ///events: Easter, Birthday, Halloween, Thanksgiving, Christmas
    function chronoHoliday(): void {
        if (Holiday === "Easter") {
            setHoliday("Birthday");
            setEmoji("🍰");
        }
        if (Holiday === "Birthday") {
            setHoliday("Halloween");
            setEmoji("🎃");
        }
        if (Holiday === "Halloween") {
            setHoliday("Thanksgiving");
            setEmoji("🦃");
        }
        if (Holiday === "Thanksgiving") {
            setHoliday("Christmas");
            setEmoji("🎅");
        }
        if (Holiday === "Christmas") {
            setHoliday("Easter");
            setEmoji("🐰");
        }
    }
    return (
        <body>
            <text>Holiday: {HolidayEmoji}</text>
            <Button onClick={alphHoliday}>Advance by Alphabet</Button>
            <Button onClick={chronoHoliday}>Advance by Year</Button>
        </body>
    );
}
