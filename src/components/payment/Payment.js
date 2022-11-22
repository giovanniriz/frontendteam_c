import React, { useState, useEffect } from "react";
import "./payment.css";
import ft from "../../assets/user1.jpg";
import axios from "axios";
import moment from "moment";

function Payment() {
  const [paymentDetails, setPaymentDetails] = useState([]);

  useEffect(() => {
    const store = window.localStorage;
    const token = store.getItem("token");
    axios
      .get("https://tutorins.herokuapp.com/api/v1/booking/student", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setPaymentDetails(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <p className="payment-title">Payment</p>
      <div className="payment-nav">
        <p className="payment-tutor-nav">Tutor Name</p>
        <p className="payment-course-navs">Course Subject</p>
        <p className="payment-course-date-navs">Course Date</p>
        <p className="payment-date-navs">Payment Date</p>
        <p className="payment-price-navs">Price</p>
      </div>
      {paymentDetails.map((e) => {
        return (
          <div className="pay-stud">
            <div className="garisbawah"></div>
            <div className="paymentSTD-detail-tutor">
              <div className="kkootak">
                <img
                  className="payment-student-foto-tutor"
                  src={e.tutor_id && e.tutor_id.profile_pic}
                  alt="ft"
                ></img>
              </div>
              <div className="kkootak">
                <p className="payment-student-tutor">
                  {e.tutor_id && e.tutor_id.fullname}
                </p>
              </div>

              <div className="kkootak">
                {" "}
                <p className="paymentSTD-courses">
                  {e.course_id && e.course_id.subject}
                </p>
              </div>
              <div className="kkootak">
                <p className="paymentSTD-course-date">
                  {moment(e.date).format("LL")}
                </p>
              </div>
              <div className="kkootak">
                <p className="paymentSTD-date">
                  {moment(e.createdAt).format("LLL")}
                </p>
              </div>
              <div className="kkootak">
                <p className="paymentSTD-price">Rp. {e.price},-</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Payment;
