import React from 'react'
import logo from './Logos/logo.svg'

const Header = () => {
  const myImageStyle = { width: '15%', height: '15%' };
  return (
    <div>
      {/* This a bootstrap class */}

      <h1 className="font-weight-light display-1 text-center"><img style={myImageStyle} src={logo} alt="My logo" />Pico | Fork's Up!

      </h1>
    </div>
  )
}

export default Header