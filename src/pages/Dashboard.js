import React from "react";
import {Link} from "react-router-dom"
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="welcome-message">Welcome to Mingle Loans , User!</p>
        <div className="link-container">
        <Link to="/loan-application" className="dashboard-link">Loan Applications</Link>
        <Link to="/loan-reports" className="dashboard-link">Loan Reports</Link>
        </div>
    </div>
    )
}
export default Dashboard;