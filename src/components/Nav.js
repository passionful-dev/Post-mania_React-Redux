import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'


const Nav = (props) => {
  // setTimeout(() => {
  //   props.history.push('/about')
  // }, 2000);
  return (
    <div>
      <nav className="nav-wrapper cyan darken-3">
        <div className="container">
          <a href="#!" className="brand-logo white-text">Post mania</a>
          <a href="#" className="sidenav-trigger" data-target="mobile-links">
          {/* <a href="#!" className="sidenav-trigger hide-on-med-and-up" data-target="mobile-links"> */}
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
          {/* <ul className="right hide-on-small-only"> */}
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

  )
}


export default withRouter(Nav)
