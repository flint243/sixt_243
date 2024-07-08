// import React from 'react'
// import '../assets/css/meanmenu.css'
// import '../assets/css/normalize.css'
// import '../assets/css/owl.carousel.min.css'
// import '../assets/css/responsive.css'
// import '../assets/css/slick.css'
// import '../assets/css/jquery-ui.css'
// import '../assets/css/jquery.mCustomScrollbar.min.css'
// import '../assets/css/HeaderComponents.css'
// import $ from 'jquery';
// import logo from '../assets/images/logo.png';
// import banner from '../assets/images/banner.jpg';
// import bg from '../assets/images/bg.jpg';
// import loading from '../assets/images/loading.gif';
// import menuIcon from '../assets/images/menu_icon.png';

// export default function HeaderComponent() {
//   return (
//     <>
//       <header>
//          <div className="header">
//             <div className="container">
//                <div className="row align-items-center">
//                   <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 logo_section">
//                      <div className="full">
//                         <div className="center-desk">
//                            <div className="logo">
//                               <a href="index.html"><img src={logo} alt="#" /></a>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                   <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
//                      <nav className="navigation navbar navbar-expand-md navbar-dark">
//                         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarsExample04">
//                            <ul className="navbar-nav mr-auto">
//                               <li className="nav-item">
//                                  <a className="nav-link" href="#">Réserver</a>
//                               </li>
//                               <li className="nav-item">
//                                  <a className="nav-link" href="#">à propos</a>
//                               </li>
//                               <li className="nav-item">
//                                  <a className="nav-link" href="#">Sign In</a>
//                               </li>
//                               <li className="nav-item">
//                                  <a className="nav-link" href="#">Log In</a>
//                               </li>
//                            </ul>
//                            <div className="sign_btn"><a href="#">Réserver</a></div>
//                            <div className="sign_btn"><a href="#">à propos</a></div>
//                            <div className="sign_btn"><a href="#">Sign in</a></div>
//                            <div className="sign_btn"><a href="#">Log in</a></div>                           
//                         </div>
//                      </nav>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </header>
//     </>
//   )
// }
// // import React, { useState } from 'react';
// // import '../styles/Navbar.css';

// // const HeaderComponent  = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-brand"><a href="/">WEBOXING</a></div>
// //       <div className="navbar-toggle" onClick={toggleMenu}>
// //         <span className="menu-icon">&#9776;</span>
// //         <span className="close-icon">&times;</span>
// //       </div>
// //       <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
// //         <li><a href="/inscription">Inscription</a></li>
// //         <li><a href="/connexion">Connexion</a></li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default HeaderComponent;

import React from 'react'
import '../assets/css/meanmenu.css'
import '../assets/css/normalize.css'
import '../assets/css/owl.carousel.min.css'
import '../assets/css/responsive.css'
import '../assets/css/slick.css'
import '../assets/css/jquery-ui.css'
import '../assets/css/jquery.mCustomScrollbar.min.css'
import '../assets/css/HeaderComponents.css'
import $ from 'jquery';
import logo from '../assets/images/logo.png';
import banner from '../assets/images/banner.jpg';
import bg from '../assets/images/bg.jpg';
import loading from '../assets/images/loading.gif';
import menuIcon from '../assets/images/menu_icon.png';

export default function HeaderComponent() {
  return (
    <>
      <header>
         <div className="header">
            <div className="container">
               <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div className="full">
                        <div className="center-desk">
                           <div className="logo">
                              <a href="index.html"><img src={logo} alt="#" /></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <nav className="navigation navbar navbar-expand-md navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample04">
                           <ul className="navbar-nav mr-auto">
                              <li className="nav-item">
                                 <a className="nav-link" href="index.html"> Home </a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="">About</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="#">Contact us</a>
                              </li>
                           </ul>
                           <div className="sign_btn"><a href="#">Sign in</a></div>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
    </>
  )
}
  