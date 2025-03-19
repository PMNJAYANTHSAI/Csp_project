import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import "./Contact.css";
import JaiImg from "../image/PHOTO.jpeg";
import VamaImg from "../image/vamakeswari.jpg";
import BaluImg from "../image/Balu.jpg";
import GopiImg from "../image/gopi.jpg";
import Santhosh from "../image/santhosh.jpg";
function Contact() {
  let message =
    "these are many variations of passages of lorem ipsum \n available but the majority is not get ready to start m";
  return (
    <div>
      <Navbar />

      <section className="section-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="section-title">
                <b>The team Behind pacifico</b>
              </h2>
              <p className="section-subtitle">
                <b>{message}</b>
              </p>
            </div>

            <div className="col-sm-4">
              <div className="team-item">
                <img src={JaiImg} className="team-img" alt="pic" />
                <h3>
                  <b>P.JAYANTH</b>
                </h3>
                <div className="team-info">
                  <p>
                    <b>APP DESIGNER</b>
                  </p>
                  <p>
                    <b>
                      He is the creator of this app and has a great knowledge of
                      organic farming.
                    </b>
                  </p>

                  <ul className="team-icon">
                    <li>
                      <a
                        href="https://twitter.com/21471a434658005?t=hGgc_EtSmlZiIcE9xyrBHA&s=09"
                        className="twitter"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/pawan.kalayan.7140?mibextid=ZbWKwL"
                        className="facebook"
                      >
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/p.jayanth_jai?igshid=NGExMmI2YTkyZg=="
                        className="instagram"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/PMNJAYANTHSAI"
                        className="github"
                      >
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/pmn-jayanth-sai-b49829239"
                        className="linkedin"
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-item">
                <img src={VamaImg} className="team-img" alt="pic" />
                <h3>
                  <b>S.VAMAKESWARI</b>
                </h3>
                <div className="team-info">
                  <p>
                    <b>APP DESIGNER</b>
                  </p>
                  <p>
                    <b>
                      She is a student at NEC and has a great knowledge of
                      organic farming.
                    </b>
                  </p>

                  <ul className="team-icon">
                    <li>
                      <a
                        href="https://twitter.com/vamakeswari?t=axiYVSFN_ImFlHgX7tPvjw&s=08"
                        className="twitter"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=100094577252806&mibextid=ZbWKwL"
                        className="facebook"
                      >
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="instagram">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/SVR-178" className="github">
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/sunkara-vamakeswari-1575b7267"
                        className="linkedin"
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-item">
                <img src={Santhosh} className="team-img" alt="pic" />
                <h3>
                  <b>SANTHOSH</b>
                </h3>
                <div className="team-info">
                  <p>
                    <b>STUDENT AT NEC</b>
                  </p>
                  <p>
                    <b>
                      He is the creator of this app and has a great knowledge of
                      organic farming.
                    </b>
                  </p>

                  <ul className="team-icon">
                    <li>
                      <a
                        href="https://twitter.com/sunnysanthosh01?t=CNhfAfJj54HXNshkkHad6g&s=08"
                        className="twitter"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/santhu.dontha.9?mibextid=ZbWKwL"
                        className="facebook"
                      >
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/_sunny._.01_?igshid=MzNlNGNkZWQ4Mg=="
                        className="instagram"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/DSanthosh143"
                        className="github"
                      >
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/dontha-santhosh-kumar-goud-574ab7283"
                        className="linkedin"
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <div className="team-item">
                <img src={BaluImg} className="team-img" alt="pic" />

                <b>
                  {" "}
                  <h3>
                    <b>BALA KRISHNA</b>
                  </h3>
                </b>
                <div className="team-info">
                  <b>
                    <p>STUDENT AT NEC</p>
                  </b>
                  <b>
                    <p>
                      The new member is a designer with a great knowledge of
                      organic farming.
                    </p>
                  </b>

                  <ul className="team-icon">
                    <li>
                      <a
                        href="https://twitter.com/balu_reddy97?t=AqL2Z7dlBZ5yN5vtPov2fw&s=09"
                        className="twitter"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/sivareddy.katti.1?mibextid=ZbWKwL"
                        className="facebook"
                      >
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/mr_beast_reddy?igshid=NGExMmI2YTkyZg=="
                        className="instagram"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/BalaKrishnaReddy97"
                        className="github"
                      >
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/balakrishna-reddy-a99531254"
                        className="linkedin"
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="team-item">
                <img src={GopiImg} className="team-img" alt="pic" />
                <h3>
                  <b>M.GOPI</b>
                </h3>

                <div className="team-info">
                  <b>
                    {" "}
                    <p>Student at NEC</p>
                  </b>
                  <b>
                    {" "}
                    <p>
                      The another new member is a designer with a great
                      knowledge of organic farming.
                    </p>
                  </b>

                  <ul className="team-icon">
                    <li>
                      <a
                        href="https://twitter.com/Gopiyadv48875?t=15CE8kbHrBOjL-eaGY7SXA&s=09"
                        className="twitter"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/gopiyadav.marri.7?mibextid=ZbWKwL"
                        className="facebook"
                      >
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/its_me_rock__star__143?igshid=NGExMmI2YTkyZg=="
                        className="instagram"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/GopiYadav970"
                        className="github"
                      >
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/m-gopi-7b9321284"
                        className="linkedin"
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
