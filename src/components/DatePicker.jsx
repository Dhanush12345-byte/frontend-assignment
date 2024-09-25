import React from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import CustomizationOptions from './CustomizationOptions';
import CalendarPreview from './CalendarPreview';
import DateRange from './DateRange';
import useDatePickerStore from '../hooks/useDatePickerStore';

const DatePicker = () => {
  const {
    recurrence,
    setRecurrence,
    customization,
    setCustomization,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  } = useDatePickerStore();

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Recurring Date Picker</h1>
      <RecurrenceOptions setRecurrence={setRecurrence} />
      <CustomizationOptions recurrence={recurrence} setCustomization={setCustomization} />
      <DateRange setStartDate={setStartDate} setEndDate={setEndDate} />
      <CalendarPreview recurrence={recurrence} customization={customization} startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default DatePicker;
