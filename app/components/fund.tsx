"use client";

import InputField from "./ui/inputField";
import { useState } from "react";
async function sendFunds() {
    console.log(sendFunds);
}

export default function Fund() {
    const [inputValue, setInputValue] = useState("")
    return (
        <div>
            <InputField
                label="Amount in USD"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="integer" />

            <button onClick={sendFunds}>Fund</button>
        </div>
    )
}
