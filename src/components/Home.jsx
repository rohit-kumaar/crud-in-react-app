import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiSolidBookReader } from "react-icons/bi";
import { BsPersonFillAdd } from "react-icons/bs";
import { MdDelete, MdOutlineUpdate } from "react-icons/md";
import { Link } from "react-router-dom";
import { MAIN_URL } from "../../config";
import { useTitle } from "../hooks/useTitle";
import { ROUTE_PATH } from "../router/publicRouter";

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
  }, [userData]);

  const handleDelete = (id) => {
    if (id === 0) {
      alert("You can't Delete Admin");
      return;
    }

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
      <div className="d-flex flex-column align-items-center justify-content-center px-5 py-3 bg-light">
        <h1>List of Users</h1>

        <div className=" rounded bg-white shadow p-4">
          <Link to={ROUTE_PATH.Create} className="btn btn-dark add-btn">
            Add <BsPersonFillAdd />
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
              {userData.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td className="d-flex gap-3 ">
                    <Link
                      to={`${ROUTE_PATH.Read}/${user._id}`}
                      className="btn btn-primary"
                    >
                      Read <BiSolidBookReader />
                    </Link>
                    <Link
                      to={`${ROUTE_PATH.Update}/${user._id}`}
                      className="btn btn-success"
                    >
                      Update <MdOutlineUpdate />
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(user._id)}
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
