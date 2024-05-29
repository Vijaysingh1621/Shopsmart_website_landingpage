import React from 'react'
import shopsmartlogo from "../assets/smartlogo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoIosSearch } from "react-icons/io";
import "./navbar.css"
import { LuLogIn } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

import Dropdown from 'react-bootstrap/Dropdown';

const NavBar = () => {
  return (
    <>
    <Navbar  style={{ backgroundColor:"#ebebeb"}}>
      <Container className='nav_container'>
        <img className="logo" src={shopsmartlogo} style={{height:"40px", width:"40px" , marginRight:"20px"}}></img>
        <Navbar.Brand href="#home" style={{fontWeight:"600"}}>Shopsmart</Navbar.Brand>

        <Dropdown className='dropdown'>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Products</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Delivery</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


        <Nav className="options">
         <div href="#Home" className="options_name">Home</div>
         <div href="#Products" className="options_name">Products</div>
         <div href="#Delivery" className="options_name">Delivery</div>
        </Nav>
        <input type='text' className='search_bar' placeholder='search'>
         
        </input>

        

        <div className="login">
          < CgProfile style={{marginRight:"10px" , }} size={30}/>
         Login  <LuLogIn className='loginicon' size={20} />
        </div>


        
       
      </Container>
    </Navbar>
  </>
  )
}

export default NavBar