import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import intro from '../assets/images/intro.png';
import about_slide from '../assets/images/about_slide.jpg';
function About() {
    const [intros, setIntros] = useState([]);

    const fetchIntros = () => {
        fetch('http://149.28.153.73/api/tours')
            .then(res => res.json())
            .then(data => setIntros(data))

    }

    useEffect(() => {
        fetchIntros();
    }, [])
    return (
        <div class="main">
            <div class="main__slide_offers">
                <div >
                    <div class="home_slide__background"
                        style={{ backgroundImage: `url(${about_slide})` }}></div>
                    <div class="home__content">
                        <div class="home__title animated bounceInDown">
                            Giới thiệu
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--About us--> */}
            <div class="about">
                <div class="box about__box">
                    <div class="about__image"><img src={intro} alt="" /></div>
                    <div class="about__content">
                        <div class="about__title">Về chúng tôi</div>
                        <p class="about__text">DULICHVIET là trang website hỗ trợ đặt tour du lịch Việt Nam, với tiêu chí
                            tour không hoàn, không hủy, không thay đổi lịch trình. Gía cả tốt nhất thị trường hơn hết đảm
                            bảo cho du khách có những trải nghiệm thú vị nhất, dịch dụ chuyên nghiệp nhất khi mua tour tại
                            đây. DULICHVIET phục vụ du khách đi tham quan du lịch trên cả nước, du lịch tại
                            đây rất được khách hàng tin tưởng và đánh giá cao.</p>
                        <div class="button button_about">
                            <div class="button_bcg"></div>
                            {/* <a href="#">Đọc thêm <span></span><span></span><span></span></a> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default About;