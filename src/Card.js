import React from "react";

export default function Card({ customerName, accountNumber, accountType }) {
  return (
    <div>
      <h3>Customer Name: {customerName}</h3>
      <p>Account Number: {accountNumber}</p>
      <p>Account Type: {accountType}</p>
    </div>
  );
}