import React, { useEffect, useState } from "react";
import "./favorite.css";
import lope from "../../assets/lope.png";
import axios from "axios";
import moment from "moment";

function Favorite() {
  const [favoDetails, setFavoDetails] = useState([]);

  useEffect(() => {
    const store = window.localStorage;
    const token = store.getItem("token");
    axios
      .get("https://tutorins.herokuapp.com/api/v1/favorite/student", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setFavoDetails(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <p className="my-fa">My Favorite</p>
      <div className="favo-main">
        {favoDetails.map((e) => {
          return (
            <div className="favo-container">
              <div>
                <img
                  className="favo-cover"
                  src={e.course_id && e.course_id.cover_img}
                  alt="cover"
                />

                <div>
                  <p className="favo-name-tutor">
                    {e.course_id && e.course_id.tutor_name}
                  </p>
                  <p className="favo-kelas">
                    {e.course_id && e.course_id.subject}
                  </p>
                </div>
                <div>
                  <p className="favo-star">☆ 4.8</p>
                  <p className="favo-review">49 reviews</p>
                </div>

                <div className="favo-bawah-detail">
                  <div>
                    <p className="favo-start-from">Start from</p>
                    <p className="favo-harga">
                      Rp. {e.course_id && e.course_id.regular_price}/hour
                    </p>
                  </div>
                  <div>
                    <img className="favo-lope" src={lope} alt="lope" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favorite;
