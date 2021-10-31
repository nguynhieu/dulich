import { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import dayjs from 'dayjs'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/

const initValue = {
  email: '',
  phone: '',
  dateFrom: '',
  dateTo: '',
}

const defaultTour = {
  name: '',
  image: '',
  address: '',
  createdAt: '',
  description: '',
  email: '',
  phone: '',
  price: '',
  remainSlot: 0,
  star: '',
}

const contactShema = Yup.object({
  email: Yup.string()
    .email('Email không hợp lệ')
    .required('Đây là trường bắt buộc'),
  phone: Yup.string()
    .matches(phoneRegex, 'Số điện thoại không hợp lệ')
    .required('Đây là trường bắt buộc'),
  dateFrom: Yup.date()
    .max(Yup.ref('dateTo'), 'Ngày bắt đầu phải nằm trước ngày kết thúc')
    .required('Đây là trường bắt buộc'),
  dateTo: Yup.date().required('Đây là trường bắt buộc'),
})

const TourDetail = () => {
  const {
    params: { tourId },
  } = useRouteMatch()
  const [tour, setTour] = useState(defaultTour)
  const history = useHistory()

  const sendContact = values => {
    fetch(`https://arcane-beach-58118.herokuapp.com/api/tours/${tourId}/book`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(res => {
        toast.success(
          'Gửi thông tin đặt vé, chúng tôi sẽ liên hệ lại cho bạn trong vài phút, xin cám ơn!',
        )
        history.push('/')
      })
      .catch(err => {
        toast.warning('Gửi thông tin thất bại, vui lòng thử lại sau')
        console.log(err)
      })
  }

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: initValue,
    validationSchema: contactShema,
    onSubmit: values => sendContact(values),
  })

  console.log(errors)

  useEffect(() => {
    const fetchTour = () => {
      fetch(`https://arcane-beach-58118.herokuapp.com/api/tours/${tourId}`)
        .then(res => {
          return res.json()
        })
        .then(data => {
          setTour(data)
        })
    }

    fetchTour()
  }, [tourId])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="main">
      <div className="main__slide_offers">
        <div
          className="home_slide__background"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="home__content">
          <div className="home__title animated bounceInDown">{tour.name}</div>
        </div>
      </div>

      {/*About us*/}
      <div className="about">
        <div className="box about__box">
          <div className="about__image">
            <img src={tour.image} alt="" />
          </div>
          <div className="about__content">
            <div className="about__detail">
              <h6>Tên:</h6>
              <p>{tour.name}</p>
            </div>
            <div className="about__detail">
              <h6>Ngày bắt đầu:</h6>
              <p>{dayjs(tour.createdAt).format('DD/MM/YYYY')}</p>
            </div>
            <div className="about__detail">
              <h6>Email:</h6>
              <p>{tour.email}</p>
            </div>
            <div className="about__detail">
              <h6>Địa chỉ:</h6>
              <p>{tour.address}</p>
            </div>
            <div className="about__detail">
              <h6>Điện thoại:</h6>
              <p>{tour.phone}</p>
            </div>
            <div className="about__detail">
              <h6>Số chỗ còn lại:</h6>
              <p>{tour.remainSlot}</p>
            </div>
            <div className="about__detail">
              <h6>Giá:</h6>
              <p>{tour.price}</p>
            </div>
            <div className="about__detail">
              <h6>Số sao:</h6>
              <p>{tour.star}/10</p>
            </div>
          </div>
        </div>
        <div className="about__description">
          <p>{tour.description}</p>
        </div>
      </div>

      <div className="booking">
        <div className="box">
          <div className="contact_form_container">
            <div className="box contact_form__box">
              <div className="contact_form__title">Đặt tour của bạn</div>
              <form
                id="form_contact"
                className="contact__form"
                name="form_contact"
                onSubmit={handleSubmit}
              >
                <div>
                  <label>Email: </label>
                  <input
                    className="contact__form_email input_field"
                    name="email"
                    placeholder="E-mail"
                    type="text"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Số điện thoại:</label>
                  <input
                    className="contact__form_subject input_field"
                    name="phone"
                    placeholder="Số Điện Thoại"
                    type="tel"
                    onChange={handleChange}
                  />
                </div>
                <label
                  htmlFor="dateFrom"
                  style={{
                    display: 'block',
                    fontSize: '1.5rem',
                    textAlign: 'left',
                    color: 'black',
                    marginTop: '2rem',
                    fontWeight: 'bold',
                  }}
                >
                  Ngày bắt đầu:
                </label>
                <input
                  id="dateFrom"
                  className="contact__form_subject input_field"
                  name="dateFrom"
                  placeholder="Ngày bắt đầu"
                  type="date"
                  value={values.dateFrom}
                  onChange={handleChange}
                  min={dayjs().format('YYYY-MM-DD')}
                />
                <label
                  htmlFor="dateTo"
                  style={{
                    display: 'block',
                    fontSize: '1.5rem',
                    textAlign: 'left',
                    color: 'black',
                    marginTop: '2rem',
                    fontWeight: 'bold',
                  }}
                >
                  Ngày kết thúc:
                </label>
                <input
                  id="dateTo"
                  className="contact__form_subject input_field"
                  name="dateTo"
                  placeholder="Ngày kết thúc"
                  type="date"
                  value={values.dateTo}
                  onChange={handleChange}
                  min={dayjs(values.dateFrom).format('YYYY-MM-DD')}
                />
                <input
                  type="submit"
                  className="contact__form_button button trans_200"
                  value="Gởi đi"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourDetail
