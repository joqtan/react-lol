import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <nav className='flex items-center justify-between w-full px-6 py-4 bg-gray-900 '>
        <div className='mr-6 text-white'>
          <Link to='/' className='navbar-brand hover:text-gray-500'>
            <span className='font-semibold text-2xl trackin-tight'>
              LeagueDex
            </span>
          </Link>
        </div>
        <div className='block lg:hidden'>
          <button className='flex items-center justify-between px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className=''>
          <div className='text-xl mr-6'>
            <Link className='text-white mr-4 hover:text-gray-500' to=''>
              Home
            </Link>
            <Link className='text-white mr-4 hover:text-gray-500' to='/champs'>
              Champs
            </Link>
            <Link className='text-white mr-4 hover:text-gray-500' to='items'>
              Items
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}
