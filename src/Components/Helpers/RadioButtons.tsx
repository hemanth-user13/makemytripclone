import React from 'react';

interface RadioButtonProps {
    id: string;
    name: string;
    value: string;
    label: string;
    styles?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ id, name, value, label, styles }) => {
    return (
        <label className={`flex items-center ${styles}`}>
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                className="mr-2"
            />
            {label}
        </label>
    );
};

export default RadioButton;
