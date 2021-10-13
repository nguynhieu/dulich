import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import footerBlog1 from 'assets/images/footer_blog_1.jpg'
import footerBlog2 from 'assets/images/footer_blog_2.jpg'
import footerBlog3 from 'assets/images/footer_blog_3.jpg'
import logo from 'assets/images/logo.png'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [intros, setIntros] = useState([])

  const fetchIntros = () => {
    fetch('http://149.28.153.73/api/tours')
      .then(res => res.json())
      .then(data => setIntros(data))
  }

  useEffect(() => {
    fetchIntros()
  }, [])

  return (
    <footer className="footer">
      <div className="box footer__box">
        <div className="footer__about">
          <div className="footer__logo">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
                <span>DULICHVIET</span>
              </Link>
            </div>
          </div>
          <p className="footer_about__text">
            DULICHVIET tự hào là một đơn vị tiêu biểu trong lĩnh vực hỗ trợ đặt
            tour du lịch đón nhận giải thưởng uy tín nhất dành cho cộng đồng
            doanh nghiệp Việt Nam.
          </p>
          <ul className="footer_social_list">
            <li className="social_list_item">
              <Link to="/">
                <FontAwesomeIcon size="2x" icon={['fab', 'facebook']} />
              </Link>
            </li>
            <li className="social_list_item">
              <Link to="/">
                <FontAwesomeIcon size="2x" icon={['fab', 'instagram']} />
              </Link>
            </li>
            <li className="social_list_item">
              <Link to="/">
                <FontAwesomeIcon size="2x" icon={['fab', 'youtube']} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__blog">
          <div className="footer_title">bản tin</div>
          <div className="footer_blog__item">
            <div className="footer_blog__image">
              <img src={footerBlog1} alt="" />
            </div>
            <div className="footer_blog__content">
              <div className="footer_blog__title">
                <Link to="/">Địa điểm du lịch Hè 2021</Link>
              </div>
              <div className="footer_blog__date">30/04/2021</div>
            </div>
          </div>
          <div className="footer_blog__item">
            <div className="footer_blog__image">
              <img src={footerBlog2} alt="" />
            </div>
            <div className="footer_blog__content">
              <div className="footer_blog__title">
                <Link to="/">Địa điểm du lịch Hè 2021</Link>
              </div>
              <div className="footer_blog__date">30/04/2021</div>
            </div>
          </div>
          <div className="footer_blog__item">
            <div className="footer_blog__image">
              <img src={footerBlog3} alt="" />
            </div>
            <div className="footer_blog__content">
              <div className="footer_blog__title">
                <Link to="/">Địa điểm du lịch Hè 2021</Link>
              </div>
              <div className="footer_blog__date">30/04/2021</div>
            </div>
          </div>
        </div>
        <div className="footer__tags">
          <div className="footer_title">Tags</div>
          <ul className="tags_list">
            <li className="tags_item">
              <Link to="/">Miền Bắc</Link>
            </li>
            <li className="tags_item">
              <Link to="/">Miền Trung</Link>
            </li>
            <li className="tags_item">
              <Link to="/">Miền Nam</Link>
            </li>
            <li className="tags_item">
              <Link to="/">Đà Nẵng</Link>
            </li>
            <li className="tags_item">
              <Link to="/">Quảng Nam</Link>
            </li>
            <li className="tags_item">
              <Link to="/">Huế</Link>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <div className="footer_title">Liên hệ</div>
          <ul className="contact_list">
            {/* eslint-disable-next-line array-callback-return */}
            {intros.map((item, index) => {
              if (index < 1) {
                return (
                  <div key={index}>
                    <li className="contact_item">
                      <div className="contact_text">{item.phone}</div>
                    </li>
                    <li className="contact_item">
                      <div className="contact_text">{item.email}</div>
                    </li>
                  </div>
                )
              }
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer
