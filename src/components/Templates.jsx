import React, { useEffect } from 'react'
import '../assets/css/style.css'
import '../assets/css/meanmenu.css'
import '../assets/css/normalize.css'
import '../assets/css/owl.carousel.min.css'
import '../assets/css/responsive.css'
import '../assets/css/slick.css'
import '../assets/css/jquery-ui.css'
import '../assets/css/jquery.mCustomScrollbar.min.css'
import $ from 'jquery';
import banner from '../assets/images/banner.jpg';
import bg from '../assets/images/bg.jpg';
import car1 from '../assets/images/car_img1.png';
import car2 from '../assets/images/car_img2.png';
import car3 from '../assets/images/car_img3.png';
import cross from '../assets/images/cross_img.png';
import loading from '../assets/images/loading.gif';
import menuIcon from '../assets/images/menu_icon.png';
import te1 from '../assets/images/te1.png';
import scrollTopIcon from '../assets/images/scroll_top_icon.png';
import HeaderComponent from './HeaderComponent';
import FooterComponet from './FooterComponet';

export default function Templates() {
  
  useEffect(() => {
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }, []);

  return (
    <>
      <section className="banner_main">
         <div className="container">
            <div className="row d_flex">
               <div className="col-md-12">
                  <div className="text-bg">
                     <h1>Trouvez la meilleure voiture ici À louer</h1>
                     <strong>Gratuit Multifonctionnel Adaptatif</strong>
                     <p>
                     Roulez librement avec nos offres de location de voiture personnalisées - votre aventure commence ici !
                     </p>
                     <a href="#">Lire Plus</a>
                  </div>
               </div>
            </div>
         </div>
      </section>
     
      <div className="car">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>VARIÉTÉ DE VOITURES</h2>
                     <span>Découvrez notre vaste sélection de voitures pour tous vos besoins - de la citadine économique au SUV spacieux, nous avons le véhicule parfait pour vous !</span>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4 padding_leri">
                  <div className="car_box">
                     <figure><img src={car1} alt="#"/></figure>
                     <h3>Hyundai</h3>
                  </div>
               </div>
               <div className="col-md-4 padding_leri">
                  <div className="car_box">
                     <figure><img src={car2} alt="#"/></figure>
                     <h3>Audi</h3>
                  </div>
               </div>
               <div className="col-md-4 padding_leri">
                  <div className="car_box">
                     <figure><img src={car3} alt="#"/></figure>
                     <h3>Bmw</h3>
                  </div>
               </div>
               <div className="col-md-4 padding_leri">
                  <div className="car_box">
                     <figure><img src={car3} alt="#"/></figure>
                     <h3>Porsche</h3>
                  </div>
               </div>
               <div className="col-md-4 padding_leri">
                  <div className="car_box">
                     <figure><img src={car3} alt="#"/></figure>
                     <h3>Mercedes</h3>
                  </div>
               </div>
               <div className="col-md-4 padding_leri">
                  <div className="car_box">
                     <figure><img src={car3} alt="#"/></figure>
                     <h3>Bmw x5</h3>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
      <div id="contact" className="bestCar">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
               </div>
            </div>
            <div className="row">
               <div className="col-sm-12">
                  <div className="row">
                     <div className="col-md-6 offset-md-6">
                        <form className="main_form">
                           <div className="titlepage">
                              <h2>Trouvez la meilleure voiture à louer</h2>
                           </div>
                           <div className="row">
                              <div className="col-md-12 ">
                                 <select>
                                    <option value="0">Choisissez la marque de la voiture</option>
                                    <option value="1">Hyunday</option>
                                    <option value="2">Audi</option>
                                    <option value="3">BMW x5</option>
                                 </select>
                              </div>
                              <div className="col-md-12">
                                 <select>
                                    <option value="0">Choisissez le type de voiture</option>
                                    <option value="Berline">Berline</option>
                                    <option value="Sport">Sport</option>
                                    <option value="Utilitaires">Utliaires</option>
                                 </select>
                              </div>
                              <div className="col-md-12">
                                 <input className="contactus" placeholder="Search" type="Search" name="Search"/>                          
                              </div>
                              <div className="col-md-12">
                                 <select>
                                    <option value="0">Prix ​de livraison</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                 </select>
                              </div>
                              <div className="col-sm-12">
                                 <button className="find_btn">Trouvez maintenant</button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
      <div className="choose">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Pourquoi Nous</h2>
                     <span>Votre choix idéal pour la location de voiture </span>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="choose_box">
                     <span>Vaste Sélection de Véhicules </span>
                     <p>Nous offrons une variété de voitures adaptées à tous les besoins et budgets, allant des petites citadines économiques aux SUV luxueux et spacieux.</p>
                  </div>
               </div>
               <div className="col-md-12">
                  <div className="choose_box">
                     <span>Tarifs Compétitifs et Transparents </span>
                     <p>Profitez de nos tarifs attractifs et sans surprise, avec des options de location flexibles et sans frais cachés. Nos offres spéciales et promotions régulières rendent nos services encore plus abordables.</p>
                  </div>
               </div>
               <div className="col-md-12">
                  <div className="choose_box">
                     <span>Service Client Exceptionnel </span>
                     <p>Notre équipe dédiée est disponible 24/7 pour vous assister et garantir une expérience de location fluide et agréable. Que ce soit pour des conseils, des ajustements ou des questions, nous sommes là pour vous aider à chaque étape.</p>
                  </div>
               </div>
            </div>
         </div>
         <button id="scrollToTopButton" className="scrollToTopButton"><img src={scrollTopIcon} alt='img' />
         </button>
      </div>    
    </>
  )
}
