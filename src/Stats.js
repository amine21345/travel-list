import React from "react";

const Stats = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const persentage = Math.round((numPacked / numItems) * 100);
  // Somme
  // const quantitySum = items.reduce((acc, item) => acc + item.quantity , 0);
  if (!items.length)
    return (
      <p className="stats">
        <em>start adding some items to your packing list 🚀</em>
      </p>
    );
  return (
    <footer className="stats">
      <em>
        {persentage === 100 ? (
          "tou got everything! Ready to go ✈️"
        ) : (
          <span>
            🧳you have {numItems} items on your list, and you already packed{" "}
            {numPacked} ({persentage}%)
          </span>
        )}
      </em>
    </footer>
  );
};

export default Stats;
