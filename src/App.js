import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LoanApplication from "./pages/LoanApplication";
import LoanReports from "./pages/LoanReports";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/loan-application" element={<LoanApplication/>}/>
        <Route path="/loan-reports" element={<LoanReports/>}/>
      </Routes>
    </Router>
  );
}

export default App;
