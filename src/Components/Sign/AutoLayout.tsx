import React from 'react'
import { Outlet } from 'react-router-dom'

const AutoLayout = () => {
  return (
    <div>
        <Outlet />
        
    </div>
  )
}

export default AutoLayout