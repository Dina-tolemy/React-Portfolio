import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="projectFooter footer">
        <p className="footerName">Dina Eltolemy  {" "}{" "} <a href="https://www.linkedin.com/in/dina-el-tolemy-b80873157/" >
          <i class={"fa fa-linkedin"} style={{ fontSize: 18 }}></i></a>{" "}{" "}
          <a href="https://github.com/Dina-tolemy">
          <i className={"fa fa-github-alt"} style={{ fontSize: 18 }}></i></a>
          </p>
      </div>
    </div>
  );
}