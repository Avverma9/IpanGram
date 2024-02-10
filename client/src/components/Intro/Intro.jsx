import React, { useContext, useState, useEffect } from "react";


import "./Intro.css";

//import images//
import Vector12 from "../../img/BrightLongArmyworm-max-1mb.gif";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import mypic1 from "../../img/home_anime.f372ef86.gif";
import profile1 from "../../img/profile1.jpg";
import glassesimoji from "../../img/ttt.gif";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import telegram from "../../img/telegram.png";
import whatsapp from "../../img/whatsapp.png";

import Instagram from "../../img/instagram.png";

// import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  // const theme = useContext(themeContext);
  const darkMode = false;

  //  -------------------counter--------------------

  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const navigate= useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < 15) {
        setCounter(counter + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [counter]);

  useEffect(() => {
    const interval2 = setInterval(() => {
      if (counter2 < 50) {
        setCounter2(counter2 + 1);
      }
    }, 40);

    return () => clearInterval(interval2);
  }, [counter2]);

  //  -------------------counter end --------------

  // ----------------text animate-------------
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Ipan-Gram"];

  const handleTyping = () => {
    const current = loopNum % words.length;
    const fullText = words[current];

    setText(
      isDeleting
        ? fullText.slice(0, text.length - 1)
        : fullText.slice(0, text.length + 1)
    );

    setTypingSpeed(isDeleting ? 220 : 100);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  });

  // ----------------text animate-------------

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}

      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}

          {/* <span style={{ color: darkMode ? "white" : "" }}>Hy! my</span> */}
          <br />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            id="texts"
          >
            {text}
          </motion.h1>

          <span style={{ fontSize: "30px" }}>
            Unlocking Your Path to IT Department
          </span>

          <br />
          <span>
            At Ipan Gram, we're dedicated to empowering your journey in the
            world of IT Sector. Whether you're a seasoned professional or just
            starting, our platform offers the tools, Web developments, and support you
            need to thrive in today's dynamic markets.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button
            className="button i-button"
            style={{ width: "fit-content", padding: "15px 70px" }}
            onClick={() => navigate("/login")}
          >
            Get in touch
          </button>
        </Link>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img className="mypic" style={{ width: 250 }} src={mypic1} alt="" />

        <motion.img
          initial={{ left: "-16%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div></motion.div>
        <br></br>

        {/* animation */}
        <motion.div
          initial={{ left: "0rem", top: "8rem" }}
          whileInView={{ left: "1rem" }}
          transition={transition}
          className="floating-div"
        ></motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
