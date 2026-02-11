import React from "react";

const StatsCard = React.memo(({ title, value }) => {
  console.log(title + " rendered");
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
});

export default StatsCard;
