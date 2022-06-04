import React from 'react'
import Footer from "../components/Footer"
import HeroImage from "../components/HeroImage"
import Navbar from "../components/Navbar"
import ReflectionSection from '../components/Reflection'

const Reflection = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='REFLECTION.' text='Project Description & Reflection.' />
            <ReflectionSection />
            <Footer />
        </div>
    )
}

export default Reflection