import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [data, setData] = useState([]) // Using useState to manage student data
    const [deleted, setDeleted] = useState(true) // State to track if an item was deleted
    useEffect(()=>{ // useEffect hook to fetch data on component mount or when `deleted` changes
        if(deleted){ // If an item was deleted, fetch the updated data
            setDeleted(false) // Reset the deleted state
        axios.get('/students') // Sending a GET request to fetch all students
        .then((res)=>{
            setData(res.data) // Updating state with fetched data
        })
        .catch((err)=>console.log(err)) // Handling errors and logging them
    }
    }, [deleted]) // Dependency array for useEffect, runs when `deleted` changes

    function handleDelete(id){ // Function to handle deleting a student
        axios.delete(`/delete/${id}`) // Sending a DELETE request to delete a student
        .then((res)=>{
            setDeleted(true) // Setting deleted state to true to trigger data re-fetch
        })
        .catch((err)=> console.log(err)) // Handling errors and logging them
    }

  return (
    <div className='container-fluid bg-primary vh-100 vw-100'>
        <h3>Students</h3>
        <div className='d-flex justify-content-end'>
            <Link className='btn btn-success' to='/create'>Add Student</Link>
        </div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((student)=>{
                        return (<tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td>
                                <Link className='btn mx-2 btn-success' to={`/read/${student.id}`}>Read</Link>
                                <Link className='btn mx-2 btn-success' to={`/edit/${student.id}`}>Edit</Link>
                                <button onClick={()=>handleDelete(student.id)} className='btn mx-2 btn-danger'>Delete</button>
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Home