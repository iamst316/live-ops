import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react'
import OfferCard from './OfferCard'


export default function(){
    

    async function offersDisplay(){
        let offers = await fetch("http://localhost:5000/offers");
        offers = await offers.json();
        console.log(offers);
        
    }
    return(
        <>
            <Navbar />
            <h1>Offers</h1>

            <div className='offers-list'>
                <div className='available'>
                    
                </div>
                <div className='expired'>
                
                </div>
            </div>
            <Footer />
        </>
    )
}