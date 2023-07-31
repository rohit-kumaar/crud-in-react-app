import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiSolidBookReader } from "react-icons/bi";
import { BsPersonFillAdd } from "react-icons/bs";
import { MdDelete, MdOutlineUpdate } from "react-icons/md";
import { Link } from "react-router-dom";
import { MAIN_URL } from "../../config";
import { useTitle } from "../hooks/useTitle";

function Home() {
  useTitle("Home");

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get(`${MAIN_URL}/users`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Would You Like To Delete?");
    if (confirm) {
      axios
        .delete(`${MAIN_URL}/users/${id}`)
        .then(() => location.reload())
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
        <h1>List of Users</h1>

        <div className=" rounded bg-white shadow p-4">
          <Link to="/create" className="btn btn-dark add-btn">
            Add <BsPersonFillAdd />
          </Link>

          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Link to={user.website} target="_blank">
                      {user.website}
                    </Link>
                  </td>
                  <td className="d-flex gap-3 ">
                    <Link to={`/read/${user.id}`} className="btn btn-primary">
                      Read <BiSolidBookReader />
                    </Link>
                    <Link to={`/update/${user.id}`} className="btn btn-success">
                      Update <MdOutlineUpdate />
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(user.id)}
                    >
                      Delete <MdDelete />
                    </button>
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
