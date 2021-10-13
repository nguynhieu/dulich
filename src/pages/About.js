import React from 'react'
import aboutSlide from '../assets/images/about_slide.jpg'
import intro from '../assets/images/intro.png'

function About() {
  return (
    <div className="main">
      <div className="main__slide_offers">
        <div
          className="home_slide__background"
          style={{
            backgroundImage: `url(${aboutSlide})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="home__content">
          <div className="home__title animated bounceInDown">Giới thiệu</div>
        </div>
      </div>

      {/*About us*/}
      <div className="about">
        <div className="box about__box">
          <div className="about__image">
            <img src={intro} alt="" />
          </div>
          <div className="about__content">
            <div className="about__title">Về chúng tôi</div>
            <p className="about__text">
              DULICHVIET là trang website hỗ trợ đặt tour du lịch Việt Nam, với
              tiêu chí tour không hoàn, không hủy, không thay đổi lịch trình.
              Gía cả tốt nhất thị trường hơn hết đảm bảo cho du khách có những
              trải nghiệm thú vị nhất, dịch dụ chuyên nghiệp nhất khi mua tour
              tại đây. DULICHVIET phục vụ du khách đi tham quan du lịch trên cả
              nước, du lịch tại đây rất được khách hàng tin tưởng và đánh giá
              cao.
            </p>
            <div className="button button_about">
              <div className="button_bcg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
