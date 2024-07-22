import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Read() {
  const [data, setData] = useState([]); // Using useState to manage student data
  const { id } = useParams(); // Getting the student ID from URL parameters
  useEffect(() => { // useEffect hook to fetch data on component mount or when ID changes
    axios
      .get(`/get_student/${id}`) // Sending a GET request to fetch student data
      .then((res) => { // Handling successful response
        setData(res.data); // Updating state with fetched data
      })
      .catch((err) => console.log(err)); // Handling errors and logging them
  }, [id]); // Dependency array for useEffect, runs when ID changes
  return (
    <div className="container-fluid vw-100 vh-100 bg-primary">
      <h1>User {id}</h1>
      <Link to="/" className="btn btn-success">Back</Link>
      {data.map((student) => {
        return (
          <ul className="list-group">
            <li className="list-group-item">
              <b>ID: </b>
              {student["id"]}
            </li>
            <li className="list-group-item">
              <b>Name: </b>
              {student["name"]}
            </li>
            <li className="list-group-item">
              <b>Email: </b>
              {student["email"]}
            </li>
            <li className="list-group-item">
              <b>Age: </b>
              {student["age"]}
            </li>
            <li className="list-group-item">
              <b>Gender: </b>
              {student["gender"]}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Read;
