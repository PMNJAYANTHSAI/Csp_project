import { useRef } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Abb from "../image/projectimg.jpg";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tybgw0l",
        "template_yz5vjri",
        form.current,
        "P5YD7tp6RNxQa-Oh1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={Abb} title="About" btnClass="hide" />
      <div>
        <b>
          <h1>
            Welcome to our farming website - Cultivating Connections, Nurturing
            Nature.
          </h1>
        </b>
        <p>
          <b>
            At INDF, we believe in the beauty and bounty that Mother Earth
            provides. Our passion for sustainable farming practices and our love
            for wholesome, fresh produce drive us to cultivate a community that
            celebrates the essence of agriculture.
          </b>
        </p>
        <h2>
          <b> 🌱About Us:</b>
        </h2>
        <p>
          <b>
            At the heart of our farm lies a commitment to sustainable and
            ethical farming. We take pride in growing a diverse range of crops
            with utmost care for the environment. From juicy tomatoes to crisp
            lettuce, each harvest is a testament to our dedication to providing
            you with the finest, farm-fresh produce.
          </b>
        </p>
        <b>
          <p>
            Farm-to-Table Philosophy: We follow a farm-to-table philosophy,
            ensuring that the journey from our fields to your plate is as short
            and direct as possible. This guarantees that you not only receive
            the freshest produce but also support local agriculture and reduce
            your carbon footprint.{" "}
          </p>
        </b>
        <p>
          <b>
            Our Mission: Our mission is to cultivate a sense of community around
            the shared joy of farm-fresh goodness. Through education, events,
            and a commitment to sustainable practices, we aim to inspire a
            deeper connection between people and the food they consume.
          </b>
        </p>

        <p>
          <b>
            Have Questions or Suggestions? We're here to help! If you have any
            queries, or feedback, or simply want to chat about farming, feel
            free to reach out to us. Use the textbox below to send us a message,
            and we'll respond with enthusiasm and a touch of farming flair!
            🌻👩‍🌾👨‍🌾 Thank you for joining us on this journey of growth and
            sustainability. Let's sow the seeds of a healthier, happier world
            together!
          </b>
        </p>
        <h3>
          <b>🌿🌾 INDF Team</b>
        </h3>
      </div>
      <section>
        <div className="container">
          <h2 className="text-center">GET IN TOUCH</h2>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="form-control card flex-center flex-column"
          >
            <div>
              <input
                type="text"
                placeholder="Name"
                name="user_name"
                className="form-control mb-2"
                style={{ width: "300px" }}
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              name="user_Email"
              className="form-control mb-2"
              style={{ width: "300px" }}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="form-control mb-2"
              style={{ width: "300px" }}
              required
            />
            <textarea
              name="message"
              className="form-control mb-2"
              style={{ width: "300px", height: "100px" }}
              placeholder="Your message"
              required
            ></textarea>

            <button
              type="submit"
              style={{ width: "200px" }}
              className="primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
