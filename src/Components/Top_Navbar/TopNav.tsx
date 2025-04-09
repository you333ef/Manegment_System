///<reference types="react" />

import React, { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import STYLEST from './topnav.module.css';
import { BiChevronLeftCircle, BiChevronRight } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { ContextYasta } from '../../Context/Test_data';

interface SideProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavScrollExample({ collapsed, setCollapsed }): React.ReactElement {
  const [isLarge, setIsLarge] = useState<boolean>(window.innerWidth >= 1024);

 

  useEffect(() => {
    const handleResize = (): void => {
      setIsLarge(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  

  let navi = useNavigate();
  let TOUSEr = (): void => {
    navi('/dashboard/users');
  };
  let location = useLocation();
  let [search, setSearch] = useState<string>('');

  let { searchdata, setsearchdata } = useContext<{ searchdata: string; setsearchdata: React.Dispatch<React.SetStateAction<string>> }>(ContextYasta);

  let handlesearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const v = e.target.value.toLowerCase();
    setsearchdata(v);
  };
  const toggleCollapse = () => {
    if (!isLarge) return; // إذا لم تكن الشاشة كبيرة، لا نفعل شيئاً
    setCollapsed(!collapsed);
  };
  const handleToggle = (e: React.MouseEvent<HTMLElement>) => {
    if (!isLarge) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
  };
  
  return (
    <div className={` ${STYLEST.TTOPYA}`}>
      <Navbar expand="lg" className={`w-100 m-0 border-0 ${STYLEST.bgtopanv}`}>
        <Container fluid>
          <Navbar.Brand href="#">
            {collapsed ? (
              <BiChevronLeftCircle onClick={toggleCollapse} className={STYLEST.iconnn} />
            ) : (
              <BiChevronRight onClick={toggleCollapse} className={STYLEST.iconnn} />
            )}
          </Navbar.Brand>

          <Navbar.Toggle
  aria-controls="navbarScroll"
  onClick={handleToggle}
      />
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
                    value={searchdata}
                    onChange={handlesearch}
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
  className={`w-100 px-4 py-1 d-flex justify-content-between align-items-center responsive-container`}
  style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}
>
  <h5 className={STYLEST.TETO}>
    {location.pathname === '/dashboard/users'
      ? 'Add User'
      : location.pathname === '/dashboard/profile'
        ? 'Profile'
        : 'USER LIST'}
  </h5>
  {location.pathname === '/dashboard/users' || location.pathname === '/dashboard/profile'
    ? ''
    : <Button variant="" onClick={TOUSEr} className={STYLEST.adduser}>
        ADD USER
      </Button>
  }
</div>
    </div>
  );
}

export default NavScrollExample;