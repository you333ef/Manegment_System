import React from 'react';
import Update from '../Side-Nav/side.module.css';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import profilePictue from '../../assets/Yousef/profile_picture.svg';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { IoHomeOutline } from 'react-icons/io5';
import { FaRegBookmark, FaGraduationCap } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';
import logoutimage from '../../assets/Yousef/iconlogout.svg';
import { useNavigate } from 'react-router-dom';

const Side = ({ collapsed, setCollapsed }) => {
  
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
    console.log(collapsed);
  };
  let usenavigate=useNavigate()
 let go=()=>{
  usenavigate('/dashboard/home')
 }

  return (
    <div className={Update.sideNavbar}>
      <Sidebar 
        collapsed={collapsed} 
        id="custom_sidebar"
        className={`${Update.listMID}`}
      >
        
        <div className={Update.topsidenav}>
          <div className={`${Update.topsidenavtitle} ${collapsed && 'TITILE_SIDE'}`}>
            <h3>
              <span>|</span> UMS
            </h3>
            {collapsed 
              ? <FaArrowLeftLong onClick={toggleCollapse} className={`${Update.icondirection} ${collapsed && "TOTO"}` } />
              : <FaArrowRightLong onClick={toggleCollapse} className={`${Update.icondirection} ${collapsed && "TOTO"}` } />
            }
          </div>
          <div className={`${Update.details}  ${collapsed && "deails_Image"} `}>
            <img src={profilePictue} alt="" />
            <h6>Karthi Madesh</h6>
            <p>Admin</p>
          </div>
        </div>

        <Menu className={`text-center ${Update.myMenuContainer} ${ collapsed  && "collapsed-menu"}`}>
  <MenuItem icon={<IoHomeOutline />} className={`text-center ${Update.menu_item}`}>
    <span className="menu-text" onClick={go} >Home</span>
  </MenuItem>
  <MenuItem icon={<FaRegBookmark />} className={`text-center ${Update.menu_item}`}>
    <span className="menu-text">Users</span>
  </MenuItem>
  <MenuItem icon={<FaGraduationCap />} className={`text-center ${Update.menu_item}`}>
    <span className="menu-text">Add User</span>
  </MenuItem>
  <MenuItem icon={<CgProfile />} className={`text-center ${Update.menu_item}`}>
    <span className="menu-text">Profile</span>
  </MenuItem>
</Menu>


<div className={`${Update.logout} ${collapsed && "collapsed-logout"}`}>
  <p>Logout</p>
  <span className={Update.logouticon}>
    <img src={logoutimage} className="logoutyapa" alt="" />
  </span>
</div>

      </Sidebar>
    </div>
  );
};

export default Side;
