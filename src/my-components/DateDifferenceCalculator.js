import { useState, useEffect } from "react";

function DateDifferenceCalculator() {
  //
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [difference, setDifference] = useState(null);

  const [status, setStatus] = useState(false);

  useEffect( () => {
    const purchaseDate = new Date(startDate);
    const today = new Date().toJSON().slice(0, 10);
    //
    // Get the difference in time (milliseconds)
    const timeDifference = (new Date(today)).getTime() - purchaseDate.getTime();
    // Convert time difference from milliseconds to days
    const dayDifference = timeDifference / (1000 * 3600 * 24);
    
   //Change the "disabled" property
    const warrantyBox = document.getElementById('warranty');
    dayDifference > 10 ? (warrantyBox.disabled = true) : (warrantyBox.disabled = false);
  }, [startDate]); 





  // Function to calculate the number of days between two dates
  const calculateDifference = () => {
    //
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    //Check 2 entered dates
    if (!isNaN(date1.getTime()) && !isNaN(date2.getTime())) {
      // Get the difference in time (milliseconds)
      const timeDifference = date2.getTime() - date1.getTime();
      // Convert time difference from milliseconds to days
      const dayDifference = timeDifference / (1000 * 3600 * 24);

      setDifference(Math.abs(dayDifference)); // Use Math.abs to ensure positive number
    } else {
      setDifference("Invalid date");
    }
  };

  return (
    <div>
      <h2>Days Between Two Dates</h2>

      <div>
        <label>Purchase Date: </label>
        <input
          type="date"
          value={startDate}
          max = {new Date().toJSON().slice(0, 10)}
          /*max="2024-09-24"*/
          /*onChange={(e) => setStartDate(e.target.value)}*/
          onChange={(e) => setStartDate(e.target.value)} 
        />
      </div>

      <div>
        <label>Repair Date: </label>
        <input
          type="date"
          value={endDate}
          /*min="2024-09-24"*/
          min={new Date().toJSON().slice(0, 10)}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <button onClick={calculateDifference}>Calculate Difference</button>
      {difference !== null && (
        <div>
          <h3>Difference: {difference} day(s)</h3>
        </div>
      )}

      <div>
          <label>Warranty </label>
          <input type="checkbox" id="warranty" />  
      </div>

    </div>
  );
}

export default DateDifferenceCalculator;
