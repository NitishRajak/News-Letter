import React from "react";
import iconSuccess from "./images/icon-success.svg";
import "./Success.css";
const Success = ({ email }) => {
  return (
    <div className="Success">
      <div className="container-success">
        <img className="IconImage" src={iconSuccess} alt="fav" />
        <h1>Thanks for subscribing!</h1>
        <p className="Paragraph">
          A confirmation email has been sent to <b>{email}</b>. Please open it
          and click the button inside to confirm your subscription
        </p>
        <button className="btn-success">Dismiss message</button>
      </div>
    </div>
  );
};
export default Success;
