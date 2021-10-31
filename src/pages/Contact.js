import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

import offersSlide from '../assets/images/offers_slide.jpg'

const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/

const initValue = {
  name: '',
  email: '',
  phone: '',
  title: '',
  content: '',
}

const contactShema = Yup.object({
  name: Yup.string().required('Đây là trường bắt buộc'),
  email: Yup.string()
    .email('Email không hợp lệ')
    .required('Đây là trường bắt buộc'),
  phone: Yup.string()
    .matches(phoneRegex, 'Số điện thoại không hợp lệ')
    .required('Đây là trường bắt buộc'),
  title: Yup.string().required('Đây là trường bắt buộc'),
  content: Yup.string().required('Đây là trường bắt buộc'),
})

function Contact() {
  const sendContact = values => {
    fetch('https://arcane-beach-58118.herokuapp.com/api/tours', {
      method: 'POST',
      body: values,
    })
      .then(res => {
        toast.success(
          'Gửi liên hệ thành công, chúng tôi sẽ liên hệ lại cho bạn trong vài phút, xin cám ơn!',
        )
      })
      .catch(err => console.log(err))
  }

  const { handleChange, handleSubmit } = useFormik({
    initialValues: initValue,
    validationSchema: contactShema,
    onSubmit: values => sendContact(values),
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
      <div className="contact_form_container">
        <div className="box contact_form__box">
          <div className="contact_form__title">Form liên hệ</div>
          <form
            id="form_contact"
            className="contact__form"
            name="form_contact"
            onSubmit={handleSubmit}
          >
            <label>
              <input
                id="form_name"
                className="contact__form_name input_field"
                name="name"
                placeholder="Họ và Tên"
                type="text"
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                id="form_email"
                className="contact__form_email input_field"
                name="email"
                placeholder="E-mail"
                type="text"
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                id="form_subject"
                className="contact__form_subject input_field"
                name="phone"
                placeholder="Số Điện Thoại"
                type="tel"
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                id="form_subject"
                className="contact__form_subject input_field"
                name="title"
                placeholder="Chủ đề"
                type="text"
                onChange={handleChange}
              />
            </label>
            <textarea
              name="content"
              id="form_mess"
              placeholder="Nội dung"
              rows="4"
              className="contact__form_mess input_field"
              onChange={handleChange}
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
