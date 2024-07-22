import React, { useState } from 'react' // Importing React and useState hook from the React library
import axios from 'axios' // Importing axios for making HTTP requests
import {Link, useNavigate} from 'react-router-dom' // Importing Link for navigation and useNavigate for programmatic navigation

function Create() { // Defining the Create component
    const [values, setValues] = useState({ // Using useState to manage form values
        name: '', 
        email: '', 
        age: '', 
        gender: '' 
    })

    const navigate = useNavigate() // Hook for programmatic navigation

    function handleSubmit(e){ // Function to handle form submission
        e.preventDefault()

        axios.post('/add_user', values) // Sending a POST request to add a new user
        .then((res)=>{ 
            navigate('/'); // Navigating to the home page
            console.log(res); 
        })
        .catch((err)=>console.log(err)) // Handling errors and logging them
    }
  return ( // Returning the JSX to render
    <div className='container vh-100 vw-100 bg-primary'> 
        <div className='row'> 
            <h3>Add Student</h3> 
            <div className='d-flex justify-content-end'>
                <Link to='/' class='btn btn-success'>Home</Link> 
            </div>
            <form onSubmit={handleSubmit}> 
                <div className='form-group my-3'> 
                    <label htmlFor='name'>Name</label> 
                    <input type='text' name='name' required onChange={(e)=> setValues({...values, name: e.target.value})} /> 
                </div>
                <div className='form-group my-3'> 
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' required onChange={(e)=> setValues({...values, email: e.target.value})} /> 
                </div>
                <div className='form-group my-3'> 
                    <label htmlFor='gender'>Gender</label>
                    <input type='text' name='gender' required onChange={(e)=> setValues({...values, gender: e.target.value})} />
                </div>
                <div className='form-group my-3'> 
                    <label htmlFor='age'>Age</label>
                    <input type='number' name='age' required onChange={(e)=> setValues({...values, age: e.target.value})} /> 
                </div>
                <div className='form-group my-3'> 
                    <button type='submit' className='btn btn-success'>Save</button> 
                </div>
            </form>
        </div>
    </div>
  )
}

export default Create;
