const RecurrenceOptions = ({ setRecurrence }) => {
    return (
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Recurrence Options</h2>
        <select onChange={(e) => setRecurrence(e.target.value)} className="mt-2 p-2 border rounded">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
    );
  };
  
  export default RecurrenceOptions;
  