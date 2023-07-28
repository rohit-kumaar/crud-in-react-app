import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
  const [userData, setUserData] = useState([]);
  const { id } = useParams();
  const URL = `http://localhost:3001/users/${id}`;

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
      <div className="d-flex align-items-center justify-content-center w-100 vh-100 bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h1>Detail of User</h1>

          <div className="mb-2">
            <strong>Name : {userData.name}</strong>
          </div>
          <div className="mb-2">
            <strong>Email : {userData.email}</strong>
          </div>
          <div className="mb-2">
            <strong>Phone : {userData.phone}</strong>
          </div>

          <Link to={`/update/${id}`} className="btn btn-success me-3">
            Edit
          </Link>
          <Link to="/" className="btn btn-primary">
            Back
          </Link>
        </div>
      </div>
    </>
  );
}

export default Read;
