import { useState } from 'react'
import offersSlide from '../assets/images/offers_slide.jpg'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleNameChange = event => {
    setName(event.target.value)
  }
  const handleEmailChange = event => {
    setEmail(event.target.value)
  }
  const handlePhoneChange = event => {
    setPhone(event.target.value)
  }
  const handleTitleChange = event => {
    setTitle(event.target.value)
  }
  const handleContentChange = event => {
    setContent(event.target.value)
  }

  const handleContactFormSubmit = event => {
    event.preventDefault()
  }

  return (
    <div className="main">
      <div className="main__slide_offers">
        <div
          className="home_slide__background"
          style={{
            backgroundImage: `url(${offersSlide})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="home__content">
          <div className="home__title animated bounceInDown">Liên hệ</div>
        </div>
      </div>
      {/*contact*/}
      <div className="contact_form_container">
        <div className="box contact_form__box">
          <div className="contact_form__Title">Form liên hệ</div>
          <form
            id="form_contact"
            className="contact__form"
            name="form_contact"
            onSubmit={handleContactFormSubmit}
          >
            <label>
              <input
                id="form_name"
                className="contact__form_name input_field"
                name="name"
                placeholder="Họ và Tên"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </label>
            <label>
              <input
                id="form_email"
                className="contact__form_email input_field"
                name="email"
                placeholder="E-mail"
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
            </label>
            <label>
              <input
                id="form_subject"
                className="contact__form_subject input_field"
                name="subject"
                placeholder="Số Điện Thoại"
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
              />
            </label>
            <label>
              <input
                id="form_subject"
                className="contact__form_subject input_field"
                name="subject"
                placeholder="Chủ đề"
                type="text"
                value={title}
                onChange={handleTitleChange}
              />
            </label>
            <textarea
              name="mess"
              id="form_mess"
              placeholder="Nội dung"
              rows="4"
              className="contact__form_mess input_field"
              value={content}
              onChange={handleContentChange}
            ></textarea>
            <input
              type="submit"
              className="contact__form_button button trans_200"
              value="Gởi đi"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact
