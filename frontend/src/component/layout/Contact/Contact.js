import React, { Fragment } from "react";
import "./Contact.css";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PinDropIcon from "@material-ui/icons/PinDrop";
import { Typography } from "@material-ui/core";
import MetaData from "../MetaData";



const Contact = () => {

  return (
    <Fragment>
      <MetaData title="Contact Us -- Acedemic Asset's" />
      <div className="calling">
        <div className="div">
          <PhoneIcon />

          <Typography> </Typography>
          <p>+91 7028531074</p>
        </div>

        <div className="div">
          <MailOutlineIcon />

          <Typography> </Typography>
          <a href="mailto:buyyourdesirebook@gmail.com"> buyyourdesirebook@gmail.com</a>
        </div>

        <div className="div">
          <PinDropIcon />

          <Typography> </Typography>
          <p>Nagpur</p>
        </div>

      </div>

      <div className="body3">
        <p className="notice">You Can DM  Me on whats app  <br /> 8830673897
        </p>
      </div>
    </Fragment>
  );
};

export default Contact;
