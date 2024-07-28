import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [currentPageId, setCurrentPageId] = useState("home");


  function handleActivePage(e) {
    e.preventDefault();
    const currentPage = document.querySelector("a.active");

    if (currentPage !== e.target) {
      currentPage.classList.remove("active");
    }
    setTimeout(() => {
      e.target.classList.add("active");
    }, 100);

    // if (currentPageId !== e.target.firstChild.id) {
    //   document.getElementById(currentPageId).classList.remove("active");
    //   setCurrentPageId(e.target.firstChild.id);
    // }
    // setTimeout(() => {
    //   e.target.firstChild.classList.add("active");
    // }, 150);
  }

  return (
    <div className="header">
      <img src="src/images/shared/logo.svg" alt="logo" />
      <div className="header-inner">
        <hr />
        <div className="nav-box">
          <nav>
            <div onClick={(e) => handleActivePage(e)}>
              <Link to={"/"} id="home" className="active" >
                <span>00</span> HOME
              </Link>
            </div>
            <div onClick={(e) => handleActivePage(e)}>
              <Link to={"/destination"} id="dest">
                <span>01</span> DESTINATION
              </Link>
            </div>
            <div onClick={(e) => handleActivePage(e)}>
              <Link to={"/crew"} id="crew">
                <span>02</span> CREW
              </Link>
            </div>
            <div onClick={(e) => handleActivePage(e)}>
              <Link to={"/technology"} id="tech">
                <span>03</span> TECHNOLOGY
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
