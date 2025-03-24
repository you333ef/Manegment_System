import React, { useState } from 'react'
import Side from './Side-Nav/Side'
import TopNav from './Top_Navbar/TopNav'
import { Outlet } from 'react-router-dom'
import './masterLayout.css' 
import NavScrollExample from './Top_Navbar/TopNav'

const MasterLayOut = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div className="papaMaster">
      <div className="sidenavyapapa">
        <Side collapsed={isCollapsed} setCollapsed={setIsCollapsed} />
      </div>
      <div className={`content ${isCollapsed ? 'content-collapsed' : ''}`}>
        <div className="topnav">
          <TopNav />
         
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MasterLayOut
