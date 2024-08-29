import { NavLink } from "react-router-dom";

export default function Header() {
  const toggleNav = () => {
    const toggleButtons = document.querySelectorAll(".nav-button");
    const navBox = document.querySelector(".nav-box");
    const links = document.querySelectorAll("a");

    toggleButtons.forEach((button) => button.classList.toggle("active"));
    links.forEach((link) => link.classList.toggle("hidden"));
    links.forEach((link) => link.classList.toggle("visible"));
    navBox.classList.toggle("active");
  };

  return (
    <div className="header">
      <img className="logo" src="../images/shared/logo.svg" alt="logo" />
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
            <NavLink className="hidden" to={"/"} onClick={toggleNav}>
              <span>00</span> HOME
            </NavLink>
            <div>
              <NavLink className="hidden" to={"destination"} onClick={toggleNav}>
                <span>01</span> DESTINATION
              </NavLink>
            </div>
            <div>
              <NavLink className="hidden" to={"crew"} onClick={toggleNav}>
                <span>02</span> CREW
              </NavLink>
            </div>
            <div>
              <NavLink className="hidden" to={"technology"} onClick={toggleNav}>
                <span>03</span> TECHNOLOGY
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
