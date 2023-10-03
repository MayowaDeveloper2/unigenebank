import React, { useState, useEffect } from 'react';

const AdminNavbar = () => {
  const [todayDate, setTodayDate] = useState(null);

  useEffect(() => {
    // Fetch today's date
    const currentDate = new Date();
    const options = {
      weekday: 'long', // Full weekday name (e.g., "Wednesday")
      month: 'long',   // Full month name (e.g., "September")
      day: 'numeric',  // Day of the month (e.g., "27")
      year: 'numeric', // Full year (e.g., "2023")
    };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
    setTodayDate(formattedDate);

  }, []);

  return (
    <navadmin>
      <div className="adminnavbar">
        <div className="navbar-item">
          <span className="off-1 px10 white bold">Today: {todayDate}</span>
        </div>
      </div>
    </navadmin>
  );
};

export default AdminNavbar;