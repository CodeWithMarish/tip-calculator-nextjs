import React from "react";

const Result = ({ state }) => {
  const { billAmount, tipPercentage, noOfPerson } = state;
  const totalTip = Number((state.billAmount * tipPercentage) / 100).toFixed(2);
  return (
    <div className="tip-result">
      <div>
        <p className="label">Total Tip</p>{" "}
        <p className="result">{`$ ${totalTip}`}</p>
      </div>
      <div>
        <p className="label">Tip per Person</p>{" "}
        <p className="result">{`$ ${Number(totalTip / noOfPerson).toFixed(
          2
        )}`}</p>
      </div>
    </div>
  );
};

export default Result;
