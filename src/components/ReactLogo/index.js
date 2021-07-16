import React from "react";
import "./style.scss";

export default (props) => (
  <div id="react" {...props}>
    <div id="inner-ellipse-left"></div>
    <div id="inner-ellipse-top"></div>
    <div id="dot"></div>

    <div id="inner-ellipse-right"></div>

    <div className="atom">
      {/* <div className="atom-nucleus"></div> */}
      <div className="atom-orbit atom-orbit--left atom-orbit--foreground">
        <div className="atom-electron"></div>
      </div>
      <div className="atom-orbit atom-orbit--right atom-orbit--foreground">
        <div className="atom-electron"></div>
      </div>
      <div className="atom-orbit atom-orbit--top atom-orbit--foreground">
        <div className="atom-electron"></div>
      </div>
    </div>
  </div>
);
