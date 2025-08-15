import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img src={assets.logo} alt="" width={150} />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @Sanskar Shukla | All right reserved.
      </p>
      <div className="flex gap-2.5 ">
        <a
          href="https://www.linkedin.com/in/sanskar2003"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.facebook_icon} alt="" width={35} />
        </a>
        <a
          href="https://x.com/sanskar0627"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.twitter_icon} alt="" width={35} />
        </a>
        <a
          href="https://www.instagram.com/sanskar0627"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.instagram_icon} alt="" width={35} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
