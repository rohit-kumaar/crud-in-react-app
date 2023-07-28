import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URL = "http://localhost:3001/users";

function Home() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
        <h1>List of Users</h1>

        <div className="w-75 rounded bg-white shadow p-4">
          <Link to="/create" className="btn btn-dark ">
            Add +
          </Link>

          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td className="d-flex gap-3 ">
                    <Link to={`/read/${user.id}`} className="btn btn-primary">
                      Read
                    </Link>
                    <button className="btn btn-success">Update</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
