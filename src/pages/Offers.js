import dayjs from 'dayjs'
import { useFormik } from 'formik'
import qs from 'qs'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import offerSlide11 from '../assets/images/offers_slide11.jpg'

const defaultValues = {
  name: '',
  address: '',
  createdAt: '',
  price: '',
}

function Offers() {
  const [intros, setIntros] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)

  const fetchIntros = () => {
    fetch('https://arcane-beach-58118.herokuapp.com/api/tours?discount=true')
      .then(res => res.json())
      .then(({ data }) => setIntros(data))
  }

  const formik = useFormik({
    initialValues: defaultValues,
    onSubmit: values => {
      const query = qs.stringify(values)
      fetch(
        `https://arcane-beach-58118.herokuapp.com/api/tours?discount=true&${query}`,
      )
        .then(res => res.json())
        .then(({ data }) => setIntros(data))
    },
  })

  const { handleChange, values, handleSubmit } = formik

  const renderIntros = (intros, isExpanded) => {
    if (!isExpanded) {
      intros = intros.slice(0, 9)
    }

    return intros.map((item, index) => (
      <div key={index} className="intro_item">
        <div
          className="intro_item__backgroud"
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
        <div className="intro_item__content">
          <div className="intro_date">
            Từ {dayjs(item.date).format('DD/MM/YYYY')}
          </div>
          <div className="intro_text">
            <h1>{item.name}</h1>
            <div className="intro_price">
              <p className="intro_price-old">
                {parseInt(item.price).toLocaleString()} ₫
              </p>
              <p className="intro_price-new">
                {parseInt(
                  Math.ceil(item.price * (100 - item.discount)) / 100,
                ).toLocaleString()}{' '}
                ₫
              </p>
            </div>
            <div className="rating rating_4">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="button intro_button">
            <div className="button_bcg"></div>
            <Link to={`/${item._id}`}>Xem ngay</Link>
          </div>
        </div>
      </div>
    ))
  }

  const handleIsExpandedClick = () => {
    setIsExpanded(true)
  }

  useEffect(() => {
    fetchIntros()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="main">
      <div className="main__slide_offers">
        <div
          className="home_slide__background"
          style={{
            backgroundImage: `url(${offerSlide11})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="home__content">
          <div className="home__title animated bounceInLeft">ưu đãi</div>
        </div>
      </div>
      {/*Intro*/}
      <div className="main_search">
        <div id="tabs" className="main_search__tabs">
          <ul className="search_tabs__list">
            <li className="search_tabs__item">
              <Link to="#">
                <i className="fas fa-umbrella-beach"></i>
                <span>Trips</span>
              </Link>
            </li>
          </ul>
          <div id="tabs-1" className="tabs_content animated fadeIn">
            <form className="search_content" onSubmit={handleSubmit}>
              <div className="search_content__item">
                <label htmlFor="name">Tên</label>
                <input
                  type="text"
                  className="search_content__input"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
              <div className="search_content__item">
                <label htmlFor="address">Địa chỉ</label>
                <input
                  type="text"
                  className="search_content__input"
                  name="address"
                  id="address"
                  value={values.address}
                  onChange={handleChange}
                />
              </div>
              <div className="search_content__item">
                <label htmlFor="createdAt">Ngày bắt đầu</label>
                <input
                  type="date"
                  className="search_content__input"
                  placeholder="DD-MM-YYYY"
                  name="createdAt"
                  value={values.createdAt}
                  onChange={handleChange}
                />
              </div>
              <div className="search_content__item">
                <label htmlFor="price">Giá</label>
                <input
                  type="text"
                  className="search_content__input"
                  placeholder="0"
                  name="price"
                  id="price"
                  value={values.price}
                  onChange={handleChange}
                />
              </div>
              <button className="button search_content__button" type="submit">
                Tìm kiếm
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="main_intro">
        <div className="main_intro__items" id="main_intro_items_id">
          {renderIntros(intros, isExpanded)}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {!isExpanded && (
            <button
              onClick={handleIsExpandedClick}
              className="button search_content__button"
            >
              Xem tất cả
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default Offers
