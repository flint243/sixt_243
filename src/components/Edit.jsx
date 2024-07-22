import React, { useState, useEffect } from "react"; 
import { Link, useParams, useNavigate } from "react-router-dom"; 
import axios from "axios"; 

function Edit() { 
  const [data, setData] = useState([]); // Using useState to manage data
  const { id } = useParams(); // Getting the user ID from URL parameters
  useEffect(() => { // useEffect hook to fetch data on component mount or when ID changes
    axios
      .get(`/get_student/${id}`) // Sending a GET request to fetch student data
      .then((res) => { // Handling successful response
        setData(res.data); // Updating state with fetched data
      })
      .catch((err) => console.log(err)); // Handling errors and logging them
  }, [id]); // Dependency array for useEffect, runs when ID changes

  const navigate = useNavigate(); // Hook for programmatic navigation

  function handleSubmit(e) { // Function to handle form submission
    e.preventDefault(); // Preventing default form submission behavior

    axios
      .post(`/edit_user/${id}`, data[0]) // Sending a POST request to update user data
      .then((res) => { // Handling successful response
        navigate("/"); // Navigating to the home page
        console.log(res); // Logging the response
      })
      .catch((err) => console.log(err)); // Handling errors and logging them
  }

  return (
    <div className="container-fluid vw-100 vh-100 bg-primary">
      <h1>User {id}</h1>
      <Link to="/" className="btn btn-success">
        Back
      </Link>
      {data.map((student) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className="form-group my-3">
              <label htmlFor="name">Name</label>
              <input
                value={student.name}
                type="text"
                name="name"
                required
                onChange={(e) =>
                  setData([{ ...data[0], name: e.target.value }])
                }
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="email">Email</label>
              <input
                value={student.email}
                type="email"
                name="email"
                required
                onChange={(e) =>
                  setData([{ ...data[0], email: e.target.value }])
                }
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="gender">Gender</label>
              <input
                value={student.gender}
                type="text"
                name="gender"
                required
                onChange={(e) =>
                  setData([{ ...data[0], gender: e.target.value }])
                }
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="age">Age</label>
              <input
                value={student.age}
                type="number"
                name="age"
                required
                onChange={(e) => setData([{ ...data[0], age: e.target.value }])}
              />
            </div>
            <div className="form-group my-3">
              <button type="submit" className="btn btn-success">
                Save
              </button>
            </div>
          </form>
        );
      })}
    </div>
  );
}

export default Edit;
