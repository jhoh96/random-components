import * as React from "react";
import { useState, useEffect } from "react";

// required components

// assets
import logo from "../../assets/img/venus_logo_main.png";

// css
import "../styling/headerStyling.scss";

/**
 *
 * @param fixedTop if true : fixes header at top of screen otherwise to relative parent container
 * @returns
 */
export default function VenusHeaderMobile(props: any) {
  const { transparent, fixedTop } = props;
  const attr: any = {
    position: fixedTop ? "fixed" : "absolute",
    top: fixedTop ? 0 : 0,
    background: transparent ? "transparent" : "white",
    zIndex: 999,
  };

  return (
    <div className="mobile-header-container" style={attr}>
      <img src={logo} />
    </div>
  );
}
