import React, { Fragment } from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
// import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import MetaData from "../MetaData";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/ifeelpankaj";
  };
  return (
    <Fragment>
    <MetaData title="About Us -- Acedemic Asset's" />

    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/buymybook/image/upload/v1642315558/samples/PicsArt_12-15-11.24.25-01_psklhm.jpg"
              alt="CEO"
            />
            <Typography>ifeelPankaj</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This website is made to help the student who are willing to learn something new
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.linkedin.com/in/ifeelpankaj/"
              target="blank"
            >
              <LinkedinIcon className="linkedinSvgIcon" />
            </a>

            <a href="https://instagram.com/ifeelpankaj" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default About;
