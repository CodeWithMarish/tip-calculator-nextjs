import React from "react";

const Form = ({ state, updateValues }) => {
  const { billAmount, tipPercentage, noOfPerson } = state;
  const percentages = [5, 10, 15, 20, 25];
  return (
    <div className="input-container">
      <div className="input-group">
        <label htmlFor="billAmount">Bill Amount</label>
        <input
          onChange={(e) => {
            updateValues({
              billAmount: e.target.value,
            });
          }}
          value={billAmount}
          type="number"
          id="billAmount"
        />
      </div>
      <p>Tip Percentage</p>
      <div className="percentage-list">
        {percentages.map((p) => {
          return (
            <div
              className={`percentage-list__box ${
                tipPercentage == p ? "active" : ""
              }`}
              onClick={() => {
                updateValues({ tipPercentage: p });
              }}
              key={p}
            >{`${p}%`}</div>
          );
        })}
        <input
          className="custom-tip-input"
          onChange={(e) => {
            updateValues({
              tipPercentage:
                e.target.value < 0
                  ? 0
                  : e.target.value > 100
                  ? 100
                  : e.target.value,
            });
          }}
          value={tipPercentage}
          max={100}
          min={0}
          type={"number"}
          placeholder="custom"
        />
      </div>
      <div className="input-group">
        <label htmlFor="noOfPerson">No of Person</label>
        <input
          onChange={(e) => {
            updateValues({
              noOfPerson: e.target.value,
            });
          }}
          value={noOfPerson}
          type="number"
          id="noOfPerson"
        />
      </div>
    </div>
  );
};

export default Form;
