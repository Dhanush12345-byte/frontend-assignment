const DateRange = ({ setStartDate, setEndDate }) => {
    return (
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Date Range</h2>
        <div className="mt-2 flex">
          <input
            type="date"
            onChange={(e) => setStartDate(new Date(e.target.value))}
            className="border rounded p-2 mr-2"
          />
          <input
            type="date"
            onChange={(e) => setEndDate(e.target.value ? new Date(e.target.value) : null)}
            className="border rounded p-2"
          />
        </div>
      </div>
    );
  };
  
  export default DateRange;
  