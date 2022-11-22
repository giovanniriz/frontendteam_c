import React, { useState, useEffect } from "react";
import { isFavorite } from "../../userService/favoriteService";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SearchBar from "../searchbar/SearchBar";
import "./browse.css";
import { Nav, NavDropdown } from "react-bootstrap";
import Footer from "../footer/Footer";
import { Link, useHistory } from "react-router-dom";
import user2 from "../../assets/user2.jpg";
import logg from "../../assets/tutorin.png";
import iii from "../../assets/tutorin1.png";
import tik from "../../assets/png.png";
import ree from "../../assets/ree.png";
import axios from "axios";

function Browse() {
  const [tutor, setTutor] = useState([]);
  const [search, setSearch] = useState("");
  const [content, setContent] = useState([]);
  const [bebas, setBebas] = useState("");
  const [isFa, setIsFa] = useState("");
  const [course_id, setCourse_id] = useState([]);
  const [bestTutor, setBestTutor] = useState([]);
  const [bestTutor1, setBestTutor1] = useState([]);
  const [bestTutor2, setBestTutor2] = useState([]);
  const [bestTutor3, setBestTutor3] = useState([]);

  const history = useHistory();
  const fakeAPI = [
    {
      tutor_id: {
        fullname: "Jesica Bebas",
      },
      category: "PSK",
      regular_price: 10000,
    },
  ];

  console.log("tutor", tutor);
  console.log(document.getElementsByClassName("category-dropdown"));

  const handleSelect = (e) => {
    console.log("handleSelect", e);
    setBebas(e);
  };

  const fetchAll = async () => {
    let data;
    if (!bebas) {
      data = `https://tutorins.herokuapp.com/api/v1/search?name=${search}`;
    } else if (
      bebas === "language" ||
      bebas === "design" ||
      bebas === "programming"
    ) {
      data = `https://tutorins.herokuapp.com/api/v1/course/category/name?name=${bebas}`;
    }
    const URL = await fetch(data);
    const rawJson = await URL.json();
    setContent(rawJson.data.total_data ? rawJson.data.results : rawJson.data);
    setCourse_id(rawJson.data.results);
    console.log(rawJson);
  };
  console.log(content, "ini content");

  useEffect(() => {
    fetchAll();
  }, [search, bebas]);

  const searchFunc = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://tutorins.herokuapp.com/api/v1/tutor/bestTutor", {
        headers: {},
      })
      .then((response) => {
        console.log(response.data.data[0], "rereres");
        setBestTutor(response.data.data[0].course[0]);
        setBestTutor1(response.data.data[0]);
        setBestTutor2(response.data.data[1].course[0]);
        setBestTutor3(response.data.data[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const store = window.localStorage;

  const adad = () => {
    setIsFa(store.getItem("courseID"));
  };

  const favoHandler = () => {
    isFavorite(isFa)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const MultiCarousel = () => {
    return (
      <div>
        {/* {bestTutor.map((e) => {
          return <div>{e.about}</div>;
        })} */}
        <Carousel
          className="centerbook"
          responsive={responsive}
          focusOnSelect={true}
          centerMode={true}
          autoPlaySpeed={1000}
          transitionDuration={500}
          customTransition="all .5"
          showDots={true}
          arrows={false}
          draggable={false}
        >
          <div
            style={{
              height: "203px",
              width: "826px",
              left: "0",
              top: "0",
              borderRadius: "8px",

              background: `linear-gradient(90deg, #105573 0%, #105573 60.83%, rgba(255, 255, 255, 0) 100%)`,
              backgroundSize: "cover",
              paddingRight: "30px",
            }}
          >
            <img
              className="browse-ft-ban"
              src={bestTutor3.profile_pic}
              alt="as"
            />
            <img className="browse-ft" src={bestTutor2.cover_img} alt="lap" />
            <p className="namebanner">{bestTutor2.tutor_name}</p>
            <p className="detailbanner">{bestTutor2.title}</p>
            <p className="detailbanner-cate">{bestTutor2.category}</p>
            <div className="browse-best">
              <p className="browse-bes">Best Seller</p>
            </div>
          </div>

          <div
            style={{
              height: "203px",
              width: "826px",
              left: "0",
              top: "0",
              borderRadius: "8px",

              background: `linear-gradient(90deg, #105573 0%, #105573 60.83%, rgba(255, 255, 255, 0) 100%)`,
              backgroundSize: "cover",
              paddingRight: "30px",
            }}
          >
            <img
              className="browse-ft-ban"
              src={bestTutor1.profile_pic}
              alt="as"
            />
            <img className="browse-ft" src={bestTutor.cover_img} alt="lap" />
            <p className="namebanner">{bestTutor.tutor_name}</p>
            <p className="detailbanner">{bestTutor.title}</p>
            <p className="detailbanner-cate">{bestTutor.category}</p>
            <div className="browse-best">
              <p className="browse-bes">Best Seller</p>
            </div>
          </div>
          <div
            style={{
              height: "203px",
              width: "826px",
              left: "0",
              top: "0",
              borderRadius: "8px",

              background: `linear-gradient(90deg, #105573 0%, #105573 60.83%, rgba(255, 255, 255, 0) 100%)`,
              backgroundSize: "cover",
              paddingRight: "30px",
            }}
          ></div>

          <div
            style={{
              height: "203px",
              width: "826px",
              left: "0",
              top: "0",
              borderRadius: "8px",

              background: `linear-gradient(90deg, #105573 0%, #105573 60.83%, rgba(255, 255, 255, 0) 100%)`,
              backgroundSize: "cover",
              paddingRight: "30px",
            }}
          ></div>

          <div
            style={{
              height: "203px",
              width: "826px",
              left: "0",
              top: "0",
              borderRadius: "8px",

              background: `linear-gradient(90deg, #105573 0%, #105573 60.83%, rgba(255, 255, 255, 0) 100%)`,
              backgroundSize: "cover",
              paddingRight: "30px",
            }}
          ></div>
        </Carousel>
      </div>
    );
  };

  const Dropdown = () => {
    return (
      <div className="drop-con">
        <div className="bootstrap-dropdown-1">
          <Nav>
            <NavDropdown
              onSelect={handleSelect}
              id="nav-dropdown-dark-example"
              title="Category"
              menuVariant="dark"
              style={{
                border: "none",
                boxShadow: "none",
                left: "-125px",
                top: "25px",
              }}
            >
              <NavDropdown.Item eventKey="language">Language</NavDropdown.Item>
              <NavDropdown.Item eventKey="design">Design</NavDropdown.Item>
              <NavDropdown.Item eventKey="programming">
                Programming
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
        <div className="bootstrap-dropdown-2">
          <Nav>
            <NavDropdown
              onSelect={handleSelect}
              id="nav-dropdown-dark-example"
              title="Subject"
              menuVariant="dark"
              style={{
                border: "none",
                boxShadow: "none",
                left: "-110px",
                top: "25px",
              }}
            >
              <NavDropdown.Item eventKey="fashion design">
                Fashion Design
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="english">English</NavDropdown.Item>
              <NavDropdown.Item eventKey="violin">Violin</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
        <div className="bootstrap-dropdown-3">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Price"
              menuVariant="dark"
              style={{
                border: "none",
                boxShadow: "none",
                top: "25px",
                left: "-75px",
              }}
            >
              <NavDropdown.Item>Asc</NavDropdown.Item>
              <NavDropdown.Item>Desc</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
        <div className="bootstrap-dropdown-4">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Level"
              menuVariant="dark"
              style={{
                border: "none",
                boxShadow: "none",
                left: "-40px",
                top: "25px",
              }}
            >
              <NavDropdown.Item href="#action/3.1">Beginner</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Novice</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Intermediate
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </div>
    );
  };

  //Page Browse
  return (
    <div>
      <div className="header-h1">
        <img
          onClick={() => history.push("/")}
          className="logg5"
          src={logg}
          alt="logg"
        />
        <img className="logg6" src={iii} alt="logg" />
        <img className="logg7" src={tik} alt="logg" />
      </div>
      <div>
        <SearchBar
          placeholder="Search by a tutor, category or subject"
          searchFunc={searchFunc}
        />
      </div>
      <div>
        <MultiCarousel />
      </div>
      <div>
        <Dropdown />
      </div>
      <div>
        <div className="gridx">
          <div className="picture-content">
            {content.map((e) => {
              return (
                <div className="content">
                  <Link to={`/browse/${e._id}`}>
                    <div
                      onClick={() => {
                        store.setItem("tutor_id", e.tutor_id && e.tutor_id._id);
                        store.setItem("CourseID", e._id);
                      }}
                      className="picture-content-1"
                      style={{
                        background: `linear-gradient(0deg, #FFFFFF 0.11%, rgba(255, 255, 255, 0.453125) 31.37%, rgba(255, 255, 255, 0) 59.47%), url(${e.cover_img})`,
                        backgroundSize: "cover",
                      }}
                    >
                      <h1>{e.tutor_name}</h1>
                      <p>{e.category}</p>
                      <div className="picture-content-1-star">⭐</div>
                      <div className="rating">{e.rating}</div>
                      <div className="category"></div>
                      <div className="start-from">Start from</div>
                      <div className="price">Rp. {e.regular_price}/hour</div>
                    </div>
                  </Link>
                  <div className="is-rev">49 reviews</div>
                  <div className="is-love">
                    <svg
                      onClick={() => {
                        store.setItem("courseID", e._id);
                        adad();
                        favoHandler();
                      }}
                      width="24"
                      height="21"
                      viewBox="0 0 24 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0453 19.638C-7.51491 8.38255 6.17748 -3.83596 12.0453 3.89026C17.9138 -3.83597 31.6062 8.38255 12.0453 19.638Z"
                        stroke="#F1B7EF"
                        stroke-width="1.8"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Browse;
