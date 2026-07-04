import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const hideMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className="nav-wrapper">
        <div
          className={`menu-icon ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <nav id="nav" className={menuOpen ? "active" : ""}>
          <ul>
            <li>
              <a href="#section-1" onClick={hideMenu}>
                Hjem
              </a>
            </li>
            <li>
              <a href="#section-2" onClick={hideMenu}>
                Aktuelt
              </a>
            </li>
            <li>
              <a href="#section-3" onClick={hideMenu}>
                Båtplasser
              </a>
            </li>
            <li>
              <a href="#section-4" onClick={hideMenu}>
                Galleri
              </a>
            </li>
            <li>
              <a href="#section-5" onClick={hideMenu}>
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main>
        {/* Hero */}
        <section id="section-1">
          <header className="header">
            <h1>Talvik Båtforening</h1>

            <div className="social-media-icons">
              <a
                href="https://www.facebook.com/groups/763919026993220"
                className="fa fa-facebook"
                target="_blank"
                rel="noreferrer"
              ></a>

              <a href="#" className="fa fa-instagram"></a>

              <a href="#" className="fa fa-twitter"></a>
            </div>
          </header>
        </section>

        {/* Aktuelt */}
        <section id="section-2">
          <h2>Aktuelt</h2>

          <Link to="/aktuelt">Aktuelle nyheter</Link>

          <img
            src="/images/talvik_bf.jpg"
            alt="Talvik Båthavn"
            className="main-image"
          />
        </section>

        {/* Båtplasser */}
        <section id="section-3">
          <h2>Båtplasser kommer snart</h2>

          <div className="batplass">
            <article>
              <h3>Liste over båtplasser</h3>

              <ul>
                <li>Plass 1</li>
              </ul>

              <h3>Venteliste</h3>

              <ul>
                <li>Venteplass 1</li>
              </ul>

              <h3>Melde ønske om båtplass</h3>

              <a href="mailto:example@example.com">
                Send e-post
              </a>
            </article>
          </div>
        </section>

        {/* Galleri */}
        <section id="section-4">
          <h2>Galleri</h2>

          <div className="image-container">
            <img
              src="/images/redningselskapet.jpg"
              alt="Redningsselskapet"
              className="small-image"
            />

            <img
              src="/images/redningselskapet.jpg"
              alt="Redningsselskapet"
              className="small-image"
            />

            <img
              src="/images/redningselskapet.jpg"
              alt="Redningsselskapet"
              className="small-image"
            />
          </div>
        </section>

        {/* Kontakt */}
        <section id="section-5">
          <h3>Kontakt oss</h3>
        </section>

        <footer className="footer">
          <small>
            <img
              src="/images/Laykajenta Design.jpg"
              alt="Laykajenta Design"
              width="30"
            />{" "}
            © Laykajenta Design. All rights reserved
          </small>
        </footer>
      </main>
    </>
  );
}