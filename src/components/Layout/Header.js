import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from 'assets/images/logo.png'

function Header() {
  return (
    <header class="header">
      {/*  Top Bar  */}

      <div class="top_bar">
        <div class="bar__info">
          <div class="phone">+84 123 456 789</div>
          <div class="social">
            <ul class="social_list">
              <li class="social_list_item">
                <a href="#">
                  <FontAwesomeIcon size="2x" icon={['fab', 'facebook']} />
                </a>
              </li>
              <li class="social_list_item">
                <a href="#">
                  <FontAwesomeIcon size="2x" icon={['fab', 'instagram']} />
                </a>
              </li>
              <li class="social_list_item">
                <a href="#">
                  <FontAwesomeIcon size="2x" icon={['fab', 'youtube']} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="main_nav">
        <div class="main_nav__logo">
          <a href="/">
            <img src={logo} alt="logo" />
            DULICHVIET
          </a>
        </div>
        <div class="main_nav__menu">
          <ul class="main_nav__list">
            <li class="main_nav__item">
              <NavLink to="/">TRANG CHỦ</NavLink>
            </li>
            <li class="main_nav__item">
              <NavLink to="/about">GIỚI THIỆU</NavLink>
            </li>
            <li class="main_nav__item">
              <NavLink to="/offers">ƯU ĐÃI</NavLink>
            </li>
            <li class="main_nav__item">
              <NavLink to="/blog">TIN TỨC</NavLink>
            </li>
            <li class="main_nav__item">
              <NavLink to="/contact">LIÊN HỆ</NavLink>
            </li>
          </ul>
        </div>
        <div class="main_nav__search">
          <form action="">
            <input class="input_search" type="text" />
          </form>
          <div class="search__item">
            <i class="fas fa-search"></i>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
