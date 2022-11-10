import React, { useState, useEffect } from "react";
// import spinner from '../assets/spinner.gif';
import "./SocialIcons.css";

const SocialIcons = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
      window.removeEventListener("scroll", listenToScroll);
  }, [])

  const listenToScroll = () => {
    var body = document.body
    var html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
      html.clientHeight, html.scrollHeight, html.offsetHeight );
    console.log(height);
    let heightToHideFrom = height - 1000 ;
    const winScroll = document.body.scrollTop ||
      document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  return (
    <div>

      {(isVisible) ? <> <a
        href="https://www.facebook.com/edrakmu/"
        className="float float1"
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <i className="fa-brands fa-facebook-f my-float"></i>
        </span>
      </a>
        <a
          href="https://twitter.com/EdrakMu"
          className="float float2"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <i className="fa-brands fa-twitter my-float"></i>
          </span>
        </a>
        <a
          href="https://youtube.com/channel/UCGYYfQjb46UlIHP1-a7tLjg"
          className="float"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <i className="fa-brands fa-youtube my-float"></i>
          </span>
        </a></> : ""}

    </div>
  );
};

export default SocialIcons;
