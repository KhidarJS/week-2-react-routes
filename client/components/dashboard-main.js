import React from 'react'
import { Link } from 'react-router-dom'

const DashboardMain = () => {
  return (
    <div>
      <div id="title"> Main </div>
      <Link to="/dashboard/profile/9cf2664d-c982-4b97-8309-8253f7d011fe"> Go To Profile</Link>
      <Link to="/dashboard/main"> Go To Root</Link>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
