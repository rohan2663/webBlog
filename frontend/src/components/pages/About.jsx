import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
          Hi, I'm Rohan Kumar, a Computer Science Engineer who loves building
          creative and easy-to-use web applications. I’ve explored many
          technologies and found my strength in full-stack development,
          especially with the MERN stack (MongoDB, Express, React, Node.js).
        </p>
        <p>
          This blog website is a testament to my skills in full-stack
          development. Built using the MERN stack, it features a seamless user
          interface, efficient back-end architecture, and a fully functional
          content management system. Whether it's creating dynamic user
          experiences with React or ensuring robust data handling with MongoDB
          and Node.js, this project reflects my commitment to delivering
          top-notch web solutions.
        </p>
        <p>
          Feel free to explore the content, and if you're interested in web
          development or collaboration, don't hesitate to reach out!
        </p>
      </div>
    </article>
  );
};

export default About;
