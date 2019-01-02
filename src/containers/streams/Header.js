import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from '../login/GoogleAuth'

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Home
      </Link>
      <div className="right menu">
        <Link to="/streams/new" className="item">
          Create New
        </Link>
        <GoogleAuth />
      </div>
    </div>
  )
}

export { Header }