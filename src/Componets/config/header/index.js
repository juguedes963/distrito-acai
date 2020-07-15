import React,{useState} from 'react'
import Carrosel from './carrosel/index'
import  Navbar from '../navbar'
import Logo from '../../../assets/Logo.png'
import "./index.css"
export default function Header(eventClick) {

  return (
    <div className="nav">
      <header>


    <Navbar />
     


      </header>

        <div className="carrosel" >
          <Carrosel />

        </div>
       
       
    </div>
  )
}


