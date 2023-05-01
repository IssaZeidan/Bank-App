import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MyForm from "./MyForm";
import Accounts from "./Accounts";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/accounts">Accounts</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<MyForm />} />
          <Route path="/accounts" element={<Accounts />} />
        </Routes>
      </div>

      <style>{`
        nav ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
        }

        nav li {
          margin: 0 10px;
        }

        nav a {
          text-decoration: none;
          color: #333;
        }

        nav a:hover {
          color: #555;
        }
      `}</style>
    </Router>
  );
}