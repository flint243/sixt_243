import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Reservation from './components/Reservation'
import UpdateReservation from './components/UpdateReservation';
import CreateReservation from './components/CreateReservation';
import SignupComposant from './components/SignupComposant';
import SigninComposant from './components/SigninComposant';
import Blankpage from './components/Blankpage';
import ConfirmReviews from './components/ConfirmReviews';
import ReviewForm from './components/ReviewsForm';
import FeedbackComponent from './components/FeedbackComponent';
import AdminReservation from './pages/AdminReservation';
import AdminAvis from './pages/AdminAvis';
function App() {

  return (

  <Router>
    
            
       <Routes>

         {/* <Route path='/' element={<Home />} /> */}
         
         {/* <Route path='/' element={<Reservation />} />
         <Route path='/create' element={<CreateReservation />} />
         <Route path='/update/:id' element={<UpdateReservation />} /> */}

         {/* <Route path='/' element={<FeedbackComponent />} /> */}
         {/* <Route path='/' element={<ReviewForm />} /> */}

         {/* Pages Admin */}

         {/* <Route path='/' element={<AdminReservation />} /> */}
         {/* <Route path='/' element={<AdminAvis />} /> */}

         {/* Fin Page Admin */}

         {/* <Route path='/confirm' element={<ConfirmReviews />} /> */}
         {/* <Route path='/' element={<Blankpage />} />
         <Route path='/signup' element={<SignupComposant />} />
         <Route path='/signin' element={<SigninComposant />} /> */}
         
       </Routes>


  </Router>
  );
}

export default App
