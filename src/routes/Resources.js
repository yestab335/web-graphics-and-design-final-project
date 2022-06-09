import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CitationCards from '../components/Citation'
import HeroImage from "../components/HeroImage"

const Resources = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='RESOURCES.' text='A list of images and videos used from the internet.' />
      <CitationCards />
      <Footer />
    </div>
  )
}

export default Resources
