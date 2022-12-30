import React from "react";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div>
      <header className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg main-nav px-0">
            <a className="navbar-brand" href="/mojo"></a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mainMenu"
              aria-controls="mainMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar icon-bar-1" />
              <span className="icon-bar icon-bar-2" />
              <span className="icon-bar icon-bar-3" />
            </button>
            <div className="collapse navbar-collapse" id="mainMenu">
              <ul className="navbar-nav ml-auto text-uppercase f1">
                <li>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "15px",
                    }}
                    href="#home"
                    className="active active-first"
                  >
                    home
                  </a>
                </li>
                <li>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "15px",
                    }}
                    href="#about"
                  >
                    Add book
                  </a>
                </li>
                <li>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "15px",
                    }}
                    href="#service"
                  >
                    SignUp
                  </a>
                </li>

                <li>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "15px",
                    }}
                    href="#team"
                  >
                    team
                  </a>
                </li>

                <li>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "15px",
                    }}
                    href="#contact"
                  >
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
