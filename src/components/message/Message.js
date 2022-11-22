import React, { useState } from "react";
import "./message.css";
import user1 from "../../assets/user2.jpg";

function Message() {
  const [isActive, setIsActive] = useState({
    msg: true,
    scheduled: false,
    archived: false,
  });

  const handleMsg = () => {
    setIsActive({ msg: true, scheduled: false, archived: false });
  };

  const handleScheduled = () => {
    setIsActive({ msg: false, scheduled: true, archived: false });
  };

  const handleArchived = () => {
    setIsActive({ msg: false, scheduled: false, archived: true });
  };

  const showMsg = isActive.msg ? <Msg /> : null;
  const showScheduled = isActive.scheduled ? <Scheduled /> : null;
  const showArchived = isActive.archived ? <Archived /> : null;

  return (
    <div className="msg-container">
      <div className="msg-side-bar"></div>
      <p className="msg-title">Messages</p>
      <div className="msg-details">
        <button
          className={`msg-${isActive.msg ? "active" : null}`}
          onClick={handleMsg}
        >
          Active
        </button>
        <button
          className={`msg-${isActive.scheduled ? "active" : null}`}
          onClick={handleScheduled}
        >
          Scheduled
        </button>
        <button
          className={`msg-${isActive.archived ? "active" : null}`}
          onClick={handleArchived}
        >
          Archived
        </button>
        {showMsg}
        {showScheduled}
        {showArchived}
      </div>
    </div>
  );
}

function Msg() {
  return (
    <div>
      <div className="msg-user-chat">
        <img className="msg-foto-user" src={user1} alt="user1"></img>
        <div>
          <p className="msg-user-name">Audrey</p>
          <p className="msg-user-spoiler">Lorem ipsum dolor sit amet.....</p>
        </div>
      </div>
    </div>
  );
}

function Scheduled() {
  return (
    <div>
      <div className="msg-user-chat">
        <img className="msg-foto-user" src={user1} alt="user1"></img>
        <div>
          <p className="msg-user-name">Scheduled Messages</p>
          <p className="msg-user-spoiler">Lorem ipsum dolor sit amet.....</p>
        </div>
      </div>
    </div>
  );
}

function Archived() {
  return (
    <div className="msg-user-chat">
      <img className="msg-foto-user" src={user1} alt="user1"></img>
      <div>
        <p className="msg-user-name">Archived Messages</p>
        <p className="msg-user-spoiler">Lorem ipsum dolor sit amet.....</p>
      </div>
    </div>
  );
}

export default Message;
