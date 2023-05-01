import { useState, useEffect } from "react";
import "./css/form.css";
import Card from "./Card";

export default function MyForm() {
  const [customerName, setCustomerName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountType, setAccountType] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("formData"));
    if (data) {
      setData(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(data));
  }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(customerName, accountNumber, accountType);
    setData((prevData) => [
      ...prevData,
      { customerName, accountNumber, accountType },
    ]);
    setCustomerName("");
    setAccountNumber("");
    setAccountType("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>SignUP</legend>
          <div className="divP">
            <div className="LabelInput">
              <label>Customer Name</label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
          </div>

          <div className="divP">
            <div className="LabelInput">
              <label>Account Number:</label>
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="divP">
            <div className="LabelInput">
              <label>Account Type</label>
              <select
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              >
                <option value="">--Please choose an option--</option>
                <option value="Saving">Saving</option>
                <option value="Current">Current</option>
                <option value="Student">Student</option>
              </select>
            </div>
          </div>

          <input type="submit" />
        </fieldset>
      </form>
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