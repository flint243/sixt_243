import React from 'react'
import Templates from '../components/Templates'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponet from '../components/FooterComponet'
import AvisComponent from '../components/AvisComponent'
import FeedbackComponent from '../components/FeedbackComponent'
import Navbar from '../components/Navbar';



function Home()  {
    return (
    <>
    
        <Navbar/>
        <Templates/>
        <FeedbackComponent/>
        <AvisComponent/>
        <FooterComponet/>

    </>
    )
}

export default Home;

