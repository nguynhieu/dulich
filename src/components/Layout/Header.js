import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from 'assets/images/logo.png'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()
  const [activeNav, setActiveNav] = useState(null)

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setActiveNav(0)
        break
      case '/about':
        setActiveNav(1)
        break
      case '/offers':
        setActiveNav(2)
        break
      case '/blog':
        setActiveNav(3)
        break
      case '/contact':
        setActiveNav(4)
        break
      default:
        setActiveNav(0)
        break
    }
  }, [location])

  return (
    <header className="header">
      {/*Top Bar*/}

      <div className="top_bar">
        <div className="bar__info">
          <div className="phone">+84 123 456 789</div>
          <div className="social">
            <ul className="social_list">
              <li className="social_list_item">
                <Link to="#">
                  <FontAwesomeIcon size="2x" icon={['fab', 'facebook']} />
                </Link>
              </li>
              <li className="social_list_item">
                <Link to="#">
                  <FontAwesomeIcon size="2x" icon={['fab', 'instagram']} />
                </Link>
              </li>
              <li className="social_list_item">
                <Link to="#">
                  <FontAwesomeIcon size="2x" icon={['fab', 'youtube']} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="main_nav">
        <div className="main_nav__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
            <span>DULICHVIET</span>
          </Link>
        </div>
        <div className="main_nav__menu">
          <ul className="main_nav__list">
            <li
              className={
                'main_nav__item ' +
                (activeNav === 0 ? 'main_nav__item--active' : '')
              }
            >
              <Link to="/">TRANG CHỦ</Link>
            </li>
            <li
              className={
                'main_nav__item ' +
                (activeNav === 1 ? 'main_nav__item--active' : '')
              }
            >
              <Link to="/about">GIỚI THIỆU</Link>
            </li>
            <li
              className={
                'main_nav__item ' +
                (activeNav === 2 ? 'main_nav__item--active' : '')
              }
            >
              <Link to="/offers">ƯU ĐÃI</Link>
            </li>
            <li
              className={
                'main_nav__item ' +
                (activeNav === 3 ? 'main_nav__item--active' : '')
              }
            >
              <Link to="/blog">TIN TỨC</Link>
            </li>
            <li
              className={
                'main_nav__item ' +
                (activeNav === 4 ? 'main_nav__item--active' : '')
              }
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
