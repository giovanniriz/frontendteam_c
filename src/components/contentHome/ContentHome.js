import React, { useState, useEffect } from "react";
import "./contentHome.css";
import photo from "../../assets/topic-pict.jpg";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import axios from "axios";

export default function ContentHome() {
  const [content1, setContent1] = useState({});
  const [content2, setContent2] = useState({});
  const [content3, setContent3] = useState({});
  const [categ, setCateg] = useState([]);

  useEffect(() => {
    axios
      .get("https://tutorins.herokuapp.com/api/v1/home")
      .then((response) => {
        console.log(response.data.data.courses);
        setContent1(response.data.data.courses[0]);
        setContent2(response.data.data.courses[1]);
        setContent3(response.data.data.courses[2]);
        setCateg(response.data.data.category);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setContent1]);

  return (
    <div className="content-home">
      <div className="title-main">
        <h3 className="title1">Learn With The Expert</h3>
        <p className="title2">
          Leo vulputate ligula quam sit interdum in. Accumsan in
          <br /> blandit sem non nibh mattis erat.
        </p>
      </div>
      {/* {content1.map((e) => {
        return <div></div>;
      })} */}
      <div className="card-container">
        <div className="card-left">
          <div className="card-front">
            <div className="con-tainer">
              <img className="user1" src={content1.cover_img} alt="user1" />
              <div className="text-block">
                <h5 className="ghg">{content1.tutor_name}</h5>
                <p className="gjg">{content1.subject}</p>
              </div>
              <div className="text-block">
                <h5 className="ghg4">⭐ 4.8</h5>
                <p className="gjg4">49 reviews</p>
              </div>
            </div>
            <p className="start-froms">Start from</p>
            <p className="harga">Rp. {content1.premium_price}/hour</p>
          </div>
          <p className="title-card">{content1.category}</p>
        </div>
        <div className="card-middle">
          <div className="card-front-middle">
            <img className="user2" src={content2.cover_img} alt="user1" />
            <div className="text-block">
              <h5 className="ghg1">{content2.tutor_name}</h5>
              <p className="gjg1">{content2.subject}</p>
            </div>
            <div className="text-block">
              <h5 className="ghg6">⭐ 4.8</h5>
              <p className="gjg6">49 reviews</p>
            </div>
            <p className="start-from-middle">Start from</p>
            <p className="harga-tengah">Rp. {content2.premium_price}/hour</p>

            <div className="card-back-mid">
              <p className="title-card-mid">{content2.category}</p>
              <p className="title-card-mid-detail">{content2.subject}</p>
            </div>
          </div>
        </div>

        <div className="card-left">
          <div className="card-front1">
            <img className="user12" src={content3.cover_img} alt="user1" />
            <div className="text-block">
              <h5 className="ghg2">{content3.tutor_name}</h5>
              <p className="gjg2">{content3.subject}</p>
            </div>
            <div className="text-block">
              <h5 className="ghg5">⭐ 4.8</h5>
              <p className="gjg5">49 reviews</p>
            </div>
            <p className="start-froms">Start from</p>
            <p className="harga-kanan">Rp. {content3.premium_price}/hour</p>
          </div>
          <p className="title-card">{content2.category}</p>
        </div>
      </div>

      <div className="topic-container">
        <div className="topic">
          <p className="topic-title">
            Choose the best topic <br /> the most suit you
          </p>
          <p>
            {categ.map((e) => (
              <p>{e.name}</p>
            ))}
          </p>
        </div>
        <div className="topic-pict">
          <img className="pict" src={photo} alt="poto" />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
