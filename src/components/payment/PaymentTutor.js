import React, { useEffect, useState } from "react";
import "./paymentTutor.css";
import ft from "../../assets/user2.jpg";
import axios from "axios";
import moment from "moment";

function PaymentTutor() {
  const [paymentDetails, setPaymentDetails] = useState([]);

  useEffect(() => {
    const store = window.localStorage;
    const token = store.getItem("tokenTutor");
    axios
      .get("https://tutorins.herokuapp.com/api/v1/booking/tutor", {
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
        <p className="payment-tutor-nav">Student Name</p>
        <p className="payment-course-nav">Course Subject</p>
        <p className="payment-course-date-nav">Course Date</p>
        <p className="payment-date-nav">Payment Date</p>
        <p className="payment-price-nav">Price</p>
      </div>
      <div className="garisbawah"></div>
      {paymentDetails.map((e) => {
        return (
          <div>
            <div className="payment-detail-tutor">
              <div className="llop">
                <img
                  className="payment-ft-tutor"
                  src={e.student_id && e.student_id.profile_pic}
                  alt="ft"
                ></img>
              </div>
              <div className="llop">
                <p className="payment-tutor">
                  {e.student_id && e.student_id.fullname}
                </p>
              </div>
              <div className="llop">
                <p className="payment-courses">
                  {e.course_id && e.course_id.subject}
                </p>
              </div>
              <div className="llop">
                <p className="payment-course-date">
                  {moment(e.date).format("LL")}
                </p>
              </div>
              <div className="llop">
                <p className="payment-date">
                  {moment(e.createdAt).format("LLL")}
                </p>
              </div>
              <div className="llop">
                <p className="payment-price">Rp. {e.price},-</p>
              </div>
            </div>
            <div className="garisbawah1"></div>
          </div>
        );
      })}
    </>
  );
}

export default PaymentTutor;
