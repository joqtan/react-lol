import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className='nav-wrapper blue-grey darken-4'>
          <ul className='right'>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Champs</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
