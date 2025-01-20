import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Destination from "./Destination";
import Experiences from "./Experiences";
import Tours from "./Tours";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <h1 className="homeh4">Uganda is the best tourism destination</h1>
      <div className="description">
        <p>We have a variety of tourism cities in Uganda.</p>
        <p>To learn more about tourism destinations, click the link below.</p>
      </div>
      <a
        className="tourism-link"
        href="https://www.google.com/search?q=uganda+tourism+attractions"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'red', textDecoration: 'none' }}
      >
        LINK
      </a>

      <div className="main-container">
        <div id="about">
          <About />
        </div>

        <div id="services">
          <Service />
        </div>

        <div id="contacts">
          <Contact />
        </div>

        <div id="destination">
          <Destination />
        </div>

        <div id="experiences">
          <Experiences />
        </div>

        <div id="tours">
          <Tours />
        </div>

        <div id="blogs">
          <Blogs />
        </div>
      </div>
    </div>
  );
};

export default Home;
