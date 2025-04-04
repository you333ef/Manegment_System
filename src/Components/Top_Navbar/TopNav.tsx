import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import STYLEST from './topnav.module.css'
import { BiChevronLeftCircle } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from 'react-icons/fa'; 
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


function NavScrollExample() {
  const [isLarge, setIsLarge] = React.useState(window.innerWidth >= 1024);

  React.useEffect(() => {
    const handleResize = () => {
      setIsLarge(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = (e) => {
    if (!isLarge) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  let navi=useNavigate()
  let TOUSEr=()=>{
    navi('/dashboard/users')
  }
 let location=useLocation()
 
  return (
    <div className={` ${STYLEST.TTOPYA}`}>
    <Navbar expand="lg" className={`w-100 m-0 border-0   ${STYLEST.bgtopanv}`}>
      <Container fluid>
        <Navbar.Brand href="#">
          <BiChevronLeftCircle className={STYLEST.iconnn} />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle} />
        {isLarge && (
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <InputGroup className="me-2">
                <Form.Control
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <InputGroup.Text>
                  <FaSearch />
                </InputGroup.Text>
              </InputGroup>
              <Button variant="">
                <FaRegBell className={STYLEST.iconpell} />
              </Button>
            </Form>
       
          </Navbar.Collapse>
          
        )}
       
      </Container>
      
    
    </Navbar>
    <div 
  className="w-100 px-4 py-1 d-flex justify-content-between align-items-center"
  style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }} 
>
  <h5 className={STYLEST.TETO}>{location.pathname ==='/dashboard/users' ?'Add User':"USER LIST"}</h5>
 {location.pathname ==='/dashboard/users' ?
 '' : <Button variant="" onClick={TOUSEr} className={STYLEST.adduser}>
 ADD NEW USER
</Button>
}
</div>
    </div>
  );
}


export default NavScrollExample;