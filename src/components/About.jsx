import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <div style={{textAlign:'center',minHeight:"100vh",display:"flex",flexDirection:"column"}}>
        <Navbar/>
        <p className='about'>Welcome to FimlyKidda.com, the ultimate destination for movie lovers!</p>

<p className='about'>Are you a movie buff who loves to watch the latest flicks on the big screen? Do you hate wasting time and money on long queues and overpriced tickets? Do you want to enjoy the best movie experience with your friends and family?</p>
<p className='about'>If you answered yes to any of these questions, then FimlyKidda.com is the app for you!</p>
<p className='about'>FimlyKidda.com is the ultimate movie booking app that lets you discover, book and enjoy the hottest movies in theaters near you. No matter what genre you prefer, we have something for everyone!</p>
<p className='about'>FimlyKidda.com is more than just a movie booking app. It is a platform for movie lovers who want to connect with other cinema enthusiasts. Join us today and become a part of the FimlyKidda family!</p>
   <Footer/> </div>
  )
}

export default About