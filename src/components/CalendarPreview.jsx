import React from 'react';

const CalendarPreview = ({ recurrence, customization, startDate, endDate }) => {
  const generateDates = () => {
    const dates = [];
    let currentDate = new Date(startDate);
    const interval = customization.interval || 1;

    while (true) {
      if (endDate && currentDate > endDate) break;

      // Add logic based on recurrence type
      if (recurrence === 'daily') {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + interval);
      } else if (recurrence === 'weekly') {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + interval * 7);
      } else if (recurrence === 'monthly') {
        dates.push(new Date(currentDate));
        currentDate.setMonth(currentDate.getMonth() + interval);
      } else if (recurrence === 'yearly') {
        dates.push(new Date(currentDate));
        currentDate.setFullYear(currentDate.getFullYear() + interval);
      }

      // Add more conditions based on customization if needed
    }
    return dates;
  };

  const datesToDisplay = generateDates();

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Preview Dates</h2>
      <ul>
        {datesToDisplay.map((date, index) => (
          <li key={index}>{date.toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarPreview;
