import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineUpdate } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MAIN_URL } from "../../config";
import { useTitle } from "../hooks/useTitle";
import { ROUTE_PATH } from "../router/publicRouter";

function Update() {
  useTitle("Update");

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${MAIN_URL}/users/${id}`)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    axios
      .put(`${MAIN_URL}/users/${id}`, values)
      .then((res) => {
        console.log(res);
        navigate(ROUTE_PATH.Default);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center w-100 vh-100 bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h1>Update User</h1>

          <form onSubmit={handleUpdate}>
            <div className="mb-2">
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Your Name"
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email :</label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Enter Your Email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="phone">Phone :</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Enter Your Phone Number"
                value={values.phone}
                onChange={handleChange}
              />
            </div>

            <div className="d-flex align-items-center">
              <button className="btn btn-success me-3">
                Update <MdOutlineUpdate />
              </button>

              <Link to={ROUTE_PATH.Default} className="btn btn-primary">
                Back <RiArrowGoBackFill />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Update;
