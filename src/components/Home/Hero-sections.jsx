/* eslint-disable react/no-array-index-key */
import React from 'react';

function Herosections() {
  const speakers = [
    {
      name: 'Ryan Baser',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor turpis, dictum a efficitur in, aliquam eget velit. Sed efficitur eget risus nec tristique.',
      imageClass: 'six',
      link: 'https://webflow-path-one.webflow.io/contact',
    },
    {
      name: 'Sam Pann',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor turpis, dictum a efficitur in, aliquam eget velit. Sed efficitur eget risus nec tristique.',
      imageClass: 'one',
      link: 'https://webflow-path-one.webflow.io/contact',
    },
    // Add other speakers as needed
  ];

  return (
    <div className="section home-hero-section">
      <div className="speakers-hero-wrapper">
        <div className="speaker-slider-wrapper">
          <div className="speaker-slider w-slider" aria-label="carousel">
            <div className="speaker-slide-mask w-slider-mask">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="speaker-slide w-slide"
                  aria-label={`${index + 1} of ${speakers.length}`}
                  role="group"
                >
                  <div className="speaker-slide-content">
                    <div className="slide-image">
                      <div className={`speaker-image-cover ${speaker.imageClass}`} />
                    </div>
                    <div className="speaker-info">
                      <div className="clip-text speaker-heading">
                        <h1 className="speaker-name">{speaker.name}</h1>
                      </div>
                      <div className="clip-text">
                        <div className="body-display large">{speaker.description}</div>
                      </div>
                    </div>
                    <div className="clip-text">
                      <a href={speaker.link} className="button w-inline-block">
                        <div>Book {speaker.name.split(' ')[0]}</div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosections;
