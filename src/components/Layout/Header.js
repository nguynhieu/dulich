import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from 'assets/images/logo.png'

function Header() {
  const [activeNav, setActiveNav] = useState(0)

  const handleNavItemClick = index => () => {
    setActiveNav(index)
  }

  return (
    <header className="header">
      {/*  Top Bar  */}

      <div className="top_bar">
        <div className="bar__info">
          <div className="phone">+84 123 456 789</div>
          <div className="social">
            <ul className="social_list">
              <li className="social_list_item">
                <a href="#">
                  <FontAwesomeIcon size="2x" icon={['fab', 'facebook']} />
                </a>
              </li>
              <li className="social_list_item">
                <a href="#">
                  <FontAwesomeIcon size="2x" icon={['fab', 'instagram']} />
                </a>
              </li>
              <li className="social_list_item">
                <a href="#">
                  <FontAwesomeIcon size="2x" icon={['fab', 'youtube']} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="main_nav">
        <div className="main_nav__logo">
          <a href="/">
            <img src={logo} alt="logo" />
            <span>DULICHVIET</span>
          </a>
        </div>
        <div className="main_nav__menu">
          <ul className="main_nav__list">
            <li
              className={
                'main_nav__item ' +
                (activeNav === 0 ? 'main_nav__item--active' : '')
              }
              onClick={handleNavItemClick(0)}
            >
              <Link to="/">TRANG CHỦ</Link>
            </li>
            <li
              className={
                'main_nav__item ' +
                (activeNav === 1 ? 'main_nav__item--active' : '')
              }
              onClick={handleNavItemClick(1)}
            >
              <Link to="/about">GIỚI THIỆU</Link>
            </li>
            <li
              className={
                'main_nav__item ' +
                (activeNav === 2 ? 'main_nav__item--active' : '')
              }
              onClick={handleNavItemClick(2)}
            >
              <Link to="/offers">ƯU ĐÃI</Link>
            </li>
            <li
              className={
                'main_nav__item ' +
                (activeNav === 3 ? 'main_nav__item--active' : '')
              }
              onClick={handleNavItemClick(3)}
            >
              <Link to="/blog">TIN TỨC</Link>
            </li>
            <li
              className={
                'main_nav__item ' +
                (activeNav === 4 ? 'main_nav__item--active' : '')
              }
              onClick={handleNavItemClick(4)}
            >
              <Link to="/contact">LIÊN HỆ</Link>
            </li>
          </ul>
        </div>
        <div className="main_nav__search">
          <form action="">
            <input className="input_search" type="text" />
          </form>
          <div className="search__item">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
