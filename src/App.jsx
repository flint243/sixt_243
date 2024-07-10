import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Student from './components/Student'
import UpdateStudent from './components/UpdateStudent';
import CreateStudent from './components/CreateStudent';
function App() {

  return (

  <Router>
    
            
       <Routes>

         {/* <Route path='/' element={<Home />} /> */}
         <Route path='/' element={<Student />} />
         <Route path='/create' element={<CreateStudent />} />
         <Route path='/update/:id' element={<UpdateStudent />} />
         
       </Routes>


  </Router>
  );
}

export default App
