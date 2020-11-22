import React, { useState } from "react";
import "./App.css";
import "./header.css";
import "./services.css";
import "./packages.css";
import "./footer.css";
import "./team.css";
import "./testimonial.css";
import "./blog.css";
import Cards from "./cards/cards";
// import { Glide } from "react-glide";
import ControlledCarousel from "./slider";
import logo from "./assets/logo.png";
import gabage from "./assets/icons8-garbage_truck.png";
import beryl from "./assets/beryl.jpg";
import afua from "./assets/afua.jpg";
import goal1 from "./assets/goal1.jpg";
import goal2 from "./assets/goal2.jpg";
import goal3 from "./assets/goal3.png";
import goal4 from "./assets/goal4.png";
import slider1 from "./assets/slider1.jpg";
import slider2 from "./assets/slider2.jpg";
import slider3 from "./assets/img1.jpg";
function App() {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <header className="header">
        <div
          style={{
            height: 100,
            backgroundColor: "transparent",
            padding: "0px 20px",
          }}
          className="nav"
        >
          <div>
            <img src={logo} style={{ width: 200, height: "50%" }} alt="logo" />
          </div>
          <ul
            className={
              showMenu ? "nav-container active " : "nav-container close"
            }
          >
            {["Home", "Services", "Packages", "Blog", "About Us"].map(
              (nav, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <a
                      style={{ color: "#fff", textDecoration: "none" }}
                      href={`#${nav.toLowerCase()}`}
                    >
                      {nav}
                    </a>
                  </li>
                );
              }
            )}
          </ul>
          <div className="nav-menu">
            <i
              onClick={() => {
                setshowMenu(!showMenu);
              }}
              style={{ color: "#116939" }}
              className="material-icons"
            >
              {showMenu ? "close" : "menu"}
            </i>
          </div>
        </div>

        <div className="message-container">
          <span className="message">
            HOME & COMMERCIAL WASTE DISPOSAL AT YOUR CONVENIENCE
          </span>
        </div>
      </header>
      <div id="services">
        <div className="services-main-1">
          <div className="service-header-part-1">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: 200,
              }}
            >
              <span style={{ fontSize: "25px", color: "#fff", width: 50 }}>
                OUR <br /> SERVICES
              </span>
              <span
                style={{ color: "#fff", fontSize: "30px" }}
                className="material-icons"
              >
                miscellaneous_services
              </span>
            </div>
            <span className="service-header-part-1-text-exp">
              Our services focus on Convienience to our customers as well as
              adding up to make a clean environment
            </span>
            <span className="service-header-part-1-service">SERVICES</span>
          </div>

          <div className="service-header-part-2"></div>
          <div className="service-header-part-3">
            <img style={{ width: 50, height: 55 }} src={gabage} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "80%",

                justifyContent: "space-evenly",
                paddingLeft: 10,
              }}
            >
              <span>Pick-up and disposal of waste</span>
              <span>Sale of recycleable waste products</span>
              <span>Buy cleaning tools and equipments from us.</span>
            </div>
          </div>
        </div>
        <div className="services-main-2">
          {[
            { icon: "get_app", text: "Download  the app on Playstore." },
            { icon: "done", text: "Sign up with details." },
            {
              icon: "event_available",
              text: "Request, schedule or book time  to pick up waste.",
            },
            { icon: "map", text: "Enter location for pick-up." },
            {
              icon: "photo_camera",
              text:
                "Take a picture of refuse to be picked up and get your qouted fee.",
            },
            {
              icon: "payments",
              text: "Pay through Momo or hard cash on pickup.",
            },
          ].map((item, index) => {
            return (
              <div className="services-list-item">
                <span
                  style={{
                    fontSize: 50,
                    padding: "20px 20px",
                    backgroundColor: "rgba(196, 196, 196, 0.4)",
                    borderRadius: 50,
                  }}
                  class="material-icons"
                >
                  {item.icon}
                </span>
                <span style={{ marginLeft: 5, width: "40%" }}>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="testimonial">
        <h2>TESTIMONIAL</h2>
        <ControlledCarousel />
      </div>
      <div id="packages">
        <h2>Packages</h2>
        <span className="packages-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          aliquet mi nisi, non tempus diam rhoncus at. Sed odio augue,
          sollicitudin sed egestas pretium, tempus ut ex. Donec efficitur sem
          sed velit porta, a luctus eros tempus. Fusce venenatis in libero nec
          tristique. Praesent imperdiet, mi vel convallis auctor, dolor tortor
          sagittis est, eu egestas lectus enim eget orci.
        </span>
        <div className="">
          <Cards />
        </div>
      </div>
      <div id="blog">
        <h2>LATEST BLOG</h2>
        <div className="blog-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </div>
        <div className="blog-content2">
          <div className="image-overlay">
            <img
              style={{ width: 400, height: 250, display: "block" }}
              src={slider1}
            />
            {/* fsdfskdf */}
            <div className="overlay overlayright">
              <div className="text">More</div>
            </div>
          </div>
          <div className="image-overlay">
            <img style={{ width: 400, height: 250 }} src={slider2} />
            {/* fsdfskdf */}
            <div className="overlay overlayright">
              <div className="text">More</div>
            </div>
          </div>
        </div>
      </div>
      <div id="about us">
        <div className="team-vision-main">
          <div className="team-vision-1">
            <span className="team-vision-heading">THE TEAM</span>
            <span className="team-vision-content">
              At TrashSmart we care about the environment as well as the health
              of people and pets. Our mission is to be a committed company well
              known in communities for its provision of exceptional service
              through integrity, understanding the needs of the customers and
              creating convenience by helping to create a clean environment.
            </span>
            <div className="team-images">
              <div>
                <img
                  src={afua}
                  style={{ width: 200, height: "50%" }}
                  alt="Afua Asarebea"
                />
                <br />
                <span>
                  AFUA ASAREBEA OPARE-BAIDU
                  <br /> TEAM & TECH LEAD
                  <br />
                  CO-FOUNDER
                </span>
              </div>
              <div>
                <img
                  src={beryl}
                  style={{ width: 200, height: "50%" }}
                  alt="Beryl Duut"
                />
                <br />
                <span>
                  BERYL JOYCELYN BAABE DUUT
                  <br /> PRODUCT & RESEARCH LEAD
                  <br />
                  CO-FOUNDER
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="team-vision-1">
              <span className="team-vision-heading">VISION</span>
              <span className="team-vision-content">
                We aim to be a world class waste management company that ensures
                public health, create a clean environment and achieve
                environmental preservation through re-using, repairing,
                composting or recycling back into the system.
              </span>
              <div className="goals">
                <span>
                  By 2030 we will love to contritube to the SDG by providing
                  these
                </span>
                <div className="goals-images">
                  <img
                    className="goals-images-mobile"
                    src={goal1}
                    style={{ width: 150, height: "50%" }}
                    alt="image"
                  />
                  <img
                    src={goal2}
                    style={{ width: 150, height: "50%" }}
                    alt="image"
                  />
                  <img
                    src={goal3}
                    style={{ width: 150, height: "50%" }}
                    alt="image"
                  />
                  <img
                    src={goal4}
                    style={{ width: 150, height: "50%" }}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-main">
          <div className="footer-1">
            <div className="footer-title">
              <span class="material-icons">location_on</span>
            </div>
            <div>
              <span>TRASH SMART</span>
              <br />
              <span>
                Hse 49 - SE 29056, <br />
                2nd Turn Behind Mizpah School ,<br /> Kentinkrono - Kumasi.
              </span>
            </div>
          </div>
          <div className="footer-2">
            <div className="footer-contact-1">
              <span>
                {" "}
                <span class="material-icons">call</span>+(233) 0501379433
              </span>
              <br />
              <div>
                <span>
                  <span class="material-icons">mail</span> trashapp@gmail.com
                </span>
              </div>
            </div>
            <div>
              <span>
                {" "}
                <span class="material-icons">chat</span>+(233) 0556710716
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
