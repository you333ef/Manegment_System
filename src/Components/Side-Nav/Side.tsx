import React, { useContext, useState } from 'react'
import Update from '../Side-Nav/side.module.css'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import profilePictue from '../../assets/Yousef/profile_picture.svg'
import { FaArrowLeftLong, FaArrowRightLong, FaRegBookmark, FaGraduationCap } from 'react-icons/fa6'
import { IoHomeOutline } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
import logoutimage from '../../assets/Yousef/iconlogout.svg'
import { useNavigate } from 'react-router-dom'
import { ContextYasta } from '../../Context/Test_data'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button' // لو لسه هتستخدمه في المودال
import { ToastContainer } from 'react-toastify'

interface SideProps {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

interface UserData {
  firstName: string
  lastName: string
}

const Side: React.FC<SideProps> = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate()
  const { data } = useContext(ContextYasta) as { data: UserData }
  
  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }

  const go = () => navigate('/dashboard/home')
  const profilee = () => navigate('/dashboard/profile')
  const users = () => navigate('/dashboard/users')

  const confirmLogout = () => {
    localStorage.removeItem("data_Login_User")
    navigate('/')
  }
  
  const Logout = () => {
    handleShowModal()
  }
  
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => setShowModal(false)
  const handleShowModal = () => setShowModal(true)

  return (
    <div className={Update.sideNavbar}>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Logout Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to log out? Your current session data will be deleted, and you'll need to log in again.
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Cancel
          </button>
          <button 
            className="btn"
            style={{ backgroundColor: 'rgba(254, 175, 0, 1)', color: 'white' }}
            onClick={confirmLogout}
          >
            Yes, Log Out
          </button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
      <Sidebar collapsed={collapsed} id="custom_sidebar" className={`${Update.listMID}`}>
        <div className={Update.topsidenav}>
          <div className={`${Update.topsidenavtitle} ${collapsed && 'TITILE_SIDE'}`}>
            <h3><span>|</span> UMS</h3>
            {collapsed 
              ? <FaArrowLeftLong onClick={toggleCollapse} className={`${Update.icondirection}`} />
              : <FaArrowRightLong onClick={toggleCollapse} className={`${Update.icondirection}`} />
            }
          </div>
        </div>

        <div className={`${Update.topsidenav} ${collapsed && "TITILE_SIDEE"}`}>
          <div className={`${Update.details}  ${collapsed && "deails_Image"}`}>
            <img src={profilePictue} alt="" />
            <h6>{data.firstName} {data.lastName}</h6>
            <p>Admin</p>
          </div>

          <Menu className={`text-center ${Update.myMenuContainer} ${ collapsed  && "collapsed-menu"}`}>
            <MenuItem icon={<IoHomeOutline />} onClick={go} className={`text-center ${Update.menu_item}`}>
              <span className="menu-text">Home</span>
            </MenuItem>
            <MenuItem icon={<FaRegBookmark />} onClick={users} className={`text-center ${Update.menu_item}`}>
              <span className="menu-text">Users</span>
            </MenuItem>
            <MenuItem icon={<FaGraduationCap />} onClick={users} className={`text-center ${Update.menu_item}`}>
              <span className="menu-text">Add User</span>
            </MenuItem>
            <MenuItem icon={<CgProfile />} onClick={profilee} className={`text-center ${Update.menu_item}`}>
              <span className="menu-text">Profile</span>
            </MenuItem>
          </Menu>

          <div onClick={Logout} className={`${Update.logout}  ${collapsed && "collapsed-logout"}`}>
            <p>Logout</p>
            <span className={Update.logouticon}>
              <img src={logoutimage} className="logoutyapa" alt="" />
            </span>
          </div>
        </div>
      </Sidebar>
    </div>
  )
}

export default Side
