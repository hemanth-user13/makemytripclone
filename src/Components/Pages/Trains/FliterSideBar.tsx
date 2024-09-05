

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
    <div className="b w-64 bg-white p-4 shadow-md">
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
        </div>
      ))}
    </div>
  );
}
