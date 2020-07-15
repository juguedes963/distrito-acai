import React, { useState } from 'react'

import { Navbar, Nav, NavDropdown, Card, Accordion, useAccordionToggle } from 'react-bootstrap'
import Logo from '../../../assets/Logo.png'

export default function NavbarHeader(eventClick) {
  let conteudoButtons = ['Home', 'Curiosidade', 'Produtos', 'Login', "Admistração"]
  const [accordion, setAccordion] = useState('')

  return (

    <header>



      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ backgroundColor: "#4f1233b5!important" }}>
        <Navbar.Brand href="#home">  <div className="logo">
          <img src={Logo} alt="logo" width={120} />
        </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {conteudoButtons.map(sessao => {



              return (
                <Nav.Link key={sessao.toString()} href="#" onClick={event => { conteudoLabel(setAccordion({ sessao })) }}> {sessao}</Nav.Link>
              );
            })}
          </Nav>

        </Navbar.Collapse>
      </Navbar>


    </header>




  )
}
function conteudoLabel(event) {
  console.log(event)
  return (
    <p>
      {event}
    </p>

  )
}

