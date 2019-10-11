import React from 'react';
import PhoneNumberInput from "../PhoneNumberInput";
import ToDoDragDropDemo from "../ToDoDragDropDemo";

export const App: React.FC = () => (
    <div>
        <div>
            <h2>Phone Number Input</h2>
            <PhoneNumberInput />
        </div>
        <div>
            <h2>Drag And Drop</h2>
            <ToDoDragDropDemo />
        </div>
    </div>
);
