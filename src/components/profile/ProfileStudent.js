import React, { useState, useEffect } from "react";
import user2 from "../../assets/user2.jpg";
import "./profileStudent.css";
import { useSelector } from "react-redux";

import { updateProfileStudent } from "../../userService/UpdateUserService";

function ProfileStudent() {
  const [name, setName] = useState("");
  const [emails, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [link, setLink] = useState();
  const [selectedFile, setSelectedFile] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const { fullname, email, profile_pic, role } = useSelector(
    (state) => state.loginStudentReducer
  );

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const updateHandler = (e) => {
    const store = window.localStorage;
    updateProfileStudent(name, emails, password, selectedFile)
      .then((response) => {
        console.log(response);
        store.setItem("email", response.data.email);
        store.setItem("fullname", response.data.fullname);
        store.setItem("profile_pic", response.data.profile_pic);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(selectedFile, "selected");
  console.log(preview, "preview");
  return (
    <div className="profile-dashboard-container">
      <h5 className="profile-setting-title">Profile</h5>
      <div className="profile-setting-con">
        <img
          className="profile-picturese"
          src={selectedFile !== "" ? preview : profile_pic}
          alt="user2"
        />

        <div className="garis-tengah"></div>

        <div className="profile-setting-name">
          <p>
            Name <span>*</span>
          </p>
          <input
            value={name}
            className="input-profile-setting"
            type="text"
            placeholder="insert new name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="profile-setting-email">
        <p>
          Email <span>*</span>
        </p>
        <input
          value={emails}
          className="input-profile-setting"
          type="text"
          placeholder="insert new email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <h4 className="sett-name">{fullname}</h4>
      <h6 className="sett-email">{email}</h6>

      <div className="profile-setting-password">
        <p>
          Password <span>*</span>
        </p>
        <input
          value={password}
          className="input-profile-setting"
          type="password"
          placeholder="insert new password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="upload-btn-wrapper">
        <button className="profile-upload-stud">Upload Picture</button>
        <br />
        <input
          // multiple="multiple"
          // value={selectedFile}
          // name="myfile"
          className="input-profile-photo"
          type="file"
          accept="image/*"
          onChange={onSelectFile}
        />
      </div>
      {/* <img className="profile-picturePr" src={preview} alt="asd" /> */}
      <div>
        <button onClick={() => updateHandler()} className="btn-save-profile">
          Save
        </button>
      </div>
    </div>
  );
}

export default ProfileStudent;
