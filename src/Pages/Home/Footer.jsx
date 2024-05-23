import { Link } from "react-scroll";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="hero--section--img">
          <img src="./img/hero_img2.png" alt="Logo" />
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="fixed left-0 bottom-5 px-10 sm:static">
          <div className="flex flex-col items-center">
            <div className="icon-container">
              <a href="https://www.linkedin.com/in/alecnesatcolak/">
                <i>
                  <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
                </i>
              </a>
              <a href="mailto:acolak9@ufl.edu">
                <i>
                  <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
                </i>
              </a>
              <a href="https://github.com/AlecNesatColak">
                <i>
                  <FontAwesomeIcon icon={faGithub} className="fa-icon" />
                </i>
              </a>
              <i>
                <FontAwesomeIcon icon={faPhone} className="fa-icon" />
              </i>
            </div>
            <div className="w-[1px] h-52 bg-secondary opacity-95 sm:w-52 sm:h-[1px] sm:mb-3"></div>
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Created by Alec-Nesat Colak</p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
