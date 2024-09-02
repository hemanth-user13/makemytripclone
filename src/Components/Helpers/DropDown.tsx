import React from 'react';

interface SelectOption {
    value: string;
    label: string;
}

interface TravellersClassSelectorProps {
    travellersOptions: SelectOption[];
    classOptions: SelectOption[];
    onTravellersChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onClassChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const TravellersClassSelector: React.FC<TravellersClassSelectorProps> = ({
    travellersOptions,
    classOptions,
    onTravellersChange,
    onClassChange,
}) => {
    return (
        <div>
            <label htmlFor="travellers" className="block text-gray-700 font-bold mb-2">
                Travellers & Class:
            </label>
            <select
                id="travellers"
                className="border border-gray-300 rounded-md px-4 py-2 w-56 mb-2"
                onChange={onTravellersChange}
            >
                {travellersOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <select
                id="class"
                className="border border-gray-300 rounded-md px-4 py-2 w-56"
                onChange={onClassChange}
            >
                {classOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TravellersClassSelector;
