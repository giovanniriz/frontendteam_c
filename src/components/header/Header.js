import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Modal1 from "react-modal";
import Modal2 from "react-modal";
import Modal3 from "react-modal";
import Modal4 from "react-modal";
import Modal5 from "react-modal";
import { Nav, NavDropdown } from "react-bootstrap";
import "./header.css";
import fotoGoogle from "../../assets/google.png";
import ceklis from "../../assets/ceklis.png";
import congrat from "../../assets/congrats.png";
import ling from "../../assets/ling.png";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import handleLoginStudent from "../../redux/action/loginStudentAction";
import { handleLoginTutor } from "../../redux/action/loginTutorAction";
import {
  loginStudent,
  loginTutor,
  loginStudentGoogle,
  loginTutorGoogle,
} from "../../userService/userService";
import {
  registrasiStudent,
  registrasiTutor,
} from "../../userService/userService";
import { updateProfileTutorHome } from "../../userService/UpdateUserService";
import axios from "axios";
import logg from "../../assets/tutorin.png";
import iii from "../../assets/tutorin1.png";
import tik from "../../assets/png.png";
import uus from "../../assets/user-pict.png";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const Header = () => {
  //login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailTutor, setEmailTutor] = useState("");
  const [passwordTutor, setPasswordTutor] = useState("");

  //regis student
  const [name, setName] = useState("");
  const [regisEmail, setRegisEmail] = useState("");
  const [regisPassword, setRegisPassword] = useState("");

  //regis tutor
  const [nameTutor, setNameTutor] = useState("");
  const [regisEmailTutor, setRegisEmailTutor] = useState("");
  const [regisPasswordTutor, setRegisPasswordTutor] = useState("");
  const [regisAboutTutor, setRegisAboutTutor] = useState("");
  const [regisSkillsTutor, setRegisSkillsTutor] = useState("Please Select");

  //modal
  const [loginModal, setLoginModal] = useState(false);
  const [regisStudentModal, setRegisStudentModal] = useState(false);
  const [regisTutorModal, setRegisTutorModal] = useState(false);
  const [regisTutorModal1, setRegisTutorModal1] = useState(false);
  const [regisTutorModal2, setRegisTutorModal2] = useState(false);
  const [loginModalTutor, setLoginModalTutor] = useState(false);

  const [logStatus, setLogStatus] = useState("");
  const [logVal, setLogVal] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [preview, setPreview] = useState("");
  const [googleStudent, setGoogleStudent] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  const store = window.localStorage;

  //=====================================
  // Login Google
  const clientId =
    "585176774732-5bobodj7r8hirdrhfmml18vsuld2pu2j.apps.googleusercontent.com";

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res);
    store.setItem("tokenId", res.tokenId);
    store.setItem("profile_pic", res.profileObj.imageUrl);
    const tokenId = store.getItem("tokenId");
    loginStudentGoogle(tokenId)
      .then((response) => {
        console.log(response, "ini respon google");
        store.setItem("role", response.data.role);
        store.setItem("fullname", response.data.fullname);
        store.setItem("email", response.data.email);
        store.setItem("_id", response.data._id);
        store.setItem("token", response.token);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onLoginSuccessTutor = (res) => {
    console.log("Login Success:", res);
    store.setItem("tokenId", res.tokenId);
    store.setItem("profile_picTutor", res.profileObj.imageUrl);
    const tokenId = store.getItem("tokenId");
    loginTutorGoogle(tokenId)
      .then((response) => {
        console.log(response, "ini respon google");
        store.setItem("roleTutor", response.data.role);
        store.setItem("fullnameTutor", response.data.fullname);
        store.setItem("emailTutor", response.data.email);
        store.setItem("_idTutor", response.data._id);
        store.setItem("tokenTutor", response.token);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
  };

  // const loginGoogle = (e) => {
  //   const token = store.getItem("token");
  //   loginStudentGoogle(token)
  //     .then((response) => {
  //       console.log(response, "ini respon google");
  //       store.setItem("role", response.data.role);
  //       // store.setItem("fullname", response.data.fullname);
  //       // store.setItem("role", response.data.role);
  //       // store.setItem("role", response.data.role);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  //====================================

  axios
    .get("https://tutorins.herokuapp.com/api/v1/home")
    .then((response) => {})
    .catch((err) => {
      console.log(err);
    });

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

  const loginHandler = (e) => {
    const store = window.localStorage;
    loginStudent(email, password)
      .then((response) => {
        console.log(response);
        store.setItem("email", response.data.email);
        store.setItem("token", response.token);
        store.setItem("fullname", response.data.fullname);
        store.setItem("profile_pic", response.data.profile_pic);
        store.setItem("_id", response.data._id);
        store.setItem("role", response.data.role);
        const { token } = response;
        setLogStatus(response.status);
        setEmail("");
        setPassword("");
        dispatch(
          handleLoginStudent(
            response.data.email,
            response.data.fullname,
            response.data.profile_pic,
            response.data._id,
            response.token
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (logStatus === 200) {
      setLoginModal(false);
      setLoginModalTutor(false);
      //window.location.reload();
    } else if (logStatus === null) {
      setLogVal(false);
    } else if (logStatus === "") {
      setLogVal(false);
    } else {
      setLogVal(true);
    }
  }, [logStatus]);
  console.log(logStatus, "status");

  const regisHandler = (e) => {
    if (name.length < 6 && regisEmail.length < 6 && regisPassword.length < 6) {
      alert("All input need 6 or more characters");
    } else {
      registrasiStudent(name, regisEmail, regisPassword)
        .then((response) => {
          alert("Registrasi Success");
          console.log(response);
          setRegisStudentModal(false);
          setLoginModal(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const loginHandlerTutor = (e) => {
    const store = window.localStorage;
    loginTutor(emailTutor, passwordTutor)
      .then((response) => {
        console.log(response);
        store.setItem("tokenTutor", response.token);
        store.setItem("fullnameTutor", response.data.fullname);
        store.setItem("aboutTutor", response.data.about);
        store.setItem("_idTutor", response.data._id);
        store.setItem("emailTutor", response.data.email);
        store.setItem("roleTutor", response.data.role);
        store.setItem("skillsTutor", response.data.skills);
        store.setItem("profile_picTutor", response.data.profile_pic);
        const { token } = response;
        setLogStatus(response.status);
        setEmailTutor("");
        setPasswordTutor("");
        //const decoded = jwt_decode(token);
        //store.setItem('data', JSON.stringify(token));
        //dispatch(handleLoginStudent(email, token, decoded.full_name));
        dispatch(
          handleLoginTutor(
            response.token,
            response.data.email,
            response.data.fullname,
            response.data.about,
            response.data._id,
            response.data.skills,
            response.data.profile_pic
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const regisHandlerTutor = (e) => {
    const store = window.localStorage;
    registrasiTutor(nameTutor, regisEmailTutor, regisPasswordTutor)
      .then((response) => {
        store.setItem("tokenTutor", response.token);
        console.log(response);
        setRegisTutorModal(false);
        setRegisTutorModal1(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateHandler = (e) => {
    //const store = window.localStorage;
    updateProfileTutorHome(regisAboutTutor, regisSkillsTutor, selectedFile)
      .then((response) => {
        console.log(response);
        setRegisTutorModal1(false);
        setRegisTutorModal2(true);
        // store.setItem("email", response.data.email);
        // store.setItem("fullname", response.data.fullname);
        // store.setItem("profile_pic", response.data.profile_pic);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="background">
      <div className="option-left">
        <img className="logg" src={logg} alt="logg" />
        <img className="logg1" src={iii} alt="logg" />
        <img className="logg2" src={tik} alt="logg" />
        <Nav className="dropdown-bootstrap-left">
          <NavDropdown id="nav-dropdown-light-example" title="Course">
            {store.getItem("role") === "student" ? (
              <Link to="/dashboard/dashboard">
                <NavDropdown.Item href="#action/3.1">Dasboard</NavDropdown.Item>
              </Link>
            ) : store.getItem("roleTutor") === "tutor" ? (
              <Link to="/dashboardTutor/dashboard">
                <NavDropdown.Item href="#action/3.1">Dasboard</NavDropdown.Item>
              </Link>
            ) : (
              <Link>
                <NavDropdown.Item href="#action/3.1">
                  Log in first
                </NavDropdown.Item>
              </Link>
            )}
          </NavDropdown>
        </Nav>
      </div>
      <div className="option-mid">
        <h1>I want to learn</h1>
        <Nav className="dropdown-bootstrap-mid">
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Music"
            menuVariant="dark"
          >
            <NavDropdown.Item onClick={() => history.push("/browse")}>
              Programming
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => history.push("/browse")}>
              Language
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => history.push("/browse")}>
              Design
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Link to="/browse">
          <button className="tutor-button">
            <span>Find a tutor</span>
          </button>
        </Link>
      </div>
      {store.getItem("role") === "student" ? (
        <></>
      ) : store.getItem("roleTutor") === "tutor" ? (
        <></>
      ) : (
        <div className="option-right">
          <button
            className="register-button"
            onClick={() => setRegisTutorModal(true)}
          >
            <span>Join as Tutor</span>
          </button>
          <button className="login-button" onClick={() => setLoginModal(true)}>
            <span>Login</span>
          </button>
        </div>
      )}

      {/* <div className="option-right">
        <button
          className="register-button"
          onClick={() => setRegisTutorModal(true)}
        >
          <span>Join as Tutor</span>
        </button>
        <button className="login-button" onClick={() => setLoginModal(true)}>
          <span>Login</span>
        </button>
      </div> */}

      <Modal isOpen={loginModal} onRequestClose={() => setLoginModal(false)}>
        <div className="login-title">
          <h4 className="loginTitle"> Login </h4>
          <p className="newUser">
            {" "}
            New user?
            <span
              onClick={() => {
                setLoginModal(false);
                setRegisStudentModal(true);
              }}
            >
              {" "}
              Create an account
            </span>
          </p>
        </div>
        <div className="email-wrapper">
          <label>Email</label>
          <br />
          <input
            value={email}
            className="input-email"
            placeholder="johndoe@gmail.com"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password-wrapper">
          <label>Password</label>
          <br />
          <input
            value={password}
            className="input-email"
            placeholder="***********"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {logVal && <p className="validasi-login">invalid email or password</p>}
        <button
          className="btnLogin"
          onClick={() => {
            loginHandler();
          }}
        >
          Login
        </button>
        <div className="garis"></div>

        {
          <GoogleLogin
            className="tombol-log"
            clientId={clientId}
            buttonText="Continue with Google"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        }
        {/* <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout> */}
        {/* <div onClick={() => {}} className="continue-google">
          <img src={fotoGoogle} alt="fotogoogle" />
          <p>Continue with Google</p>
        </div> */}
      </Modal>

      <Modal1
        isOpen={regisStudentModal}
        onRequestClose={() => setRegisStudentModal(false)}
      >
        <div className="regis-title">
          <h4 className="loginTitle"> Register </h4>
          <p className="newUser">
            {" "}
            Already have an Account?
            <span
              onClick={() => {
                setLoginModal(true);
                setRegisStudentModal(false);
              }}
            >
              {" "}
              Login
            </span>
          </p>
        </div>

        <div className="name-wrapper">
          <label>Name</label>
          <br />
          <input
            value={name}
            className="input-name"
            placeholder="john doe"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="emailRegis-wrapper">
          <label>Email</label>
          <br />
          <input
            value={regisEmail}
            className="input-emailRegis"
            placeholder="johndoe@gmail.com"
            type="text"
            onChange={(e) => setRegisEmail(e.target.value)}
          />
        </div>

        <div className="passwordRegis-wrapper">
          <label>Password</label>
          <br />
          <input
            value={regisPassword}
            className="input-passwordRegis"
            placeholder="******"
            type="password"
            onChange={(e) => setRegisPassword(e.target.value)}
          />
        </div>

        <button
          className="btnLogin"
          onClick={() => {
            regisHandler();
          }}
        >
          Sign Up
        </button>

        <div className="garis"></div>
        <GoogleLogin
          className="tombol-log"
          clientId={clientId}
          buttonText="Continue with Google"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />

        {/* <div className="continue-google">
          <img src={fotoGoogle} alt="fotogoogle" />
          <p>Sign Up with Google</p>
        </div> */}
      </Modal1>

      <Modal2
        isOpen={regisTutorModal}
        onRequestClose={() => setRegisTutorModal(false)}
      >
        <div className="regis-title">
          <h4 className="loginTitle"> Be a Tutor </h4>
          <p className="newUser">
            {" "}
            Already have tutor Account?
            <span
              onClick={() => {
                setLoginModalTutor(true);
                setRegisTutorModal(false);
              }}
            >
              {" "}
              Login
            </span>
          </p>
        </div>

        <div className="name-wrapper">
          <label>Name</label>
          <br />
          <input
            value={nameTutor}
            className="input-name"
            placeholder="john doe"
            type="text"
            onChange={(e) => setNameTutor(e.target.value)}
          />
        </div>

        <div className="emailRegis-wrapper">
          <label>Email</label>
          <br />
          <input
            value={regisEmailTutor}
            className="input-emailRegis"
            placeholder="johndoe@gmail.com"
            type="text"
            onChange={(e) => setRegisEmailTutor(e.target.value)}
          />
        </div>

        <div className="passwordRegis-wrapper">
          <label>Password</label>
          <br />
          <input
            value={regisPasswordTutor}
            className="input-passwordRegis"
            placeholder="******"
            type="password"
            onChange={(e) => setRegisPasswordTutor(e.target.value)}
          />
        </div>

        <button
          className="btnLogin"
          onClick={() => {
            // loginHandler();
            regisHandlerTutor();
          }}
        >
          Create an Account
        </button>

        <div className="garis"></div>

        <GoogleLogin
          className="tombol-log"
          clientId={clientId}
          buttonText="Continue with Google"
          onSuccess={onLoginSuccessTutor}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />

        {/* <div className="continue-google">
          <img src={fotoGoogle} alt="fotogoogle" />
          <p>Sign up with Google</p>
        </div> */}
      </Modal2>

      <Modal3
        isOpen={regisTutorModal1}
        onRequestClose={() => setRegisTutorModal1(false)}
      >
        <div className="ceklis">
          <div className="join-tutorin">
            <img className="ceklis1" src={ceklis} alt="symbol-ceklis" />
            <p className="aaaa">Join Tutorin</p>
          </div>
          <div className="personal-inf">
            <img className="ceklis1" src={ceklis} alt="symbol-ceklis" />
            <p className="aaaa">Personal Information</p>
          </div>
          <div className="welcome-done">
            <div className="ling" />
            <p className="aaaab">Welcome!</p>
          </div>
        </div>

        <div></div>
        <img
          className="foto-container"
          src={selectedFile !== "" ? preview : uus}
          alt="ss"
        />
        <div className="upload-btn-wrappers">
          <button className="profile-upload-studs">Upload Picture</button>
          <br />
          <input
            // multiple="multiple"
            // value={selectedFile}
            // name="myfile"
            className="input-profile-photos"
            type="file"
            accept="image/*"
            onChange={onSelectFile}
          />
        </div>

        {/* <button className="add-profile-image">Add Profile Image</button> */}

        <div className="aboutme">
          <p className="about-me-title">About Me</p>
          <textarea
            className="about-input"
            value={regisAboutTutor}
            onChange={(e) => setRegisAboutTutor(e.target.value)}
            placeholder="e.g. Hi, I’m Marie. An entrepreneur, 
            writer, philanthropist & unshakable optimist dedicated to 
            help you become the person you most wanna be"
          ></textarea>
        </div>

        <div className="about-me-skills">
          <p className="skill-title">Skills</p>
          <select
            onChange={(e) => setRegisSkillsTutor(e.target.value)}
            className="dropds"
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
          className="btn-next"
          onClick={() => {
            updateHandler();
          }}
        >
          Save
        </button>
      </Modal3>

      <Modal4
        isOpen={regisTutorModal2}
        onRequestClose={() => setRegisTutorModal2(false)}
      >
        <div className="ceklis">
          <div className="join-tutorin">
            <img className="ceklis1" src={ceklis} alt="symbol-ceklis" />
            <p className="aaaa">Join Tutorin</p>
          </div>
          <div className="personal-inf">
            <img className="ceklis1" src={ceklis} alt="symbol-ceklis" />
            <p className="aaaa">Personal Information</p>
          </div>
          <div className="welcome-done">
            <img className="ceklis1" src={ceklis} alt="symbol-ceklis" />
            <p className="aaaabc">Welcome!</p>
          </div>
        </div>

        <div>
          <img className="congrats" src={congrat} alt="congrat" />
        </div>

        <div className="tombol-conta">
          <Link to="dashboard/dashboard">
            <button className="goto-dashboard">Go to Dashboard</button>
          </Link>
          <button className="btn-createcourse">Create Course</button>
        </div>
      </Modal4>

      <Modal5
        isOpen={loginModalTutor}
        onRequestClose={() => setLoginModalTutor(false)}
      >
        <div className="login-title">
          <h4 className="loginTitle"> Login Tutor </h4>
          <p className="newUser">
            {" "}
            New tutor?
            <span
              onClick={() => {
                setLoginModalTutor(false);
                setRegisTutorModal(true);
              }}
            >
              {" "}
              Create an account
            </span>
          </p>
        </div>

        <div className="email-wrapper">
          <label>Email</label>
          <br />
          <input
            value={emailTutor}
            className="input-email"
            placeholder="johndoe@gmail.com"
            type="text"
            onChange={(e) => setEmailTutor(e.target.value)}
          />
        </div>

        <div className="password-wrapper">
          <label>Password</label>
          <br />
          <input
            value={passwordTutor}
            className="input-email"
            placeholder="***********"
            type="password"
            onChange={(e) => setPasswordTutor(e.target.value)}
          />
        </div>
        {logVal && <p className="validasi-login">invalid email or password</p>}

        <button
          className="btnLogin"
          onClick={() => {
            loginHandlerTutor();
          }}
        >
          Login
        </button>

        <div className="garis"></div>

        <div className="continue-google">
          <img src={fotoGoogle} alt="fotogoogle" />
          <p>Continue with Google</p>
        </div>
      </Modal5>
    </div>
  );
};

export default Header;
