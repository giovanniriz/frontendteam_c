import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import SearchBar from "../searchbar/SearchBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./detailbrowse.css";
import { useHistory } from "react-router-dom";
import logg from "../../assets/tutorin.png";
import iii from "../../assets/tutorin1.png";
import tik from "../../assets/png.png";

const DetailBrowse = ({ match }) => {
  const [detail, setDetail] = useState({});
  const [detail1, setDetail1] = useState({});
  const [detail2, setDetail2] = useState({});

  useEffect(() => {
    fetchCourseById();
  }, []);

  const fetchCourseById = async () => {
    const store = window.localStorage;
    const fetchCourseById = await fetch(
      `https://tutorins.herokuapp.com/api/v1/course/${match.params.id}`
    );
    const detail = await fetchCourseById.json();
    setDetail(detail.data);
    setDetail1(detail.data.level_id);
    setDetail2(detail.data.tutor_id);
    store.setItem("foto", detail.data.tutor_id.profile_pic);
    store.setItem("nama", detail.data.tutor_id.fullname);
    store.setItem("cate", detail.data.category);
    console.log(detail, "this is details data");
  };

  let history = useHistory();

  function handleClick() {
    history.push("/enrollbooking");
  }

  const store = window.localStorage;

  return (
    <div className="header-banner" className="">
      <div
        style={{
          backgroundImage: `url(./bgr.jpeg)`,
        }}
      ></div>
      <img className="bgr"></img>
      <div className="header-h1">
        <img
          onClick={() => history.push("/")}
          className="logg8"
          src={logg}
          alt="logg"
        />
        <img className="logg9" src={iii} alt="logg" />
        <img className="logg10" src={tik} alt="logg" />
      </div>
      <div className="searchbar">
        <SearchBar placeholder="Search by a tutor, category or subject" />
      </div>
      <div className="header-left">
        <div className="header-left-photo">
          {" "}
          <img
            className="detail-foto-tutor"
            src={detail.tutor_id && detail.tutor_id.profile_pic}
            alt="cov"
          />
        </div>
        <div className="box-model-category">
          <div className="category">Category</div>
          <div className="design">{detail.category}</div>
        </div>
        <div className="box-model-subject">
          <div className="subject">Subject</div>
          <div className="fashion-design">{detail.subject}</div>
        </div>
        <div className="box-model-level">
          <div className="level">level</div>
          <div className="tutor-level">
            {detail.level_id && detail.level_id.name}
          </div>
        </div>
        <div className="payment-option">
          <div className="payment-course">Course fee</div>
          <div className="radio-button">
            <form>
              <input
                type="radio"
                value="regular"
                id="regular"
                name="price"
                onClick={() =>
                  store.setItem("premium_price", detail.regular_price)
                }
              />
              <label for="regular">
                <span className="span-1">Regular</span>
                <span className="span-2">
                  You only have access to chat room
                </span>
                <span className="span-3">Rp. {detail.regular_price}/hour</span>
              </label>
              <div className="radio-button-diff">
                <input
                  type="radio"
                  value="premium"
                  id="premium"
                  name="price"
                  onClick={() =>
                    store.setItem("premium_price", detail.premium_price)
                  }
                />
                <label for="premium">
                  <span className="span-4">Premium</span>
                  <span className="span-5">
                    You can learn using video conference
                  </span>
                  <span className="span-6">
                    Rp. {detail.premium_price}/hour
                  </span>
                </label>
              </div>
            </form>
            <button onClick={handleClick} className="enroll-button">
              <span>Enroll</span>
            </button>
          </div>
        </div>
      </div>
      <div className="header-content">
        <h3 className="name-tutu">{detail.tutor_name}</h3>
        <div className="star-content">⭐</div>
        <div className="rating-content">4.8</div>
        <div className="review-content">49 reviews</div>
        <div className="about-content">{detail2.about}</div>
        <div className="skills-content">Skills</div>
        <div className="skills-description-content">
          Fashion Design, Graphic Design and Illustration
        </div>
        <div className="achievement-content">Achievement</div>
        <div className="achievement-description-content-1">
          CFDA Fashion Award 2020
        </div>
        <div className="achievement-description-content-2">
          Paris Fashion Week 2019
        </div>
      </div>
      <div className="about-this-course">
        <div className="about-this-course-content">About this course</div>
        <div className="about-this-course-description">
          {detail.description}
        </div>
      </div>
      <div className="reviews">
        <div className="reviews-value">Reviews(49)</div>
        <div className="reviews-detail">
          <div className="reviews-line"></div>
          <div className="reviews-detail-photo"></div>
          <div className="reviews-detail-name">Yuki</div>
          <div className="reviews-detail-star">⭐⭐⭐⭐⭐</div>
          <div className="reviews-detail-time">12 minutes ago</div>
          <div className="reviews-detail-review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc
            pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi
            sed sit. In faucibus leo etiam cras elit malesuada augue. In
            faucibus leo etiam cras elit malesuada augue
          </div>
        </div>
        <div className="reviews-detail-1">
          <div className="reviews-line"></div>
          <div className="reviews-detail-photo"></div>
          <div className="reviews-detail-name">Yuki</div>
          <div className="reviews-detail-star">⭐⭐⭐⭐⭐</div>
          <div className="reviews-detail-time">12 minutes ago</div>
          <div className="reviews-detail-review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc
            pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi
            sed sit. In faucibus leo etiam cras elit malesuada augue. In
            faucibus leo etiam cras elit malesuada augue
          </div>
        </div>
        <div className="reviews-detail-2">
          <div className="reviews-line"></div>
          <div className="reviews-detail-photo"></div>
          <div className="reviews-detail-name">Yuki</div>
          <div className="reviews-detail-star">⭐⭐⭐⭐⭐</div>
          <div className="reviews-detail-time">12 minutes ago</div>
          <div className="reviews-detail-review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc
            pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi
            sed sit. In faucibus leo etiam cras elit malesuada augue. In
            faucibus leo etiam cras elit malesuada augue
          </div>
        </div>
        <div className="reviews-detail-3">
          <div className="reviews-line"></div>
          <div className="reviews-detail-photo"></div>
          <div className="reviews-detail-name">Yuki</div>
          <div className="reviews-detail-star">⭐⭐⭐⭐⭐</div>
          <div className="reviews-detail-time">12 minutes ago</div>
          <div className="reviews-detail-review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc
            pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi
            sed sit. In faucibus leo etiam cras elit malesuada augue. In
            faucibus leo etiam cras elit malesuada augue
          </div>
        </div>
        <div className="reviews-detail-4">
          <div className="reviews-line"></div>
          <div className="reviews-detail-photo"></div>
          <div className="reviews-detail-name">Yuki</div>
          <div className="reviews-detail-star">⭐⭐⭐⭐⭐</div>
          <div className="reviews-detail-time">12 minutes ago</div>
          <div className="reviews-detail-review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc
            pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi
            sed sit. In faucibus leo etiam cras elit malesuada augue. In
            faucibus leo etiam cras elit malesuada augue
          </div>
        </div>
        <div className="reviews-detail-5">
          <div className="reviews-line"></div>
          <div className="reviews-detail-photo"></div>
          <div className="reviews-detail-name">Yuki</div>
          <div className="reviews-detail-star">⭐⭐⭐⭐⭐</div>
          <div className="reviews-detail-time">12 minutes ago</div>
          <div className="reviews-detail-review">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc
            pellentesque enim ultrices nunc. Pretium massa, vel viverra id mi
            sed sit. In faucibus leo etiam cras elit malesuada augue. In
            faucibus leo etiam cras elit malesuada augue
          </div>
        </div>
      </div>
      <div className="related-course">
        <div className="text-course">Related Course</div>
        <div className="main-course-1">
          <h1>Bianca</h1>
          <p>Korean</p>
          <div className="picture-content-1-star">⭐</div>
          <div className="rating">4.8</div>
          <div className="category">49 Reviews</div>
          <div className="start-from">Start from</div>
          <div className="price">Rp. 50.000/hour</div>
          <div className="love">
            <svg
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0453 19.638C-7.51491 8.38255 6.17748 -3.83596 12.0453 3.89026C17.9138 -3.83597 31.6062 8.38255 12.0453 19.638Z"
                stroke="#F1B7EF"
                stroke-width="1.8"
              />
            </svg>
          </div>
        </div>
        <div className="main-course-2">
          <h1>Bianca</h1>
          <p>Korean</p>
          <div className="picture-content-1-star">⭐</div>
          <div className="rating">4.8</div>
          <div className="category">49 Reviews</div>
          <div className="start-from">Start from</div>
          <div className="price">Rp. 50.000/hour</div>
          <div className="love">
            <svg
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0453 19.638C-7.51491 8.38255 6.17748 -3.83596 12.0453 3.89026C17.9138 -3.83597 31.6062 8.38255 12.0453 19.638Z"
                stroke="#F1B7EF"
                stroke-width="1.8"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default DetailBrowse;
