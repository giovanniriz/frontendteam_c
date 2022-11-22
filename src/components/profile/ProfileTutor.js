import React, { useState, useEffect } from "react";
import user2 from "../../assets/user2.jpg";
import { useSelector } from "react-redux";
import { updateProfileTutor } from "../../userService/UpdateUserService";
import "./profileTutor.css";

function ProfileTutor() {
  const [name, setName] = useState("");
  const [emails, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [abouts, setAbouts] = useState("");
  const [link, setLink] = useState();
  const [selectedFile, setSelectedFile] = useState("");
  const [preview, setPreview] = useState();
  const [regisSkillsTutor, setRegisSkillsTutor] = useState("Please Select");

  const { fullname, email, about, profile_pic } = useSelector(
    (state) => state.loginTutorReducer
  );
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const updateHandler = (e) => {
    const store = window.localStorage;
    updateProfileTutor(name, emails, password, abouts, regisSkillsTutor, link)
      .then((response) => {
        console.log(response);
        store.setItem("emailTutor", response.data.email);
        store.setItem("fullnameTutor", response.data.fullname);
        store.setItem("aboutTutor", response.data.about);
        store.setItem("skillsTutor", response.data.skills);
        store.setItem("profile_picTutor", response.data.profile_pic);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(link);
  };
  return (
    <div className="profile-dashboard-container">
      <h5 className="profile-setting-title-tutor">Profile</h5>
      <div className="profile-setting-con">
        <img
          className="profile-picturese"
          src={selectedFile !== "" ? preview : profile_pic}
          alt="user2"
        />
        <div className="garis-tengah"></div>
        <div>
          <div className="profile-setting-nameT">
            <p>
              Name <span>*</span>
            </p>
            <input
              value={name}
              className="input-profile-setting"
              type="text"
              placeholder="input new name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="profile-setting-linkT">
          <p>About Me</p>
          <textarea
            value={abouts}
            className="input-about-setting"
            type="text"
            placeholder="input new about"
            onChange={(e) => setAbouts(e.target.value)}
          />
        </div>
      </div>
      <h4 className="sett-name">{fullname}</h4>
      <h6 className="sett-email">{email}</h6>

      <div className="profile-setting-photo">
        <label className="custom-filess" class="file-label" for="input-file">
          Profile Picture:
        </label>
        <br />
        <input
          multiple="multiple"
          // value={selectedFile}
          name="attachment[]"
          className="input-profile-photo"
          type="file"
          accept="image/*"
          onChange={onSelectFile}
        />
      </div>
      {/* <img className="profile-picturePr" src={preview} alt="asd" /> */}

      <div className="profile-setting-emailT">
        <p>
          Email <span>*</span>
        </p>
        <input
          value={emails}
          className="input-profile-setting"
          type="text"
          placeholder="input new email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="profile-setting-passwordT">
        <p>
          Password <span>*</span>
        </p>
        <input
          value={password}
          className="input-profile-setting"
          type="password"
          placeholder="*******"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="dash-skills">
        <p className="dash-skill-title">Skills</p>
        <select
          onChange={(e) => setRegisSkillsTutor(e.target.value)}
          className="dropd"
        >
          <option value="none" selected disabled hidden>
            Please Select...
          </option>
          <option value="Novice">Novice</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advance">Advance</option>
        </select>
      </div>

      <button
        onClick={() => {
          updateHandler();
        }}
        className="btn-save-profile"
      >
        Save
      </button>
    </div>
  );
}

export default ProfileTutor;
