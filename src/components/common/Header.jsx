// Init
import React from 'react';
import Headerimage from '../../assets/605a72f1fbb8da6b3e99af1a_Portrait001.jpg';
import Headerimg2 from '../../assets/605a72f8b8ab6349d07d0336_Portrait002.jpg';
import Headerimg3 from '../../assets/60593bbde727d976f2a6ff8d_arrow-right-Dark-filled(24x24)@2x.svg';
import Headerimg4 from '../../assets/605a72fe9bbd971a808182ae_Portrait003.jpg';
// Component
export default function Header() {
  return (
    <div>
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="nav-bar w-nav"
        style="will-change: width, height; height: 100px"
      >
        <div
          className="off-page-menu"
          style="
          transform: translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
            rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
          transform-style: preserve-3d;
          display: none;
        "
        >
          <div className="dual-title-wrapper">
            <div id="w-node-_1331348f-648e-6e60-41f3-74945daf5fc1-5daf5fbe">
              <h2>Speakers</h2>
            </div>
            <div id="w-node-_1331348f-648e-6e60-41f3-74945daf5fc4-5daf5fbe">
              <a
                href="https://webflow-path-one.webflow.io/#"
                className="button dark w-inline-block"
              >
                <div>Contact</div>
              </a>
            </div>
          </div>
          <div className="quick-list-wrapper w-dyn-list">
            <div id="scrollbar" role="list" className="speaker-quick-list w-dyn-items">
              <div role="listitem" className="quick-list-collection-item w-dyn-item">
                <a
                  data-w-id="1331348f-648e-6e60-41f3-74945daf5fcb"
                  href="https://webflow-path-one.webflow.io/speakers/jessica-point"
                  className="quick-list-item w-inline-block"
                >
                  <h3>Jessica Point</h3>
                  <img
                    src="./Webflow Path One new_files/60593bbde727d976f2a6ff8d_arrow-right-Dark-filled(24x24)@2x.svg"
                    loading="lazy"
                    width="24"
                    alt=""
                    className="quick-link-arrow"
                    style="
                    opacity: 0;
                    transform: translate3d(-12px, 0px, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                  />
                  <div className="quick-list-image-hover quick-list" style="width: 0px">
                    <div
                      style="
                   
                      transform: translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1)
                        rotateX(0deg) rotateY(0deg) rotateZ(0deg)
                        skew(0deg, 0deg);
                      transform-style: preserve-3d;
                      opacity: 0;
                      display: none;
                    "
                      className="speaker-image quick-list"
                    >
                      <img src={Headerimage} alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div role="listitem" className="quick-list-collection-item w-dyn-item">
                <a
                  data-w-id="1331348f-648e-6e60-41f3-74945daf5fcb"
                  href="https://webflow-path-one.webflow.io/speakers/john-bullin"
                  className="quick-list-item w-inline-block"
                >
                  <h3>John Bullin</h3>
                  <img
                    src="./Webflow Path One new_files/60593bbde727d976f2a6ff8d_arrow-right-Dark-filled(24x24)@2x.svg"
                    loading="lazy"
                    width="24"
                    alt=""
                    className="quick-link-arrow"
                    style="
                    opacity: 0;
                    transform: translate3d(-12px, 0px, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                  />
                  <div className="quick-list-image-hover quick-list" style="width: 0px">
                    <div
                      style="
                      // background-image: url('https://assets.website-files.com/60593a2037760a299a3ee0ec/605a72f8b8ab6349d07d0336_Portrait002.jpg');
                      transform: translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1)
                        rotateX(0deg) rotateY(0deg) rotateZ(0deg)
                        skew(0deg, 0deg);
                      transform-style: preserve-3d;
                      opacity: 0;
                      display: none;
                    "
                      className="speaker-image quick-list"
                    >
                      <img src={Headerimg2} alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div role="listitem" className="quick-list-collection-item w-dyn-item">
                <a
                  data-w-id="1331348f-648e-6e60-41f3-74945daf5fcb"
                  href="https://webflow-path-one.webflow.io/speakers/sam-pann"
                  className="quick-list-item w-inline-block"
                >
                  <h3>Sam Pann</h3>
                  <img
                    src={Headerimg3}
                    loading="lazy"
                    width="24"
                    alt=""
                    className="quick-link-arrow"
                    style="
                    opacity: 0;
                    transform: translate3d(-12px, 0px, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                  />
                  <div className="quick-list-image-hover quick-list" style="width: 0px">
                    <div
                      style="
                      // background-image: url('https://assets.website-files.com/60593a2037760a299a3ee0ec/605a72fe9bbd971a808182ae_Portrait003.jpg');
                      transform: translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1)
                        rotateX(0deg) rotateY(0deg) rotateZ(0deg)
                        skew(0deg, 0deg);
                      transform-style: preserve-3d;
                      opacity: 0;
                      display: none;
                    "
                      className="speaker-image quick-list"
                    >
                      <img src={Headerimg4} alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div role="listitem" className="quick-list-collection-item w-dyn-item">
                <a
                  data-w-id="1331348f-648e-6e60-41f3-74945daf5fcb"
                  href="https://webflow-path-one.webflow.io/speakers/ryan-baser"
                  className="quick-list-item w-inline-block"
                >
                  <h3>Ryan Baser</h3>
                  <img
                    src="./Webflow Path One new_files/60593bbde727d976f2a6ff8d_arrow-right-Dark-filled(24x24)@2x.svg"
                    loading="lazy"
                    width="24"
                    alt=""
                    className="quick-link-arrow"
                    style="
                    opacity: 0;
                    transform: translate3d(-12px, 0px, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                  />
                  <div className="quick-list-image-hover quick-list" style="width: 0px">
                    <div
                      style="
                      background-image: url('https://assets.website-files.com/60593a2037760a299a3ee0ec/605a73058c14c75e9d1b89e3_Portrait004.jpg');
                      transform: translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1)
                        rotateX(0deg) rotateY(0deg) rotateZ(0deg)
                        skew(0deg, 0deg);
                      transform-style: preserve-3d;
                      opacity: 0;
                      display: none;
                    "
                      className="speaker-image quick-list"
                    />
                  </div>
                </a>
              </div>
              <div role="listitem" className="quick-list-collection-item w-dyn-item">
                <a
                  data-w-id="1331348f-648e-6e60-41f3-74945daf5fcb"
                  href="https://webflow-path-one.webflow.io/speakers/tommy-riks"
                  className="quick-list-item w-inline-block"
                >
                  <h3>Tommy Riks</h3>
                  <img
                    src="./Webflow Path One new_files/60593bbde727d976f2a6ff8d_arrow-right-Dark-filled(24x24)@2x.svg"
                    loading="lazy"
                    width="24"
                    alt=""
                    className="quick-link-arrow"
                    style="
                    opacity: 0;
                    transform: translate3d(-12px, 0px, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                  />
                  <div className="quick-list-image-hover quick-list" style="width: 0px">
                    <div
                      style="
                      background-image: url('https://assets.website-files.com/60593a2037760a299a3ee0ec/605a7ad16d04ca785f466a9d_Portrait0018.jpeg');
                      transform: translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1)
                        rotateX(0deg) rotateY(0deg) rotateZ(0deg)
                        skew(0deg, 0deg);
                      transform-style: preserve-3d;
                      opacity: 0;
                      display: none;
                    "
                      className="speaker-image quick-list"
                    />
                  </div>
                </a>
              </div>
              <div role="listitem" className="quick-list-collection-item w-dyn-item">
                <a
                  data-w-id="1331348f-648e-6e60-41f3-74945daf5fcb"
                  href="https://webflow-path-one.webflow.io/speakers/roy-hamle"
                  className="quick-list-item w-inline-block"
                >
                  <h3>Roy Hamle</h3>
                  <img
                    src="./Webflow Path One new_files/60593bbde727d976f2a6ff8d_arrow-right-Dark-filled(24x24)@2x.svg"
                    loading="lazy"
                    width="24"
                    alt=""
                    className="quick-link-arrow"
                    style="
                    opacity: 0;
                    transform: translate3d(-12px, 0px, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                  />
                  <div className="quick-list-image-hover quick-list" style="width: 0px">
                    <div
                      style="
                      background-image: url('https://assets.website-files.com/60593a2037760a299a3ee0ec/605a73145b5d7bb1d90896bf_Portrait006.jpg');
                      transform: translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1)
                        rotateX(0deg) rotateY(0deg) rotateZ(0deg)
                        skew(0deg, 0deg);
                      transform-style: preserve-3d;
                      opacity: 0;
                      display: none;
                    "
                      className="speaker-image quick-list"
                    />
                  </div>
                </a>
              </div>
              <div role="listitem" className="quick-list-collection-item w-dyn-item">
                <a
                  data-w-id="1331348f-648e-6e60-41f3-74945daf5fcb"
                  href="https://webflow-path-one.webflow.io/speakers/cam-brynt"
                  className="quick-list-item w-inline-block"
                >
                  <h3>Cam Brynt</h3>
                  <img
                    src="./Webflow Path One new_files/60593bbde727d976f2a6ff8d_arrow-right-Dark-filled(24x24)@2x.svg"
                    loading="lazy"
                    width="24"
                    alt=""
                    className="quick-link-arrow"
                    style="
                    opacity: 0;
                    transform: translate3d(-12px, 0px, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                  />
                  <div className="quick-list-image-hover quick-list" style="width: 0px">
                    <div
                      style="
                      background-image: url('https://assets.website-files.com/60593a2037760a299a3ee0ec/605a73cb9bbd97391c81844a_Portrait007.jpeg');
                      transform: translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1)
                        rotateX(0deg) rotateY(0deg) rotateZ(0deg)
                        skew(0deg, 0deg);
                      transform-style: preserve-3d;
                      opacity: 0;
                      display: none;
                    "
                      className="speaker-image quick-list"
                    />
                  </div>
                </a>
              </div>
              <div role="listitem" className="quick-list-collection-item w-dyn-item">
                <a
                  data-w-id="1331348f-648e-6e60-41f3-74945daf5fcb"
                  href="https://webflow-path-one.webflow.io/speakers/emily-talley"
                  className="quick-list-item w-inline-block"
                >
                  <h3>Emily Talley</h3>
                  <img
                    src="./Webflow Path One new_files/60593bbde727d976f2a6ff8d_arrow-right-Dark-filled(24x24)@2x.svg"
                    loading="lazy"
                    width="24"
                    alt=""
                    className="quick-link-arrow"
                    style="
                    opacity: 0;
                    transform: translate3d(-12px, 0px, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                  />
                  <div className="quick-list-image-hover quick-list" style="width: 0px">
                    <div
                      style="
                      background-image: url('https://assets.website-files.com/60593a2037760a299a3ee0ec/605a740f5435864f49bbedff_Portrait008.jpeg');
                      transform: translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1)
                        rotateX(0deg) rotateY(0deg) rotateZ(0deg)
                        skew(0deg, 0deg);
                      transform-style: preserve-3d;
                      opacity: 0;
                      display: none;
                    "
                      className="speaker-image quick-list"
                    />
                  </div>
                </a>
              </div>
              <div role="listitem" className="quick-list-collection-item w-dyn-item">
                <a
                  data-w-id="1331348f-648e-6e60-41f3-74945daf5fcb"
                  href="https://webflow-path-one.webflow.io/speakers/carrie-vath"
                  className="quick-list-item w-inline-block"
                >
                  <h3>Carrie Vath</h3>
                  <img
                    src="./Webflow Path One new_files/60593bbde727d976f2a6ff8d_arrow-right-Dark-filled(24x24)@2x.svg"
                    loading="lazy"
                    width="24"
                    alt=""
                    className="quick-link-arrow"
                    style="
                    opacity: 0;
                    transform: translate3d(-12px, 0px, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                  />
                  <div className="quick-list-image-hover quick-list" style="width: 0px">
                    <div
                      style="
                      background-image: url('https://assets.website-files.com/60593a2037760a299a3ee0ec/605a7447444e392a727d2a59_Portrait009.jpeg');
                      transform: translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1)
                        rotateX(0deg) rotateY(0deg) rotateZ(0deg)
                        skew(0deg, 0deg);
                      transform-style: preserve-3d;
                      opacity: 0;
                      display: none;
                    "
                      className="speaker-image quick-list"
                    />
                  </div>
                </a>
              </div>
              <div role="listitem" className="quick-list-collection-item w-dyn-item">
                <a
                  data-w-id="1331348f-648e-6e60-41f3-74945daf5fcb"
                  href="https://webflow-path-one.webflow.io/speakers/terra-daist"
                  className="quick-list-item w-inline-block"
                >
                  <h3>Terra Daist</h3>
                  <img
                    src="./Webflow Path One new_files/60593bbde727d976f2a6ff8d_arrow-right-Dark-filled(24x24)@2x.svg"
                    loading="lazy"
                    width="24"
                    alt=""
                    className="quick-link-arrow"
                    style="
                    opacity: 0;
                    transform: translate3d(-12px, 0px, 0px) scale3d(1, 1, 1)
                      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                    transform-style: preserve-3d;
                  "
                  />
                  <div className="quick-list-image-hover quick-list" style="width: 0px">
                    <div
                      style="
                      background-image: url('https://assets.website-files.com/60593a2037760a299a3ee0ec/605a745e0f86243a8d46ec67_Portrait010.jpeg');
                      transform: translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1)
                        rotateX(0deg) rotateY(0deg) rotateZ(0deg)
                        skew(0deg, 0deg);
                      transform-style: preserve-3d;
                      opacity: 0;
                      display: none;
                    "
                      className="speaker-image quick-list"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="navigation-cover" style="will-change: width, height; height: 0%" />
        <div className="nav-bar-wrapper">
          <a
            href="https://webflow-path-one.webflow.io/"
            aria-current="page"
            className="brand w-nav-brand w--current"
            aria-label="home"
          >
            <div>
              GLIDE<span className="thin-span">SPEAKERS</span>
            </div>
          </a>
          <div className="nav-menu-wrapper">
            <nav role="navigation" className="nav-menu w-nav-menu">
              <a
                href="https://webflow-path-one.webflow.io/"
                aria-current="page"
                className="nav-link w-nav-link w--current"
                style="color: rgb(255, 255, 255)"
              >
                Home
              </a>
              <a
                href="https://webflow-path-one.webflow.io/about"
                className="nav-link w-nav-link"
                style="color: rgb(255, 255, 255)"
              >
                About
              </a>
              <a
                href="https://webflow-path-one.webflow.io/contact"
                className="nav-link w-nav-link"
                style="color: rgb(255, 255, 255)"
              >
                Contact
              </a>
            </nav>
            <div className="speaker-list-icon-wrapper">
              <div className="nav-link mobile-speaker-text" style="color: rgb(255, 255, 255)">
                <div>Speakers</div>
              </div>
              <div data-w-id="1331348f-648e-6e60-41f3-74945daf5fe6" className="speaker-list-icon">
                <div
                  data-is-ix2-target="1"
                  className="lottie-menu"
                  data-w-id="1331348f-648e-6e60-41f3-74945daf5fe7"
                  data-animation-type="lottie"
                  data-src="https://assets.website-files.com/6058fae74428dbc4ec583ba1/60593864414de440edff589d_menu-nav-07-12141d-easey.json"
                  data-loop="0"
                  data-direction="1"
                  data-autoplay="0"
                  data-renderer="svg"
                  data-default-duration="2.4791666666666665"
                  data-duration="0"
                  data-ix2-initial-state="0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 730 630"
                    width="730"
                    height="630"
                    preserveAspectRatio="xMidYMid meet"
                    style="
                    width: 100%;
                    height: 100%;
                    transform: translate3d(0px, 0px, 0px);
                  "
                  >
                    <defs>
                      <clippath id="__lottie_element_2">
                        <rect width="730" height="630" x="0" y="0" />
                      </clippath>
                    </defs>
                    <g clipPath="url(#__lottie_element_2)">
                      <g transform="matrix(1,0,0,1,365,315)" opacity="1" style="display: block">
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fillOpacity="0"
                            stroke="rgb(18,19,29)"
                            strokeOpacity="1"
                            strokeWidth="55"
                            d=" M-327,-176.5 C-327,-176.5 327,-176.5 327,-176.5"
                          />
                        </g>
                      </g>
                      <g transform="matrix(1,0,0,1,365,315)" opacity="1" style="display: block">
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fillOpacity="0"
                            stroke="rgb(18,19,29)"
                            strokeOpacity="1"
                            strokeWidth="55"
                            d=" M-327,176.5 C-327,176.5 327,176.5 327,176.5"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="menu-button w-nav-button"
              style="-webkit-user-select: text"
              aria-label="menu"
              role="button"
              tabIndex="0"
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <div className="menu-button-text">
                <div>Menu</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" />
      </div>
    </div>
  );
}
