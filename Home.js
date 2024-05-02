import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
//import { AccordionItem } from "react-bootstrap";
function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="login">
        <div className="login__header">
          <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
            alt="name"
          ></img>
          <button
            className="login__button"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign in
          </button>
        </div>

        <div className="login__body">
          <h1>Unlimited movies, TV shows and more</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <form className="login__form">
            <input type="email" placeholder="Email address"></input>
            <button
              onClick={() => {
                navigate("/Signup");
              }}
            >
              Get Stated
            </button>
          </form>
        </div>
        <div className="login__gradient"></div>
      </div>

      <div className="article">
        <div className="p1" style={{ paddingTop: "100px", color: "white" }}>
          <h1>Enjoy on your TV</h1>
          <h4>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, <br />
            Apple TV, Blu-ray players and more.
          </h4>
        </div>

        <div>
          <img
            className="pic1"
            src="https://us.123rf.com/450wm/vantageds/vantageds2003/vantageds200300233/143053407-uk-march-2020-tv-television-netflix-selection-page-better-call-saul-original-series.jpg"
            alt="tv"
            style={{ borderRadius: "4px" }}
          />
        </div>
        <br></br>
      </div>
      <div className="article">
        <div className="p4" style={{ paddingTop: "100px", color: "white" }}>
          <h1 className="text2">Download your shows to watch offline</h1>
          <h4 className="para2">
            Save your favourites easily and always have something to watch.
          </h4>
        </div>

        <div>
          <img
            className="pic2"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="img"
            style={{ borderRadius: "4px" }}
          />
        </div>
      </div>
      <div className="article">
        <div className="p1" style={{ paddingTop: "100px", color: "white" }}>
          <h1>Watch everywhere</h1>
          <h4>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h4>
        </div>

        <div>
          <img
            className="pic3"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            alt="img"
          />
        </div>
      </div>
      <div className="article">
        <div className="p1" style={{ paddingTop: "100px", color: "white" }}>
          <h1 className="text3">Create profiles for kids</h1>
          <h4 className="para3">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </h4>
        </div>

        <div>
          <img
            className="pic4"
            src="https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
            alt="img"
          />
        </div>
      </div>
      <div className="article">
        <h1 className="text4">Frequently Asked Questions</h1>
        <div className="acc">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is Netflix?</Accordion.Header>
              <Accordion.Body>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want, without a single ad – all
                for one low monthly price. There's always something new to
                discover, and new TV shows and movies are added every week!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How much does Netflix cost</Accordion.Header>
              <Accordion.Body>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Where can i watch</Accordion.Header>
              <Accordion.Body>
                Watchanywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles. You can also download
                your favourite shows with the iOS, Android, or Windows 10 app.
                Use downloads to watch while you're on the go and without an
                internet connection. Take Netflix with you anywhere.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>How do i cancel?</Accordion.Header>
              <Accordion.Body>
                Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>what can i watch on Netflix?</Accordion.Header>
              <Accordion.Body>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Is netflix good for kids?</Accordion.Header>
              <Accordion.Body>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and films in their own space. Kids profiles come with
                PIN-protected parental controls that let you restrict the
                maturity rating of content kids can watch and block specific
                titles you don’t want kids to see.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <form className="article">
        <footer className="foot">
          <div className="footer_one">
            Questions?call 000-800-919-1694
            <ul className="list1">
              <li>FQA</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>SpeedTest</li>
            </ul>
            <ul className="list2">
              <li>Helper Center</li>
              <li>jobs</li>
              <li>Cookies preference</li>
              <li>Legal Notices</li>
            </ul>
            <ul className="list3">
              <li>Accounts</li>
              <li>Ways to watch</li>
              <li>Corporte information</li>
              <li>only on Netflix</li>
            </ul>
            <ul className="list4">
              <li>Media Center</li>
              <li>Terms of Use</li>
              <li>Concats</li>
            </ul>
          </div>
        </footer>
      </form>
    </div>
  );
}

export default Home;
