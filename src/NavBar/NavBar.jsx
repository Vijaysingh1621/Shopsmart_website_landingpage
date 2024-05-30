import React,{useState} from 'react'
import shopsmartlogo from "../assets/smartlogo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"
import { LuLogIn } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { Switch } from '@headlessui/react'

import Dropdown from 'react-bootstrap/Dropdown';



import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);




const NavBar = () => {

  const [enabled, setEnabled] = useState(false);
  const [mode,setMode]=useState('light')

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="black"
    }else{
      setMode('light')
      document.body.style.backgroundColor="white"
    }
  }

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
      
        <Search className="search-bar" placeholder="Search products ,brands..." onSearch={onSearch} style={{paddingLeft:"10px" , paddingRight:"80px" , color:"orange"}}  enterButton  />
   
               
        <div className="cart">
          <IoCartOutline size={35} className='cart-icon' /> Cart
        </div>
        <div className="login">
          < CgProfile style={{marginRight:"10px" , }} size={30}/>
         Login  <LuLogIn className='loginicon' size={20} />
        </div>
        {/*  ------------- Dark mode hold-----------------
        
        <Switch
              checked={enabled}
              onChange={setEnabled}
              mode={mode}
              toggleMode={toggleMode}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-orange-600 transition data-[checked]:bg-gray-800 mx-3"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
  </Switch>*/}


        
       
      </Container>
    </Navbar>
  </>
  )
}

export default NavBar