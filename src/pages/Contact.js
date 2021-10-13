import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import offers_slide from '../assets/images/offers_slide.jpg';
import blog11 from '../assets/images/blog11.jpg';

function Contact() {
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
        <div className="main">
            <div className="main__slide_offers">
                <div>
                    <div className="home_slide__background"
                        style={{ backgroundImage: `url(${offers_slide})` }}></div>
                    <div className="home__content">
                        <div className="home__title animated bounceInDown">
                            Liên hệ
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--        contact--> */}
            <div className="contact_form_container">
                <div className="box contact_form__box">
                    <div className="contact_form__title">Form liên hệ</div>
                    <form action="" id="form_contact" className="contact__form" method="post" name="form_contact"
                        onsubmit="return validateForm()">
                        <label>
                            <input id="form_name" className="contact__form_name input_field" name="name" placeholder="Họ và Tên"
                                type="text" value="" />
                        </label>
                        <label>
                            <input id="form_email" className="contact__form_email input_field" name="email" placeholder="E-mail"
                                type="text" value="" />
                        </label>
                        <label>
                            <input id="form_subject" className="contact__form_subject input_field" name="subject"
                                placeholder="Số Điện Thoại" type="tel" />
                        </label>
                        <label>
                            <input id="form_subject" className="contact__form_subject input_field" name="subject"
                                placeholder="Chủ đề" type="text" />
                        </label>
                        <textarea name="mess" id="form_mess" placeholder="Nội dung" rows="4"
                            className="contact__form_mess input_field"></textarea>
                        <input type="submit" className="contact__form_button button trans_200" value="Gởi đi" />
                    </form>
                </div>
            </div>


        </div>
    )
}
export default Contact;