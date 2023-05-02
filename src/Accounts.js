import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Accounts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("formData"));
    if (data) {
      setData(data);
    }
  }, []);
 
  return (
    <>
      {data.map((item, index) => (
        <Card
          key={index}
          customerName={item.customerName}
          accountNumber={item.accountNumber}
          accountType={item.accountType}
        />
      ))}
    </>
  );
}