import React from "react";
import pensil from "../../assets/pensil.png";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import user2 from "../../assets/user2.jpg";
import gelas from "../../assets/Vector.jpg";
import note from "../../assets/note.jpg";
import chat from "../../assets/gbr-chat.png";
import camera from "../../assets/gbr-camera.png";
import courses from "../../assets/courses1.png";
import "./dashboardTutor.css";

function DashboardCompTutor() {
  const history = useHistory();

  const { fullname, profile_pic } = useSelector(
    (state) => state.loginTutorReducer
  );

  const logoutHandler = () => {
    history.push("/");
    const store = window.localStorage;
    store.clear("");
    window.location.reload();
  };

  return (
    <>
      <div className="dash-container">
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
              onClick={() => history.push("/dashboardTutor/profile")}
              className="pensilT"
              src={pensil}
              alt="pensil"
            />
          </div>
        </div>
        <div className="dash-create-course">
          <img className="dash-gbr-course" src={courses} alt="cours" />
          <p
            onClick={() =>
              history.push("/dashboardTutor/courses/createCourses")
            }
            className="dash-create"
          >
            Create Courses{" "}
          </p>
        </div>
        <button className="dash-logout" onClick={logoutHandler}>
          {" "}
          Logout
        </button>
      </div>
      <p className="dash-tutor-title">Upcoming Lesson</p>
      <div className="dash-tutor-main">
        <div className="dash-pertama">
          <div className="dash-card">
            <p className="dash-role">Student</p>
            <img className="dash-card-pict" src={user2} alt="user1" />
            <div className="dash-card-subject">Fashion Design</div>
            <div className="dash-note">
              <img className="dash-noteP" src={note} alt="note" />
              <p className="dash-tgl">30 may 2021, 10:00 AM</p>
            </div>
            <div className="dash-waktu">
              <img className="dash-waktuP" src={gelas} alt="note" />
              <p className="dash-tgl">2 hours</p>
            </div>
            <div className="dash-tombol2">
              <div className="dash-start-lesson">
                <img className="dash-icon" src={chat} alt="chat" />
                <p className="dash-te">Start Lesson</p>
              </div>
              <div className="dash-add-conference">
                <img className="dash-icon" src={camera} alt="chat" />
                <p className="dash-te">Add conference link</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="dash-card">
            <p className="dash-role">Student</p>
            <img className="dash-card-pict" src={user2} alt="user1" />
            <div className="dash-card-subject">Fashion Design</div>
            <div className="dash-note">
              <img className="dash-noteP" src={note} alt="note" />
              <p className="dash-tgl">30 may 2021, 10:00 AM</p>
            </div>
            <div className="dash-waktu">
              <img className="dash-waktuP" src={gelas} alt="note" />
              <p className="dash-tgl">2 hours</p>
            </div>
            <div className="dash-tombol2">
              <div className="dash-start-lesson">
                <img className="dash-icon" src={chat} alt="chat" />
                <p className="dash-te">Start Lesson</p>
              </div>
              <div className="dash-add-conference">
                <img className="dash-icon" src={camera} alt="chat" />
                <p className="dash-te">Add conference link</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardCompTutor;
