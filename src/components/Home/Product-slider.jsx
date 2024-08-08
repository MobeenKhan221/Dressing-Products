/* eslint-disable no-use-before-define */
/* eslint-disable react/no-array-index-key */
import React from 'react';

function Productslider() {
  return (
    <div className="section">
      <div className="wrapper">
        <div className="three-grid-wrapper">
          <div className="clip">
            <h1 className="large-heading">
              Meet the glide
              <span className="gradient-span">speakers team&nbsp;</span>
            </h1>
          </div>
          <div className="max-450 clip">
            <div className="body-display large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, euismod felis, eros mi
              purus in est. Vitae sodales tellus vitae, tincidunt in sed orci.
            </div>
          </div>
          <div className="clip">
            <a href="https://webflow-path-one.webflow.io/about" className="button">
              <div>Learn more about us</div>
            </a>
          </div>
        </div>
      </div>
      <div className="team-collection-list-wrapper">
        <div className="team-wrapper">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-item">
              <a href={member.link} className="team-link">
                <div className="slide-image team-image">
                  <div
                    className="speaker-image team-images"
                    style={{ backgroundImage: `url(${member.imageUrl})` }}
                  />
                  <div className="team-member-info">
                    <h1 className="large-heading">{member.name}</h1>
                    <div className="body-display">{member.position}</div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="background-shade third-height">
        <div className="wrapper shade-wrapper" />
        <div className="background-cover" />
      </div>
    </div>
  );
}

const teamMembers = [
  {
    name: 'Terry Von',
    position: 'CMO',
    link: 'https://webflow-path-one.webflow.io/team/terry-von',
    imageUrl:
      'https://assets.website-files.com/60593a2037760a299a3ee0ec/605a757a76a6a92776538dd1_Portrait011.jpeg',
  },
  {
    name: 'Samantha Tai',
    position: 'CEO',
    link: 'https://webflow-path-one.webflow.io/team/samantha-tai',
    imageUrl:
      'https://assets.website-files.com/60593a2037760a299a3ee0ec/605a76128bff514e83e69f08_Portrait012.jpeg',
  },
  {
    name: 'Craig Wents',
    position: 'COO',
    link: 'https://webflow-path-one.webflow.io/team/craig-wents',
    imageUrl:
      'https://assets.website-files.com/60593a2037760a299a3ee0ec/605a77be5435861244bbfe25_Portrait016.jpeg',
  },
  {
    name: 'Jerry Maid',
    position: 'Customer Relationships',
    link: 'https://webflow-path-one.webflow.io/team/jerry-maid',
    imageUrl:
      'https://assets.website-files.com/60593a2037760a299a3ee0ec/605a76fede95ca6971b86fcc_Portrait014.jpeg',
  },
  {
    name: 'Sarah Prat',
    position: 'Executive Vice President',
    link: 'https://webflow-path-one.webflow.io/team/sarah-prat',
    imageUrl:
      'https://assets.website-files.com/60593a2037760a299a3ee0ec/605a7758de8c17303882292a_Portrait015.jpeg',
  },
];

export default Productslider;
