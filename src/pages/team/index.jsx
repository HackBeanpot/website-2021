import React, { Fragment } from 'react'
import TeamData from 'data/meet-the-team.json';
import TeamNameLeaf from 'images/team-name-leaf.jsx';
import TeamLeafPattern from 'images/team-leaf-pattern.jsx';
import TeamBadgeLeaf from 'images/team-badge-leaf.jsx';

const TeamMember = props => (
  <div className="team-member">
    <div className="team-member__image-container">
      <img className="team-member__image" src="https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg" alt="" />
      <div className="team-member__circle" />
      <span className="team-member__fun-fact">{props.funFact}</span>
    </div>
    <p class="team-member__name">{props.name}</p>
    <p>{props.position}</p>
  </div>
)

const Team = () => {
  function renderLeadership(section) {
    return (
      <Fragment class="mt-4">
        <div class="row">
          <div class="col-6">
            <TeamMember name={section.members[0].name}
              position={section.members[0].position}
              funFact={section.members[0].funFact} />
          </div>
          <div class="col-6">
            <TeamMember name={section.members[1].name}
              position={section.members[1].position}
              funFact={section.members[1].funFact} />
          </div>
        </div>
      </Fragment>
    )
  }

  function renderDesign(section) {
    return (
      <Fragment class="mt-4">
        <h3 class="team__title">Design</h3>
        <div className="team-leaf">
          <TeamNameLeaf />
        </div>
        <div class="row">
          <div class="col-sm-4 col-6">
            <TeamMember name={section.members[0].name}
              position={section.members[0].position}
              funFact={section.members[0].funFact} />
          </div>
          <div class="col-sm-4 col-6">
            <TeamMember name={section.members[1].name}
              position={section.members[1].position}
              funFact={section.members[1].funFact} />
          </div>
          <div class="col-sm-4 col-6">
            <TeamMember name={section.members[2].name}
              position={section.members[2].position}
              funFact={section.members[2].funFact} />
          </div>
          <div class="col-sm-4 offset-sm-2 col-6">
            <TeamMember name={section.members[3].name}
              position={section.members[3].position}
              funFact={section.members[3].funFact} />
          </div>
          <div class="col-sm-4 col-6">
            <TeamMember name={section.members[4].name}
              position={section.members[4].position}
              funFact={section.members[4].funFact} />
          </div>
        </div>
      </Fragment>
    )
  }

  function renderOutreach(section) {
    return (
      <Fragment class="mt-4">
        <h3 class="team__title">Outreach</h3>
        <div className="team-leaf">
          <TeamNameLeaf />
        </div>
        <div class="row">
          <div class="col-6">
            <TeamMember name={section.members[0].name}
              position={section.members[0].position}
              funFact={section.members[0].funFact} />

          </div>
          <div class="col-6">
            <TeamMember name={section.members[1].name}
              position={section.members[1].position}
              funFact={section.members[1].funFact} />
          </div>
          <div class="col-6">
            <TeamMember name={section.members[2].name}
              position={section.members[2].position}
              funFact={section.members[2].funFact} />
          </div>
          <div class="col-6">
            <TeamMember name={section.members[3].name}
              position={section.members[3].position}
              funFact={section.members[3].funFact} />
          </div>
        </div>
      </Fragment>
    )
  }

  function renderSocial(section) {
    return (
      <Fragment class="mt-4">
        <h3 class="team__title">Social</h3>
        <div className="team-leaf">
          <TeamNameLeaf />
        </div>
        <div class="row">
          <div class="offset-sm-4 col-sm-4 col-6">
            <TeamMember name={section.members[0].name}
              position={section.members[0].position}
              funFact={section.members[0].funFact} />
          </div>
        </div>
      </Fragment>
    )
  }

  function renderSponsorship(section) {
    return (
      <Fragment>
        <h3 class="team__title">Sponsorship</h3>
        <div className="team-leaf">
          <TeamNameLeaf />
        </div>
        <div class="row">
          <div class="col-6">
            <TeamMember name={section.members[0].name}
              position={section.members[0].position}
              funFact={section.members[0].funFact} />
          </div>
          <div class="col-6">
            <TeamMember name={section.members[1].name}
              position={section.members[1].position}
              funFact={section.members[1].funFact} />
          </div>
          <div class="col-6">
            <TeamMember name={section.members[2].name}
              position={section.members[2].position}
              funFact={section.members[2].funFact} />
          </div>
          <div class="col-6">
            <TeamMember name={section.members[3].name}
              position={section.members[3].position}
              funFact={section.members[3].funFact} />
          </div>
        </div>
      </Fragment>
    )
  }

  function renderTech(section) {
    return (
      <Fragment>
        <h3 class="team__title">Tech</h3>
        <div className="team-leaf">
          <TeamNameLeaf />
        </div>
        <div class="row">
          <div class="col-6">
            <TeamMember name={section.members[0].name}
              position={section.members[0].position}
              funFact={section.members[0].funFact} />
          </div>
          <div class="col-6">
            <TeamMember name={section.members[1].name}
              position={section.members[1].position}
              funFact={section.members[1].funFact} />
          </div>
          <div class="offset-sm-3 col-6">
            <TeamMember name={section.members[2].name}
              position={section.members[2].position}
              funFact={section.members[2].funFact} />
          </div>
        </div>
      </Fragment>
    )
  }

  return (
    <div className="team">
      <section className="team__header">
        <div className="container">
          <div className="team-header">
            <h1 className="header__title">Meet the Team behind HackBeanpot</h1>
            <div className="clearfix">
              <p className="d-inline-block team-header__description">
                We are a group of ~20 driven students who aim to make technical experience and
                knowledge accessible to anyone. In the months leading up to our hackathon in
                February, we work hard both within and across our five teams - Design, Outreach,
                Social Media, Sponsorship, and Tech!
              </p>
              <div className="team-badge-leaf__container">
                <span className="team-badge-leaf">
                  <TeamBadgeLeaf />
                  <span className="team-badge-leaf__content">Hover over a headshot for a fun fact!</span>
                </span>
              </div>
            </div>
          </div>
          {renderLeadership(TeamData[0])}
        </div>
      </section>

      <section class="meet-the-team">
        <div className="container">
          {renderDesign(TeamData[1])}
          {renderOutreach(TeamData[2])}
          {renderSocial(TeamData[3])}
          {renderSponsorship(TeamData[4])}
          {renderTech(TeamData[5])}

          <div className="team__cta-container">
            <h3 className="team__cta-label">Want to learn more about our team and HackBeanpot?</h3>
            <a href="mailto:team@hackbeapot.com" className="team__cta">Email us</a>
          </div>
        </div>
        <span class="team-leaf-pattern">
          <TeamLeafPattern />
        </span>
      </section>
    </div>
  )
}

export default Team;