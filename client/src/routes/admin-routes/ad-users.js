import { LoadUsers } from "../../middleware/load-data";
import { getResponse } from "../../middleware/response";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./admin-panel.css";

export default function Users() {

const admin = sessionStorage.getItem("admin");
const navigate = useNavigate();

const authenticate = () => {
  if (!admin) {
    navigate("/admin/login");
  }
};

useEffect(() => {
  authenticate();
});

    const users = LoadUsers();

    return (
      <div>
        <h1>Users</h1>

        {/* Filter section */}
        <div className="row filters">
          <div className="col-6 col-sm-4 col-md-3 filter-container">
            Time Range
            <select className="form-select" aria-label="Select billboard type">
              <option defaultValue="0">Lastest</option>
              <option value="1">Oldest</option>
              <option value="2">Most Billboard</option>
              <option value="3">Most Order</option>
            </select>
          </div>

          <div className="col-6 col-sm-4 col-md-3 filter-container">
            Name Search
            <input
              type="text"
              placeholder="Name here..."
              className="form-control"
              aria-label="Select billboard type"
            />
          </div>
        </div>

        {/* Data display section */}
        <div className="table-box">
          <table className="table pages">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email address</th>
                <th>Phone number</th>
                <th>Register date</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}