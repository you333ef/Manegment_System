import React from 'react'
import Side from './Side-Nav/Side'
import TopNav from './Top_Navbar/TopNav'
import { Outlet } from 'react-router-dom'

const MasterLayOut = () => {
  return (
    <div>
        <div className="row">
            <div className="col-md-4">
                <TopNav/>
<Side/>
            </div>
            <div className="col-md-8">
<Outlet />

            </div>
        </div>
    </div>
  )
}

export default MasterLayOut