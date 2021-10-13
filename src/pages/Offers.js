import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import offers_slide11 from '../assets/images/offers_slide11.jpg';
import blog11 from '../assets/images/blog11.jpg';

function Offers() {
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
                <div >
                    <div className="home_slide__background"
                        style={{ backgroundImage: `url(${offers_slide11})` }}>
                    </div>
                    <div className="home__content">
                        <div className="home__title animated bounceInLeft">
                            ưu đãi
                        </div>
                    </div>
                </div>
            </div>           
            {/* <!--        Intro--> */}
            <div className="main_search">
                <div id="tabs" className="main_search__tabs">
                    <ul className="search_tabs__list">
                        {/* <!-- <li className="search_tabs__item"><a href="#tabs-1"><i
                            className="fas fa-hotel"></i><span>Khách sạn</span></a>
                    </li>
                    <li className="search_tabs__item"><a href="#tabs-2"><i
                            className="fas fa-car"></i><span>Xe cho thuê</span></a>
                    </li>
                    <li className="search_tabs__item"><a href="#tabs-3"><i className="fas fa-plane"></i><span>Chuyến bay</span></a>
                    </li> --> */}
                        <li className="search_tabs__item"><a href="#tabs-1"><i
                            className="fas fa-umbrella-beach"></i><span>Trips</span></a>
                        </li>
                        {/* <!-- <li className="search_tabs__item"><a href="#tabs-5"><i
                            className="fas fa-ship"></i><span>Du thuyền</span></a>
                    </li>
                    <li className="search_tabs__item"><a href="#tabs-6"><i className="fas fa-hiking"></i><span>Hoạt động</span></a>
                    </li> --> */}
                    </ul>
                    <div id="tabs-1" className="tabs_content animated fadeIn">
                        <form action="" className="search_content">
                            <div className="search_content__item">
                                <div>Địa điểm</div>
                                <input type="text" className="search_content__input" />
                            </div>
                            <div className="search_content__item">
                                <div>Bắt đầu</div>
                                <input type="date" className="search_content__input" placeholder="DD-MM-YYYY" />
                            </div>
                            <div className="search_content__item">
                                <div>Kết thúc</div>
                                <input type="date" className="search_content__input" placeholder="DD-MM-YYYY" />
                            </div>
                            <div className="search_content__item">
                                <div>Người lớn</div>
                                <select name="adults" className="search_content__input">
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                    <option>05</option>
                                    <option>06</option>
                                </select>
                            </div>
                            <div className="search_content__item">
                                <div>Trẻ em</div>
                                <select name="children" className="search_content__input">
                                    <option>0</option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                    <option>05</option>
                                    <option>06</option>
                                </select>
                            </div>
                            <button className="button search_content__button">Tìm kiếm <span></span><span></span><span></span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="offers">
                <div className="box offers__box1">
                    <div className="offers_sorting_container">
                        <ul className="offers_sorting">
                            <li id="offer_1">
                                <span className="sorting_text">Giá</span>
                                <i className="fas fa-angle-down"></i>
                                <ul id="offer_box_1" className="animated fadeInUp">
                                    <li className="sort_btn"><span>Hiện tất cả</span></li>
                                    <li className="sort_btn"><span>Tăng dần</span></li>
                                    <li className="sort_btn"><span>Giảm dần</span></li>
                                </ul>
                            </li>
                            <li id="offer_2">
                                <span className="sorting_text">Thứ tự</span>
                                <i className="fas fa-angle-down"></i>
                                <ul id="offer_box_2">
                                    <li className="sort_btn"><span>Mặc định</span></li>
                                    <li className="sort_btn"><span>Bảng chữ cái</span></li>
                                </ul>
                            </li>
                            <li id="offer_3">
                                <span className="sorting_text">Sao</span>
                                <i className="fas fa-angle-down"></i>
                                <ul id="offer_box_3">
                                    <li className="filter_btn" data-filter="*"><span>Hiện tất cả</span></li>
                                    <li className="sort_btn"><span>Giảm dần</span></li>
                                    <li className="filter_btn" data-filter=".rating_3"><span>3</span></li>
                                    <li className="filter_btn" data-filter=".rating_4"><span>4</span></li>
                                    <li className="filter_btn" data-filter=".rating_5"><span>5</span></li>
                                </ul>
                            </li>
                            <li id="offer_4">
                                <span className="sorting_text">Khoảng cách</span>
                                <i className="fas fa-angle-down"></i>
                                <ul id="offer_box_4">
                                    <li className="num_sorting_btn"><span>50Km</span></li>
                                    <li className="num_sorting_btn"><span>100Km</span></li>
                                    <li className="num_sorting_btn"><span>200Km</span></li>
                                </ul>
                            </li>
                            <li id="offer_5">
                                <span className="sorting_text">Đánh giá</span>
                                <i className="fas fa-angle-down"></i>
                                <ul id="offer_box_5">
                                    <li className="num_sorting_btn"><span>Very Good</span></li>
                                    <li className="num_sorting_btn"><span>Good</span></li>
                                    <li className="num_sorting_btn"><span>Medium</span></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="box offers__box2">
                    <div className="offers_grid" style={{ position: "relative" }}>
                        {
                            intros.map((item, index) => {
                                if (index < 4) {
                                    return (<>
                                        <div className="offers_item2">
                                            <div className="offers_image f_image">

                                                <div className="offers_image_background"
                                                    style={{ backgroundImage: `url(${item.image})` }}>

                                                </div>
                                                <div className="offers_name"><a href="#">{item.name}</a></div>
                                            </div>
                                            <div className="offers_content">
                                                <div className="offers_price">{item.price}</div>
                                                <div className="rating rating_4 offers_rating" data-rating="4">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <p className="offers_text">{item.description}</p>
                                                <div className="offers_icons">
                                                    {/* <ul className="offers_icons_list">
                                                        <li className="offers_icons_item"><img src="styles/images/post.png" alt="" /></li>
                                                        <li className="offers_icons_item"><img src="styles/images/compass.png" alt="" /></li>
                                                        <li className="offers_icons_item"><img src="styles/images/bicycle.png" alt="" /></li>
                                                        <li className="offers_icons_item"><img src="styles/images/sailboat.png" alt="" /></li>
                                                    </ul> */}
                                                </div>
                                                <div className="button book_button"><a href="#">book<span></span><span></span><span></span></a>
                                                </div>
                                                <div className="offer_reviews">
                                                    <div className="offer_reviews_content">
                                                        <div className="offer_reviews_title">very good</div>
                                                        <div className="offer_reviews_subtitle">100 lượt xem</div>
                                                    </div>
                                                    <div className="offer_reviews_rating" style={{ textAlign: "center" }}>{item.star}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </>)
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Offers;