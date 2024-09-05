const filters = [
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'Express Train', label: 'Express Train', checked: false },
            { value: 'Superfast Train', label: 'Superfast Train', checked: false },
            { value: 'Rapid Train', label: 'Rapid Train', checked: true },
            { value: 'Intercity Train', label: 'Intercity Train', checked: false },
            { value: 'City Express', label: 'City Express', checked: false },
            { value: 'Coastal Train', label: 'Coastal Train', checked: false },
            { value: 'Mountain Express', label: 'Mountain Express', checked: false },
            { value: 'Skyline Train', label: 'Skyline Train', checked: false },
            { value: 'Historic Train', label: 'Historic Train', checked: false },
        ],
    },
];

export default function FilterSidebar() {
    return (
        <div className="w-64  bg-white p-4 shadow-md sticky top-4 h-[calc(100vh-2rem)] overflow-y-auto">
            {filters.map((section) => (
                <div key={section.id} className="mb-4">
                    <h3 className="font-medium text-gray-900">{section.name}</h3>
                    <div className="mt-4 space-y-4">
                        {section.options.map((option) => (
                            <div key={option.value} className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={option.value}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                                <label htmlFor={option.value} className="ml-3 text-sm text-gray-600">
                                    {option.label}
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="mt-9">
                        <div>
                            <h1 className="font-medium text-gray-900">Range Picker</h1>
                        </div>
                        <div className="relative mb-6">
                            <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
                            <input 
                                id="labels-range-input" 
                                type="range" 
                                value="1000" 
                                min="100" 
                                max="1500" 
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" 
                            />
                            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($100)</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($1500)</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
