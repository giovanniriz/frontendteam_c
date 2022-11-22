import React, { useState, useEffect } from "react";
import "./createCourse.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { createCourseServ } from "../../userService/createCourseService";

function CreateCourse() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [regular, setRegular] = useState(0);
  const [premium, setPremium] = useState(0);
  const [coverImg, serCoverImg] = useState();
  const [selectedFile, setSelectedFile] = useState("");
  const [preview, setPreview] = useState();

  const { fullname } = useSelector((state) => state.loginTutorReducer);

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

  const createHandler = () => {
    createCourseServ(
      selectedFile,
      title,
      category,
      subject,
      level,
      text,
      regular,
      premium
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="create-course-container">
      <div>
        <p className="create-course-title">New Course</p>
        <div className="create-course-upload-pic">
          <button className="create-course-add-image">Add Cover Image</button>
          <input onChange={onSelectFile} name="myF" type="file"></input>
        </div>
        <p className="create-max-file">
          Max. size 5 MB. Supported format .png/jpg/jpeg
        </p>
        <div className="create-course-level">
          <label>Title</label>
          <br />
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="create-course-input-title"
            type="text"
            placeholder="Input Title Here"
          />
        </div>
        <div className="create-course-level">
          <label>Level</label>
          <br />
          <select
            onChange={(e) => setLevel(e.target.value)}
            className="create-course-input-level"
            type="text"
          >
            <option value="none" selected disabled hidden>
              Please Select...{" "}
            </option>
            <option value="60d6ea2d7bf5911ea1d737f0">Novice</option>
            <option value="60d6ea807bf5911ea1d737f3">Intermediate</option>
            <option value="60d6ea8e7bf5911ea1d737f6">Advanced</option>
            <option value="60d6ea937bf5911ea1d737f8">Expert</option>
          </select>
        </div>
        <div className="create-course-div-flex">
          <div className="create-course-category">
            <label>Category</label>
            <br />
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="create-course-input-category"
              type="text"
            >
              <option value="none" selected disabled hidden>
                Please Select...{" "}
              </option>
              <option value="Music">Music</option>
              <option value="Programming">Programming</option>
              <option value="Language">Language</option>
              <option value="Design & Style">Design & Style</option>
            </select>
          </div>
          <div className="create-course-subject">
            <label>Subject</label>
            <br />
            <select
              onChange={(e) => setSubject(e.target.value)}
              className="create-course-input-subject"
              type="text"
            >
              <option value="none" selected disabled hidden>
                Please Select...{" "}
              </option>
              <option value="Violin">Violin</option>
              <option value="Guitar">Guitar</option>
              <option value="Design">Design</option>
            </select>
          </div>
        </div>
        <div className="create-course-texteditor">
          <label>Description</label>
          <CKEditor
            editor={ClassicEditor}
            data={text}
            onChange={(event, editor) => {
              const data = editor.getData();
              setText(data);
            }}
          />
        </div>

        <div>
          <label>Price</label>
          <div className="ook">
            <div className="create-course-regular">
              <p>Regular</p>
              <p className="create-course-p-price">
                Student will only have access to chat room
              </p>
              <input
                onChange={(e) => setRegular(e.target.value)}
                className="create-course-input-regular"
                type="text"
                placeholder="250.000"
              />
            </div>
            <div className="create-course-premium">
              <p>Premium(optional)</p>
              <p className="create-course-p-price">
                You can set up video conference link
              </p>
              <input
                onChange={(e) => setPremium(e.target.value)}
                className="create-course-input-premium"
                type="text"
                placeholder="500.000"
              />
            </div>
          </div>
        </div>
        <button onClick={() => createHandler()} className="create-course-save">
          Create Course
        </button>
      </div>
      <div>
        <div className="create-course-preview-con">
          <p className="create-course-preview-titless">Preview</p>
          <img className="create-course-preview-photo" src={preview} />
          <p className="create-course-name-tutor">{fullname}</p>
          <p className="create-course-preview-subject">{subject}</p>
          {/* <p className="create-course-preview-description">{parse(text)}</p> */}
          <p className="create-course-preview-start">start from</p>
          <p className="create-course-preview-regular">Rp. {regular}/h</p>
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;
