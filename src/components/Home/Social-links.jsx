import React from 'react';

function Sociallinks() {
  return (
    <div className="section no-top-padding">
      <div className="background-shade">
        <div className="wrapper shade-wrapper" />
        <div className="background-cover" />
      </div>
      <div className="wrapper">
        <div className="about-wrapper">
          <div className="clip">
            <h1 className="large-heading">Built for the future</h1>
          </div>
          <div className="half-dual">
            <div className="clip">
              <p className="body-display large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec aliquet odio. Cras
                convallis eget elit et efficitur. Pellentesque non risus sed elit iaculis tincidunt
                ac dictum lorem. Aliquam in pulvinar lectus. Integer id condimentum libero, a
                sagittis lacus. Nunc vitae metus libero. Proin pellentesque, diam non fermentum
                varius, erat diam suscipit eros, ut dignissim quam nisl at lectus. Donec a neque a
                ligula iaculis iaculis. Sed mattis vehicula dapibus. Sed blandit libero ut turpis
                maximus, ut luctus arcu imperdiet. Ut eget lacinia velit.
              </p>
            </div>
            <div className="box-two">
              <div className="slide-image team-gallery team-one" />
              <div className="slide-image team-gallery team-two" />
              <div className="slide-image team-gallery team-three" />
              <div className="slide-image team-gallery team-four" />
            </div>
            <div className="box">
              <div className="social-items">
                <a
                  href="https://webflow.com/"
                  target="_blank"
                  className="social-block w-inline-block"
                  rel="noreferrer"
                >
                  <img src="/path-to-icons/twitter.svg" alt="Twitter" className="social-icon" />
                  <div className="social-cred">
                    <div className="social-text">@webflow</div>
                  </div>
                  <div className="overlay-social" />
                  <div className="circle-hover white" />
                </a>
                <a
                  href="https://webflow.com/"
                  target="_blank"
                  className="social-block tl w-inline-block"
                  rel="noreferrer"
                >
                  <img src="/path-to-icons/linkedin.svg" alt="LinkedIn" className="social-icon" />
                  <div className="social-cred">
                    <div className="social-text">@webflow</div>
                  </div>
                  <div className="overlay-social" />
                  <div className="circle-hover white" />
                </a>
                <a
                  href="https://webflow.com/"
                  target="_blank"
                  className="social-block trl w-inline-block"
                  rel="noreferrer"
                >
                  <img
                    src="/path-to-icons/indie-hackers.svg"
                    alt="Indie Hackers"
                    className="social-icon"
                  />
                  <div className="social-cred">
                    <div className="social-text">@webflow</div>
                  </div>
                  <div className="overlay-social" />
                  <div className="circle-hover white" />
                </a>
                <a
                  href="https://webflow.com/"
                  target="_blank"
                  className="social-block tl-tr w-inline-block"
                  rel="noreferrer"
                >
                  <img src="/path-to-icons/medium.svg" alt="Medium" className="social-icon" />
                  <div className="social-cred">
                    <div className="social-text">@webflow</div>
                  </div>
                  <div className="overlay-social" />
                  <div className="circle-hover white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sociallinks;
