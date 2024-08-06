import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <img src="src/images/shared/logo.svg" alt="logo" />
      <div className="header-inner">
        <hr />
        <div className="nav-box">
          <nav>
            <NavLink to={"/"}>
              <span>00</span> HOME
            </NavLink>
            <NavLink to={"destination"}>
              <span>01</span> DESTINATION
            </NavLink>
            <NavLink to={"crew"}>
              <span>02</span> CREW
            </NavLink>
            <NavLink to={"technology"}>
              <span>03</span> TECHNOLOGY
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}
