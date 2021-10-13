import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from 'assets/images/logo.png'

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
              <a href="#">
                <img src={logo} alt="logo" />
                DULICHVIET
              </a>
            </div>
          </div>
          <p className="footer_about__text">
            DULICHVIET tự hào là một đơn vị tiêu biểu trong lĩnh vực hỗ trợ đặt
            tour du lịch đón nhận giải thưởng uy tín nhất dành cho cộng đồng
            doanh nghiệp Việt Nam.
          </p>
          <ul className="footer_social_list">
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
        <div className="footer__blog">
          <div className="footer_title">bản tin</div>
          <div className="footer_blog__item">
            <div className="footer_blog__image">
              <img src="styles/images/footer_blog_1.jpg" alt="" />
            </div>
            <div className="footer_blog__content">
              <div className="footer_blog__title">
                <a href="#">Địa điểm du lịch Hè 2021</a>
              </div>
              <div className="footer_blog__date">30/04/2021</div>
            </div>
          </div>
          <div className="footer_blog__item">
            <div className="footer_blog__image">
              <img src="styles/images/footer_blog_1.jpg" alt="" />
            </div>
            <div className="footer_blog__content">
              <div className="footer_blog__title">
                <a href="#">Địa điểm du lịch Hè 2021</a>
              </div>
              <div className="footer_blog__date">30/04/2021</div>
            </div>
          </div>
          <div className="footer_blog__item">
            <div className="footer_blog__image">
              <img src="styles/images/footer_blog_1.jpg" alt="" />
            </div>
            <div className="footer_blog__content">
              <div className="footer_blog__title">
                <a href="#">Địa điểm du lịch Hè 2021</a>
              </div>
              <div className="footer_blog__date">30/04/2021</div>
            </div>
          </div>
        </div>
        <div className="footer__tags">
          <div className="footer_title">Tags</div>
          <ul className="tags_list">
            <li className="tags_item">
              <a href="#">Miền Bắc</a>
            </li>
            <li className="tags_item">
              <a href="#">Miền Trung</a>
            </li>
            <li className="tags_item">
              <a href="#">Miền Nam</a>
            </li>
            <li className="tags_item">
              <a href="#">Đà Nẵng</a>
            </li>
            <li className="tags_item">
              <a href="#">Quảng Nam</a>
            </li>
            <li className="tags_item">
              <a href="#">Huế</a>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <div className="footer_title">Liên hệ</div>
          <ul className="contact_list">
            {intros.map((item, index) => {
              if (index < 1) {
                return (
                  <>
                    {/* <li className="contact_item">
                                    <div className="contact_icon"><i className="fas fa-map-marker-alt"></i></div>
                                    <div className="contact_text">254 Nguyễn Văn Linh, Thạc Gián, Thanh Khê, Đà Nẵng</div>
                                    </li> */}
                    <li className="contact_item">
                      {/* <div className="contact_icon"><FontAwesomeIcon size="2x" icon={['fab', 'telegram']} /></div> */}
                      <div className="contact_text">{item.phone}</div>
                    </li>
                    <li className="contact_item">
                      {/* <div className="contact_icon"><FontAwesomeIcon size="2x" icon={['fab', 'mailbox']} /></div> */}
                      <div className="contact_text">{item.email}</div>
                    </li>
                    {/* <li className="contact_item">
                                    <div className="contact_icon"><i className="fas fa-globe-asia"></i></div>
                                    <div className="contact_text">www.</div>
                                    </li> */}
                  </>
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
