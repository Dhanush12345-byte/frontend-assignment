import React, { useState } from 'react';

const CustomizationOptions = ({ recurrence, setCustomization }) => {
  const [interval, setInterval] = useState(1);
  const [specificDays, setSpecificDays] = useState([]);

  const handleSpecificDaysChange = (day) => {
    setSpecificDays((prev) => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const handleSave = () => {
    setCustomization({ interval, specificDays });
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold">Customization Options</h2>
      <div className="mt-2">
        <label>Every</label>
        <input
          type="number"
          value={interval}
          onChange={(e) => setInterval(e.target.value)}
          className="border rounded mx-2 p-1"
        />
        <span>{recurrence}</span>
      </div>
      {recurrence === 'weekly' && (
        <div className="mt-2">
          <h3 className="font-semibold">Specific Days:</h3>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <label key={day} className="inline-flex items-center ml-2">
              <input
                type="checkbox"
                checked={specificDays.includes(day)}
                onChange={() => handleSpecificDaysChange(day)}
              />
              {day}
            </label>
          ))}
        </div>
      )}
      <button onClick={handleSave} className="mt-4 bg-blue-500 text-white p-2 rounded">Save Customization</button>
    </div>
  );
};

export default CustomizationOptions;
