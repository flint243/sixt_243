import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Student from './components/Student';
import CreateStudent from './components/CreateStudent';

function App() {

  return (


  <Router>
    
            
       <Routes>

         <Route path='/' element={<Student />} />
         <Route path='/create' element={<CreateStudent />} />
      
       </Routes>

   </Router>


    
  );
}

export default App
