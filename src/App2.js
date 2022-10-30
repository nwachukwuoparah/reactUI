import logo from "./image-web-3-desktop.jpg";
import img1 from "./image-retro-pcs.jpg";
import img2 from "./image-top-laptops.jpg";
import img3 from "./image-gaming-growth.jpg";
import "./App.css";

function App2() {
  return (
    <div className="main">
      <div className="main1">
        <div id="imgdiv">
          <img id="img" src={logo} alt="img" />
          <div className="subDiv">
            <h1 className="mainText">
              {" "}
              The Bright
              <br /> Future of
              <br /> Web 3.0?
            </h1>
            <div>
              <p className="PText">
                We dive into the next evolution of the web that
                <br /> claims to put powers of the platforms back
                <br /> into the hands of the people. But is it really
                <br /> fulifilling its promise?
              </p>
              <button className="button">READ MORE</button>
            </div>
          </div>
          <div className="footer">
            <div className="footer1">
              <img className="img3" src={img1} alt="img" />
              <div className="text3">
                <h2 className="H3">01</h2>
                <a href="H">
                  <h4 className="H1 H3hover">Reviving Retro Pcs</h4>
                </a>
                <p className="P1">
                  What happens when oldPCs
                  <br /> are given morden upgrades?
                </p>
              </div>
            </div>
            <div className="footer2">
              <img className="img2" src={img2} alt="img" />
              <div className="text3">
                <h2 className="H3">02</h2>
                <a href="H">
                  <h4 className="H2 H3hover">Top 10 Laptops of 2022</h4>
                </a>
                <p className="P2">
                  Our best picks for various
                  <br />
                  needs and budgets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="main2">
        <div className="maindiv2">
          <h1 id="new">New</h1>
          <a href="H">
            <h4 className="h4color">Hydrogen VS Electric Cars</h4>
          </a>
          <p className="p">
            Will hydrogen-fueled cars ever catch up
            <br />
            to EVs?
          </p>
          <hr id="hr" />
          <a href="H">
            <h4 className="h4color">The Downsides of AI Artistry</h4>
          </a>
          <p className="p">
            What are the possible adverse effects of
            <br />
            on-demand AI image generation?
          </p>
          <hr id="hr" />
          <a href="H">
            <h4 className="h4color">Is VC Funding Drying Up?</h4>
          </a>
          <p className="p">
            Private funding by VC firms is down 50%
            <br />
            YOY. We take a look at what that means
          </p>
        </div>
        <div className="footer3">
          <img className="img3" src={img3} alt="img" />
          <div className="text3">
            <h2 className="H3">03</h2>
            <a href="H">
              <h4 className="H H3hover">The Growth of Gaming</h4>
            </a>
            <p className="P">
              How the pandenic has sparked
              <br />
              fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App2;
