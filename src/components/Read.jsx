import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import { MAIN_URL } from "../../config";
import { useTitle } from "../hooks/useTitle";
import { ROUTE_PATH } from "../router/publicRouter";

function Read() {
  useTitle("Read");
  const [userData, setUserData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${MAIN_URL}/users/${id}`)
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

          <div className="d-flex align-items-center">
            <Link
              to={`${ROUTE_PATH.Update}/${id}`}
              className="btn btn-success me-3"
            >
              Edit <AiOutlineEdit />
            </Link>
            <Link to={ROUTE_PATH.Default} className="btn btn-primary">
              Back <RiArrowGoBackFill />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Read;
