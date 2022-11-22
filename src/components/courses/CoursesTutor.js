import React, { useEffect, useState } from "react";
import "./course.css";
import ft from "../../assets/cibai3.png";
import axios from "axios";
import pen from "../../assets/pensil.png";
import Modal from "react-modal";

function CoursesTutor() {
  const [courseDetails, setCourseDetails] = useState([]);
  const [studentModal, setStudentModal] = useState(false);
  const [studentList, setStudentList] = useState("");

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
        setCourseDetails(response.data.data);
        // setStudentList(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOpenModal = (e) => {
    setStudentList(e);
    setStudentModal(true);
  };

  console.log(studentList, "listsss");
  console.log(courseDetails, "coucou");

  return (
    <>
      <p className="courses-titlee">My Course</p>
      <div className="course-ba">
        {courseDetails.map((e, index) => {
          return (
            <div key={index} className="course-c">
              <div className="course-card">
                <div className="course-detail">
                  <img
                    className="ft1"
                    src={e.course_id && e.course_id.cover_img}
                    alt="ft"
                  />
                  <div>
                    <div className="course-cat">
                      <div className="course-cate">
                        <p>{e.course_id && e.course_id.category}</p>
                      </div>
                      <div className="course-level">
                        <p className="ll">{e.tutor_id && e.tutor_id.skills}</p>
                      </div>
                    </div>
                    <div className="course-rat">
                      <p className="cr-rat">⭐ 4.8</p>
                      <p className="cr-rv">49 Review</p>
                    </div>
                    <div>
                      <p className="cr-pr">Price</p>
                      <p className="cr-cl">
                        Regular: Rp. {e.course_id && e.course_id.regular_price}
                        /h
                      </p>
                      <p className="cr-cl">
                        Premium: Rp. {e.course_id && e.course_id.premium_price}
                        /h
                      </p>
                    </div>
                  </div>
                </div>
                <div className="course-tbl">
                  <div className="course-edit">
                    <p className="kk"> ✎ Edit Course</p>
                  </div>
                  <div
                    onClick={() => {
                      handleOpenModal(e);
                    }}
                    className="course-student-list"
                  >
                    <p className="kj">🧑🏻‍🤝‍🧑🏻Student List</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <Modal
          isOpen={studentModal}
          onRequestClose={() => setStudentModal(false)}
        >
          <div>
            <div className="modal-nav">
              <p className="modal-pics">Student's Picture</p>
              <p className="modal-names">Student's Name</p>
            </div>
            <div className="modal-gar"></div>
            <div className="modal-det">
              <img
                className="modal-user-pic"
                src={
                  studentList.student_id && studentList.student_id.profile_pic
                }
                alt="us"
              />
              <p className="modal-nam">
                {studentList.student_id && studentList.student_id.fullname}
              </p>
            </div>
            <div className="modal-gar"></div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default CoursesTutor;
