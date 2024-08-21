import { NavLink } from "react-router-dom";

export default function Header() {
  const toggleNav = () => {
    const toggleButtons = document.querySelectorAll(".nav-button");
    const navBox = document.querySelector(".header-inner");

    toggleButtons.forEach((button) => button.classList.toggle("active"));
    navBox.classList.toggle("active");
  };

  return (
    <div className="header">
      <img className="logo" src="/src/images/shared/logo.svg" alt="logo" />
      <img
        className="nav-button active"
        src="/src/images/shared/icon-hamburger.svg"
        alt="open-nav"
        onClick={toggleNav}
      />
      <img
        className="nav-button close"
        src="/src/images/shared/icon-close.svg"
        alt="close-nav"
        onClick={toggleNav}
      />
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
