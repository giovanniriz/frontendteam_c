import React, { useState, useEffect } from "react";
import "./enrollbooking.css";
import Modal from "react-modal";
import pfp from "./pfp.jpeg";
import scc from "./scc.png";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector, useSelectors } from "react-redux";

function EnrollBooking() {
  // Modal
  const [loginModal, setLoginModal] = useState(true);
  const [regisModal, setRegisModal] = useState(false);
  const [finishModal, setFinishModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);

  //Payment Choice
  const data = [
    {
      id: 0,
      label: "BANK TRANSFER",
    },
    { id: 1, label: "E-MONEY" },
    { id: 2, label: "E-WALLET" },
  ];

  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  const toggleDropdown = () => setOpen(!isOpen);
  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
  };

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleChange1 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //const { token } = useSelector((state) => state.loginStudentReducer);

  const store = window.localStorage;

  const [databooking, setDatabooking] = useState({
    price: 0,
    date: "",
    start_time: "",
    end_time: "",
    duration: 0,
    payment_method: "",
  });

  const getDiff = (a, b) => {
    let splitStart = a.split(":");
    let splitEnd = b.split(":");

    let startMToH = splitStart[1] / 60;
    let endMtoH = splitEnd[1] / 60;

    let startH = parseInt(splitStart[0]) + startMToH;
    let endH = parseInt(splitEnd[0]) + endMtoH;

    let result = endH - startH;
    return result.toFixed(2);
  };

  const bookings = async (
    course_id,
    student_id,
    tutor_id,
    date,
    start_time,
    end_time,
    duration,
    price,
    payment_method
  ) => {
    const url = `https://tutorins.herokuapp.com/api/v1/booking`;
    const data = {
      course_id,
      student_id,
      tutor_id,
      date,
      start_time,
      end_time,
      duration,
      price,
      payment_method,
    };
    try {
      const store = window.localStorage;
      const token = store.getItem("token");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      throw error;
    }
  };

  const submit = (e) => {
    bookings(
      store.getItem("CourseID"),
      store.getItem("_id"),
      store.getItem("tutor_id"),
      databooking.date,
      databooking.start_time,
      databooking.end_time,
      databooking.duration,
      databooking.price,
      databooking.payment_method
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handle(e) {
    const newdatabooking = { ...databooking };
    newdatabooking[e.target.id] = e.target.value;
    setDatabooking(newdatabooking);
  }

  useEffect(() => {
    setDatabooking((prevData) => ({
      ...prevData,
      duration: getDiff(databooking.start_time, databooking.end_time),
    }));
  }, [databooking.start_time, databooking.end_time]);

  useEffect(() => {
    const premium = store.getItem("premium_price");
    const totalprice = premium * databooking.duration;
    setDatabooking((prevData) => ({
      ...prevData,
      price: totalprice,
    }));
  }, [databooking.duration]);

  console.log(databooking, "start");

  let history = useHistory();

  function handleClick() {
    history.push("/dashboard/dashboard");
  }

  console.log(selectedItem, "itemss");

  return (
    <div>
      <div>
        <p className="above"> tutorin </p>
        <p className="below"> find your perfect tutor </p>
      </div>
      <div></div>
      {/* <button onClick={()=>setLoginModal (true)}>Enroll</button> ===> open right when the page switch*/}
      <Modal
        isOpen={loginModal}
        style={customStyles}
        onRequestClose={() => history.push("/browse")}
      >
        <div className="select">
          <IconButton color="primary">
            <CheckCircleRoundedIcon /> <span className="spann">Select</span>
          </IconButton>
          <IconButton color="gray">
            <CheckCircleRoundedIcon /> <span className="spann">Payment</span>
          </IconButton>
          <IconButton>
            <CheckCircleRoundedIcon /> <span className="spann">Finished</span>
          </IconButton>
        </div>
        <div className="two-colomn">
          <div className="row">
            <div>
              <img
                className="profilepic"
                src={localStorage.getItem("foto")}
                alt="aaa"
              />
              <p className="profile"> {localStorage.getItem("nama")} </p>
              <p className="skill"> {localStorage.getItem("cate")}</p>
            </div>
          </div>
          <div>
            <div className="text">
              {" "}
              Premium <span>*</span>{" "}
            </div>
            <div className="small"> you can learn using video conference</div>
            <div className="text">
              {" "}
              Rp.{store.getItem("premium_price")} /hour
            </div>
            <br />
            <form
              className="inputform"
              // onSubmit={(e) => {
              //   e.preventDefault();
              //   submit(e);
              // }}
            >
              <label> Select Date </label>
              <input
                className="boxy"
                onChange={(e) => handle(e)}
                id="date"
                value={databooking.date}
                placeholder="date"
                type="date"
              ></input>

              <label> Start Time </label>
              <input
                pattern="[0-9]{4}-[0-1][0-9]-[0-3][0-9] (1[012]|0[1-9]):[0-5][0-9] (am|pm|AM|PM)"
                step="3600"
                className="boxy"
                onChange={(e) => handle(e)}
                id="start_time"
                value={databooking.start_time}
                placeholder="time"
                type="time"
              ></input>

              <label> End Time </label>
              <input
                className="boxy"
                onChange={(e) => handle(e)}
                id="end_time"
                value={databooking.end_time}
                placeholder="time"
                type="time"
              ></input>

              {/* <label> Duration </label>
              <br/>
              <input
                className="box-y"
                onChange={(e) => handle(e)}
                id="duration"
                value={databooking.duration}
                placeholder="course duration"
                type="text"
              ></input>
              <br/> */}

              <label> Price (Rp)</label>
              <input
                className="boxy"
                onChange={(e) => handle(e)}
                id="price"
                value={
                  isNaN(databooking.price)
                    ? (databooking.price = 0)
                    : databooking.price
                }
                placeholder="price"
                type="text"
              ></input>
              <button
                className="button"
                onClick={() => {
                  setLoginModal(false);
                  setRegisModal(true);
                }}
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={regisModal}
        style={customStyles}
        onRequestClose={() => setRegisModal(false)}
      >
        <div>
          <div className="select">
            <IconButton color="primary">
              <CheckCircleRoundedIcon /> <span className="spann">Select</span>
            </IconButton>
            <IconButton color="primary">
              <CheckCircleRoundedIcon /> <span className="spann">Payment</span>
            </IconButton>
            <IconButton>
              <CheckCircleRoundedIcon /> <span className="spann">Finished</span>
            </IconButton>
          </div>
        </div>
        <br />
        <div className="dropdown">
          {/* <div className="dropdown-header" onClick={toggleDropdown}>
            {selectedItem
              ? items.find((item) => item.id == selectedItem).label
              : "Select your payment method"}
            <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
          </div> */}
          <div>
            <select
              value={databooking.payment_method}
              id="payment_method"
              onChange={(e) => handle(e)}
              className="dropdssss"
            >
              <option value="none" hidden>
                Please Select Payment Method...
              </option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Debit/Credit Card">Debit/Credit Card</option>
              <option value="E Wallet">E Wallet</option>
            </select>
          </div>

          {/* <div className={`dropdown-body ${isOpen && "open"}`}>
            {items.map((item) => (
              <div
                className="dropdown-item"
                onClick={(e) => handleItemClick(e.target.id)}
                id={item.id}
              >
                <span
                  className={`dropdown-item-dot ${
                    item.id === selectedItem && "selected"
                  }`}
                >
                  {" "}
                  <DoneAllIcon />{" "}
                </span>
                {item.label}
              </div>
            ))}
          </div> */}
        </div>
        <br />

        <div className={classes.root}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange1("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.secondaryHeading}>
                Bank Transer (Validasi Manual)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <li>
                  Masukkan info nomor Rekening dan Nama Pemilik Rekening pada
                  halaman konfirmasi pembayaran
                </li>
                <li>
                  Jika pembayaran lewat teller, isi No. Rekening dengan 0000.
                  Lalu isi "Nama Pemilik Rekening" dengan nama Anda
                </li>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange1("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.secondaryHeading}>
                E-Wallet
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <li>Masuk ke aplikasi E-Wallet.</li>
                <li>Pilih Pembayaran dengan virtual account</li>
                <li>Masukkan nomor 004 + nomor telepon genggam</li>
                <li>Akan muncul detail transaksi kemudian pilih kondirmasi </li>
                <li>Masukkan security code dan Transaksi berhasil</li>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange1("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.secondaryHeading}>
                E-Money
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <li>Masuk ke aplikasi E-Wallet.</li>
                <li>Pilih Pembayaran dengan virtual account</li>
                <li>Masukkan nomor 004 + nomor telepon genggam</li>
                <li>Akan muncul detail transaksi kemudian pilih kondirmasi </li>
                <li>Masukkan security code dan Transaksi berhasil</li>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <br />
        <div>
          <button
            className="button"
            onClick={() => {
              submit();
              setRegisModal(false);
              setFinishModal(true);
            }}
          >
            Next
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={finishModal}
        style={customStyles}
        onRequestClose={() => setFinishModal(false)}
      >
        <div>
          <div className="select">
            <IconButton color="primary">
              <CheckCircleRoundedIcon /> <span className="spann">Select</span>
            </IconButton>
            <IconButton>
              <CheckCircleRoundedIcon color="primary" />{" "}
              <span className="spann">Payment</span>
            </IconButton>
            <IconButton>
              <CheckCircleRoundedIcon color="primary" />{" "}
              <span className="spann">Finished</span>
            </IconButton>
          </div>
          <br />
          <div>
            <img className="resize" src={scc} />
            <p className="success">
              {" "}
              Successfully Enroll in Fashion Design Course
            </p>
            <p className="success"> by Audrey Chang</p>
          </div>
          <div>
            <br />
            <br />
            <br />
            <br />
            <button onClick={handleClick} className="button">
              Go to Dashboard
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default EnrollBooking;

const customStyles = {
  content: {
    top: "55%",
    left: "23%",
    right: "auto",
    bottom: "auto",
    marginRight: "0%",
    transform: "translate(-50%, -50%)",
    width: "857px",
    height: "631px",
    borderRadius: "30px",
    padding: "10px 50px",
  },
};
Modal.setAppElement("#root");

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    backgroundColor: "#105573",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.primary,
  },
}));
