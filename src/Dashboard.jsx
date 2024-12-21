import React from 'react'
import Login from './components/login'
import {Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <Login />
            <button>
                <Link to="/register">Register</Link>
            </button>
            Dashboard
        </div>
    )
}
export default Dashboard