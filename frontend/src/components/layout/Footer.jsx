import React, { useContext } from "react";
import { Context } from "../../main";
import { Link, useLocation } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const isDaashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);
  return (
    <>
      <footer
        className={
          isDaashboard.pathname === "/dashboard"
            ? "hideFooter"
            : mode === "light"
            ? "light-footer"
            : "dark-footer"
        }
      >
        <div className="container">
          <div className="about">
            <h3>About</h3>
            <p>
              This blog website is built using the MERN stack, showcasing my
              skills in front-end design with React and back-end development
              with Node.js and MongoDB. It's designed to be fast, responsive,
              and easy to use. Feel free to explore!
            </p>
            <p>
              <span>Email:</span>rohankumar2663@gmail.com
            </p>
          </div>
          <div className="quick_links">
            <h3>Quick Links</h3>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/blogs"}>Blogs</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div className="categories">
            <h3>Categories</h3>
            <ul>
              <li>LifeStyle</li>
              <li>Technology</li>
              <li>Sports</li>
              <li>Travel</li>
              <li>Business</li>
              <li>Economy</li>
            </ul>
          </div>
          <div className="news_letter">
            <div>
              <h3>Weekly NewsLetter</h3>
              <p>Get blog articles and offer via email</p>
            </div>
            <div>
              <input type="text" placeholder="Your Email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="logo">
            Web<span>Blog</span>
          </div>
          <div className="links">
            <Link to={"https://leetcode.com/u/rohankumar2663/"} target="_blank">
              <SiLeetcode></SiLeetcode>
            </Link>
            <Link to={"https://github.com/rohan2663"} target="_blank">
              <FaGitSquare></FaGitSquare>
            </Link>
            <Link to={"https://rohan2663.github.io/Portfolio/"} target="_blank">
              <CiGlobe></CiGlobe>
            </Link>
            <Link
              to={"https://www.linkedin.com/in/rohankumar2663"}
              target="_blank"
            >
              <AiFillLinkedin></AiFillLinkedin>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
