import React, { useState, useEffect } from "react";
import "./dashboard.css";
import user2 from "../../assets/user2.jpg";
import pensil from "../../assets/pensil.png";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import gelas from "../../assets/Vector.jpg";
import note from "../../assets/note.jpg";
import rev from "../../assets/pensil-re.jpg";
import axios from "axios";
import moment from "moment";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Modal from "react-modal";
import ReactStars from "react-rating-stars-component";
import { ReviewUser } from "../../userService/userService";

function Dashboard() {
  const [modalRev, setModalRev] = useState(false);
  const [tutorList, setTutorList] = useState("");
  const [course, setCourse] = useState([]);
  const [rating, setRating] = useState(0);
  const [revi, setRevi] = useState("");
  const [id, setId] = useState("");
  const history = useHistory();

  const { fullname, profile_pic } = useSelector(
    (state) => state.loginStudentReducer
  );
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
        setCourse(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setCourse]);

  const handleOpen = (e) => {
    setTutorList(e);
    setModalRev(true);
  };

  const logoutHandler = () => {
    history.push("/");
    const store = window.localStorage;
    store.clear("");
    window.location.reload();
  };

  const clientId =
    "585176774732-5bobodj7r8hirdrhfmml18vsuld2pu2j.apps.googleusercontent.com";

  const onSignoutSuccess = () => {
    history.push("/");
    const store = window.localStorage;
    store.clear("");
    window.location.reload();
  };

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const saveHandler = (e) => {
    ReviewUser(rating, revi, id)
      .then((response) => {
        console.log(response);
        alert("your review have been recorded");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(rating, "raa");
  console.log(revi, "raa");
  console.log(id, "ididi");

  return (
    <>
      <div className="dashboard-main">
        <div className="dashboard-container">
          <div className="dashboard-profile">
            <div>
              <img className="foto-user" src={profile_pic} alt="user2" />
            </div>
            <div className="welcome-con">
              Welcome!
              {fullname === "" ? (
                <p>Guest</p>
              ) : (
                <p className="welcome-name">{fullname}</p>
              )}
            </div>
            <div>
              <img
                onClick={() => history.push("/dashboard/profile")}
                className="pensil"
                src={pensil}
                alt="pensil"
              />
            </div>
          </div>
          {/* <button className="btn-dashboard-logout" onClick={logoutHandler}> */}
          <GoogleLogout
            className="goo-log"
            clientId={clientId}
            buttonText="Sign Out"
            onLogoutSuccess={onSignoutSuccess}
          ></GoogleLogout>{" "}
          {/* </button> */}
        </div>
        <p className="dashboard-mycourse"> My Course</p>
        <div className="flexnxx">
          {course.map((e) => {
            return (
              <div className="dashboardA">
                <div key={e._id} className="dashboard-course-container">
                  <div className="detail-dashboard-mycourse">
                    <img
                      className="dashboard-foto-tutor"
                      src={e.tutor_id && e.tutor_id.profile_pic}
                      alt="a"
                    />
                    <p className="dbc">{e.tutor_id && e.tutor_id.fullname}</p>
                    <div className="dbd">
                      <img className="dashboard-note" src={note} alt="note" />
                      <p className="dba">{moment(e.date).format("LLL")}</p>
                    </div>
                    <div className="dbd">
                      <img
                        className="dashboard-vektor"
                        src={gelas}
                        alt="note"
                      />
                      <p className="dba">{e.duration} Hours</p>
                    </div>
                    <div className="dashboard-write-review">
                      <img className="rev" src={rev} alt="rev" />
                      <p
                        onClick={() => {
                          handleOpen(e);
                          setId(e.course_id && e.course_id._id);
                        }}
                        className="dbz"
                      >
                        Write Review
                      </p>
                    </div>

                    <div className="dashboard-category">
                      <p className="dbz">
                        {e.course_id && e.course_id.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal isOpen={modalRev} onRequestClose={() => setModalRev(false)}>
        <>
          <div className="modal-det">
            <img
              className="modal-ft"
              src={tutorList.tutor_id && tutorList.tutor_id.profile_pic}
              alt="ft-tutor"
            />
            <p className="modal-nm">
              {tutorList.tutor_id && tutorList.tutor_id.fullname}
            </p>
          </div>

          <div className="modal-ra">
            <p className="modal-wh">What do you think about this tutor?</p>
            <ReactStars
              value={rating}
              count={5}
              onChange={ratingChanged}
              size={40}
              activeColor="#ffd700"
            />
            <p className="modal-yo">Your Rating is: {rating}</p>
            <textarea
              value={revi}
              onChange={(e) => {
                setRevi(e.target.value);
              }}
              type="text"
              className="modal-input-cour"
              placeholder="Write your Review Here"
            />
            <button className="modal-sa" onClick={() => saveHandler()}>
              Save
            </button>
          </div>
        </>
      </Modal>
    </>
  );
}

export default Dashboard;
