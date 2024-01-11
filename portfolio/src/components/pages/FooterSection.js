import React from "react";
import Link from "../Link.js";

export default function FooterSection() {
  return (
    <div className="bg-white h-[auto] md:h-[auto] lg:h-[auto] mt-[30vh] px-[10rem] py-[2rem] md:flex md:justify-between  l:flex l:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
      <div>
        <h3 className="font-poppins text-[20px]">Developed by @Yujin </h3>
      </div>
      <div className="flex mt-[1em] md:mt-[-1em] l:mt-[-1em] xl:mt-[-1em] 2xl:mt-[-1em]">
        <div className="mr-2">
          <Link
            url="https://www.facebook.com/clacla.patpat"
            icon="logo-facebook"
            iconSize="large"
            iconColor="#9b6c9a"
          />
        </div>
        <div className="mr-2">
          <Link
            url="https://www.linkedin.com/in/clarise-duque-52a087262/"
            icon="logo-linkedin"
            iconSize="large"
            iconColor="#9b6c9a"
          />
        </div>
        <div>
          <Link
            url="https://twitter.com/i/flow/login?redirect_after_login=%2FYujinCla2017"
            icon="logo-twitter"
            iconSize="large"
            iconColor="#9b6c9a"
          />
        </div>
      </div>
    </div>
  );
}
