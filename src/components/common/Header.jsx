/* eslint-disable react/style-prop-object */
// Init
import React from 'react';

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
        style={{ willChange: 'width, height', height: '100px' }}
      >
        <div
          className="off-page-menu"
          style={{
            transform:
              'translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
            display: 'none',
          }}
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
                    style={{
                      opacity: 0,
                      transform:
                        'translate3d(-12px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  />
                  <div className="quick-list-image-hover quick-list" style={{ width: '0px' }}>
                    <div
                      style={{
                        backgroundImage:
                          'url(https://assets.website-files.com/60593a2037760a299a3ee0ec/605a72f1fbb8da6b3e99af1a_Portrait001.jpg)',
                        transform:
                          'translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                        transformStyle: 'preserve-3d',
                        opacity: 0,
                        display: 'none',
                      }}
                      className="speaker-image quick-list"
                    />
                  </div>
                </a>
              </div>

              {/* Repeat the structure for other speakers, adjusting the data as needed */}
              {/* Example structure for another speaker */}
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
                    style={{
                      opacity: 0,
                      transform:
                        'translate3d(-12px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  />
                  <div className="quick-list-image-hover quick-list" style={{ width: '0px' }}>
                    <div
                      style={{
                        backgroundImage:
                          'url(https://assets.website-files.com/60593a2037760a299a3ee0ec/605a72f8b8ab6349d07d0336_Portrait002.jpg)',
                        transform:
                          'translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                        transformStyle: 'preserve-3d',
                        opacity: 0,
                        display: 'none',
                      }}
                      className="speaker-image quick-list"
                    />
                  </div>
                </a>
              </div>
              {/* Add more list items as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
