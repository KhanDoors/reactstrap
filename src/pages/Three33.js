import React from "react";
import Card from "../Utils/Card";
import Button from "./../Utils/Button";

function handleAPICall(e) {
  // Do some API call
}

function handleFormReset(e) {
  // Reset some form data
}

const Three33 = () => {
  return (
    <div className="container my-2 py-5">
      <h1>333</h1>
      <Card
        cardColClass={"col-sm-3"}
        cardBorder={"card border-default mx-1"}
        cardTitle={"First Card"}
        cardText={"Sample Card 1"}
      />
      <Button
        handleClick={handleAPICall}
        label="Submit"
        icon={<i className="fas fa-arrow-alt-circle-right" />}
        type="primary"
      />
      <Button handleClick={handleFormReset} label="Reset" type="secondary" />
      <Button handleClick={handleFormReset} label="Click" />
    </div>
  );
};

export default Three33;
