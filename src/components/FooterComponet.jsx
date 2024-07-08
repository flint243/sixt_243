import React from 'react'
import '../assets/css/FooterComponet.css'

export default function FooterComponet() {
  return (
    <>
      <footer>
         <div className="footer">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="cont_call">
                        <h3> <strong className="multi color_chang">Contactez-nous au :</strong><br/>
                            01457387
                        </h3>
                     </div>
                  </div>
               </div>
            </div>
            <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <p>© 2019 Tous droits réservés.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
    </>
  )
}
