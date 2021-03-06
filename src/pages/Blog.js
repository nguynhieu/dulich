import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import blog11 from '../assets/images/blog11.jpg'
import blog22 from '../assets/images/blog22.jpg'
import blog_3 from '../assets/images/blog_3.jpg'
import gallery_1 from '../assets/images/gallery_1.jpg'
import gallery_2 from '../assets/images/gallery_2.jpg'
import gallery_3 from '../assets/images/gallery_3.jpg'
import gallery_4 from '../assets/images/gallery_4.jpg'
import gallery_5 from '../assets/images/gallery_5.jpg'
import gallery_6 from '../assets/images/gallery_6.jpg'
import latest_1 from '../assets/images/latest_1.jpg'
import offersSlide from '../assets/images/offers_slide.jpg'

function Blog() {
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
          <div className="home__title animated bounceInDown">Tin tức</div>
        </div>
      </div>
      {/*blog*/}
      <div className="blog">
        <div className="box blog__box">
          <div className="blog__list">
            <div className="blog_post">
              <div className="blog_post_image">
                <img className="zoom_img" src={blog11} alt="" />
                <div className="blog_post_date">
                  <span>15/09/2021</span>
                </div>
              </div>
              <div className="blog_post_meta">
                <ul>
                  <li className="blog_post_meta_item">
                    <Link to="/">by DULICHVIET</Link>
                  </li>
                  <li className="blog_post_meta_item">
                    <Link to="/">Miền Trung</Link>
                  </li>
                  <li className="blog_post_meta_item">
                    <Link to="/">999 bình luận</Link>
                  </li>
                </ul>
              </div>
              <div className="blog_post_title">
                <Link to="/">VỀ MIỀN TRUNG THƯƠNG NHỚ</Link>
              </div>
              <div className="blog_post_text">
                <p>
                  Tôi sẽ kể cho bạn nghe về chuyến đi đầy thơ mộng, bình dị của
                  mình ở miền Trung yêu dấu. Nơi ấy đầy nắng, đầy gió, những
                  cảnh đẹp ngút ngàn và nhiều di sản văn hóa độc đáo. Nơi ấy có
                  những nụ cười ấm áp, món ăn tuyệt vời và có cả những trái tim
                  “lạc lối” không muốn quay về…
                </p>
              </div>
            </div>
            <div className="blog_post">
              <div className="blog_post_image">
                <img className="zoom_img" src={blog22} alt="" />
                <div className="blog_post_date">
                  <span>14/04/2021</span>
                </div>
              </div>
              <div className="blog_post_meta">
                <ul>
                  <li className="blog_post_meta_item">
                    <Link to="/">by DULICHVIET</Link>
                  </li>
                  <li className="blog_post_meta_item">
                    <Link to="/">Miền Bắc</Link>
                  </li>
                  <li className="blog_post_meta_item">
                    <Link to="/">102 bình luận</Link>
                  </li>
                </ul>
              </div>
              <div className="blog_post_title">
                <Link to="/">
                  MỘT HÀNH TRÌNH - BA ĐIỂM ĐẾN DI SẢN PHƯƠNG BẮC
                </Link>
              </div>
              <div className="blog_post_text">
                <p>
                  Chỉ một hành trình, du khách có thể khám phá đến ba di sản nổi
                  tiếng của Việt Nam: vịnh Hạ Long, Tràng An và thành nhà Hồ…
                  Đặc biệt, dịch vụ nghỉ dưỡng cao cấp, sự kết hợp của Vietravel
                  cùng hãng hàng không Bambo Airways đã mang đến cho bạn mức giá
                  tốt nhất trong mùa hè này.
                </p>
              </div>
            </div>
            <div className="blog_post">
              <div className="blog_post_image">
                <img className="zoom_img" src={blog_3} alt="" />
                <div className="blog_post_date">
                  <span>14/04/2021</span>
                </div>
              </div>
              <div className="blog_post_meta">
                <ul>
                  <li className="blog_post_meta_item">
                    <Link to="/">by DULICHVIET</Link>
                  </li>
                  <li className="blog_post_meta_item">
                    <Link to="/">Miền Bắc</Link>
                  </li>
                  <li className="blog_post_meta_item">
                    <Link to="/">77 bình luận</Link>
                  </li>
                </ul>
              </div>
              <div className="blog_post_title">
                <Link to="/">
                  TOUR LỄ 30/4 VÀ 1/5: VÌ SAO DU LỊCH TRỌN GÓI VẪN CHIẾM ƯU THẾ?
                </Link>
              </div>
              <div className="blog_post_text">
                <p>
                  Với 5 ngày nghỉ liên tiếp, lễ 30/4 va 1/5 năm nay hứa hẹn sẽ
                  là “kỳ nghỉ vàng” cho nhiều gia đình và dân công sở. Theo khảo
                  sát, tour du lịch trọn gói đến từ các hãng lữ hành tên tuổi
                  vẫn chiếm ưu thế áp đảo trên thị trường với rất nhiều ưu điểm
                  nổi trội như: mức giá ổn định, nhiều điểm đến mới lạ và ưu đãi
                  giảm giá hấp dẫn…
                </p>
              </div>
            </div>
            <div className="blog_navigation">
              <ul>
                <li className="blog_dot active">01.</li>
                <li className="blog_dot"> 02.</li>
                <li className="blog_dot"> 03.</li>
                <li className="blog_dot">...</li>
              </ul>
            </div>
          </div>
          <div className="blog__sidebar">
            <div className="sidebar_times">
              <div className="sidebar_title">Thời gian</div>
              <div className="sidebar_list">
                <ul>
                  <li>
                    <Link to="/">Tháng 1,2021</Link>
                  </li>
                  <li>
                    <Link to="/">Tháng 2,2021</Link>
                  </li>
                  <li>
                    <Link to="/">Tháng 3,2021</Link>
                  </li>
                  <li>
                    <Link to="/">Tháng 4,2021</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="sidebar_categories">
              <div className="sidebar_title">Danh mục</div>
              <div className="sidebar_list">
                <ul>
                  <li>
                    <Link to="/">Đà Nẵng</Link>
                  </li>
                  <li>
                    <Link to="/">Quảng Năm</Link>
                  </li>
                  <li>
                    <Link to="/">Huế</Link>
                  </li>
                  <li>
                    <Link to="/">Hà Nội</Link>
                  </li>
                  <li>
                    <Link to="/">Hồ Chí Minh</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="sidebar_latest_posts">
              <div className="sidebar_title">Bài viết mới nhất</div>
              <div className="latest_posts">
                <div className="latest_post">
                  <div className="latest_post_image">
                    <img src={latest_1} alt="" />
                  </div>
                  <div className="latest_post_content">
                    <div className="latest_post_title">
                      <Link to="/">Bãi biển đẹp ở Đà Nẵng</Link>
                    </div>
                    <div className="latest_post_meta">
                      by DULICHVIET - 12/04/2021
                    </div>
                  </div>
                </div>
                <div className="latest_post">
                  <div className="latest_post_image">
                    <img src={latest_1} alt="" />
                  </div>
                  <div className="latest_post_content">
                    <div className="latest_post_title">
                      <Link to="/">Cẩm nang du lịch Quảng Nam</Link>
                    </div>
                    <div className="latest_post_meta">
                      by DULICHVIET - 11/04/2021
                    </div>
                  </div>
                </div>
                <div className="latest_post">
                  <div className="latest_post_image">
                    <img src={latest_1} alt="" />
                  </div>
                  <div className="latest_post_content">
                    <div className="latest_post_title">
                      <Link to="/">Các tour biển đảo Việt Nam</Link>
                    </div>
                    <div className="latest_post_meta">
                      by DULICHVIET - 10/04/2021
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar_gallery">
              <div className="sidebar_title">Bộ sưu tập</div>
              <div className="gallery_content">
                <ul className="gallery_items">
                  <li className="gallery_item">
                    <Link to="/">
                      <img className="imggg" src={gallery_1} alt="" />
                    </Link>
                  </li>
                  <li className="gallery_item">
                    <Link to="/">
                      <img src={gallery_2} alt="" />
                    </Link>
                  </li>
                  <li className="gallery_item">
                    <Link to="/">
                      <img src={gallery_3} alt="" />
                    </Link>
                  </li>
                  <li className="gallery_item">
                    <Link to="/">
                      <img src={gallery_4} alt="" />
                    </Link>
                  </li>
                  <li className="gallery_item">
                    <Link to="/">
                      <img src={gallery_5} alt="" />
                    </Link>
                  </li>
                  <li className="gallery_item">
                    <Link to="/">
                      <img src={gallery_6} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Blog
